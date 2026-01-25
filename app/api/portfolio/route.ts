import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const portfolioDir = join(process.cwd(), 'public', 'portfolio-images');
    
    // Read all files from the portfolio-images directory
    const files = await readdir(portfolioDir);
    
    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];
    const imageFiles = files
      .filter((file) => {
        const ext = file.toLowerCase().substring(file.lastIndexOf('.'));
        return imageExtensions.includes(ext);
      })
      .map((file, index) => ({
        id: index + 1,
        src: `/portfolio-images/${file}`,
        title: file.substring(0, file.lastIndexOf('.')) || file,
        category: 'Portfolio',
      }))
      .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically
    
    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    // If directory doesn't exist or can't be read, return empty array
    console.error('Error reading portfolio images:', error);
    return NextResponse.json({ images: [] });
  }
}
