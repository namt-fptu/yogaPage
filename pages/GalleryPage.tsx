import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Sample data for the gallery
const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800', alt: 'Yoga Studio Space' },
  { id: 2, src: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800', alt: 'Meditation Session' },
  { id: 3, src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800', alt: 'Group Class' },
  { id: 4, src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800', alt: 'Stretching Exercise' },
  { id: 5, src: 'https://images.unsplash.com/photo-1593164842264-854604db8a4e?auto=format&fit=crop&q=80&w=800', alt: 'Yoga Pose Outdoors' },
  { id: 6, src: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800', alt: 'Instructor Guidance' },
  { id: 7, src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800', alt: 'Peaceful Moment' },
  { id: 8, src: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=800', alt: 'Advanced Pose' },
  { id: 9, src: 'https://images.unsplash.com/photo-1599447421405-0c307e463751?auto=format&fit=crop&q=80&w=800', alt: 'Morning Flow' },
  { id: 10, src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800', alt: 'Balance Pose' },
  { id: 11, src: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800', alt: 'Sunset Yoga' },
  { id: 12, src: 'https://images.unsplash.com/photo-1573590330099-d6c7355ec595?auto=format&fit=crop&q=80&w=800', alt: 'Studio Interior' },
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="animate-fade-in pb-20">
      {/* Header */}
      <div className="bg-stone-100 dark:bg-stone-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">Thư Viện Ảnh</h1>
          <p className="text-stone-600 dark:text-stone-400">Những khoảnh khắc đẹp tại An Nhiên Yoga</p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((image) => (
            <div 
              key={image.id} 
              className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white drop-shadow-md" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
