'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { portfolioImages } from '@/lib/images';

export default function PortfolioGallery({ locale }: { locale: Locale }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isRTL = locale === 'ar';

  return (
    <section className="py-20 lg:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-primary-green text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
                className="max-w-5xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gray-900 rounded-lg p-8">
                  <div className="relative aspect-video rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={portfolioImages.find((item) => item.id === selectedImage)?.src || ''}
                      alt={portfolioImages.find((item) => item.id === selectedImage)?.title || ''}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {portfolioImages.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-primary-green">
                    {portfolioImages.find((item) => item.id === selectedImage)?.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
