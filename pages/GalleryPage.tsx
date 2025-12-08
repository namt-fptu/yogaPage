import React, { useState } from 'react';
import { X, ZoomIn, Camera, Sparkles } from 'lucide-react';

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
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-primary-50/30 to-accent-gold/10 dark:from-stone-900 dark:via-primary-900/20 dark:to-accent-gold/5 py-24 text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-6">
            <Camera size={16} className="text-primary" />
            <span>Thư Viện</span>
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="gradient-text">Thư Viện Ảnh</span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto text-lg">
            Những khoảnh khắc đẹp tại Sen Yoga
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(image.src)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-medium text-sm mb-1">{image.alt}</p>
                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    <Sparkles size={12} />
                    <span>Sen Yoga</span>
                  </div>
                </div>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                <ZoomIn size={18} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-stone-900/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          {/* Image container */}
          <div className="relative max-w-6xl max-h-[90vh] animate-scale-in">
            <img
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image shadow glow */}
            <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl rounded-3xl scale-90 opacity-50"></div>
          </div>

          {/* Navigation hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            Nhấn bên ngoài để đóng
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
