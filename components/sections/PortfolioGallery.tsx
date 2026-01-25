'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { Locale } from '@/lib/i18n';

interface PortfolioImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

export default function PortfolioGallery({ locale }: { locale: Locale }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [portfolioImages, setPortfolioImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const isRTL = locale === 'ar';

  const handleImageError = (id: number) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  useEffect(() => {
    async function fetchPortfolioImages() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/portfolio');
        
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio images');
        }
        
        const data = await response.json();
        setPortfolioImages(data.images || []);
      } catch (err) {
        console.error('Error fetching portfolio images:', err);
        setError('Failed to load portfolio images');
        // Fallback to empty array on error
        setPortfolioImages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolioImages();
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="text-primary-green animate-spin" size={48} />
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <p className="text-gray-400">Please make sure the portfolio-images folder exists in the public directory.</p>
          </div>
        )}

        {!loading && !error && portfolioImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No portfolio images found.</p>
            <p className="text-gray-500 mt-2">Add images to the public/portfolio-images folder to see them here.</p>
          </div>
        )}

        {!loading && portfolioImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              {imageErrors.has(item.id) ? (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Image not found</p>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => handleImageError(item.id)}
                />
              )}
            </motion.div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-white hover:text-primary-green transition-colors duration-300 z-10`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={32} />
              </motion.button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                  {portfolioImages.find((item) => item.id === selectedImage) && (
                    <Image
                      src={portfolioImages.find((item) => item.id === selectedImage)!.src}
                      alt={portfolioImages.find((item) => item.id === selectedImage)!.title}
                      width={1920}
                      height={1080}
                      className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                      sizes="(max-width: 1920px) 100vw, 1920px"
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
