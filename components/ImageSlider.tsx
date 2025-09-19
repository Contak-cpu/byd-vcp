import React, { useState, useCallback, useEffect } from 'react';

interface Image {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);
  
const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderId = Math.random().toString(36).substr(2, 9);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => {
      const isFirstSlide = prevIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => {
      const isLastSlide = prevIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Auto-slide every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div 
      className="relative w-full h-full group overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="w-full h-full bg-center bg-cover transition-all duration-500" 
        style={{ backgroundImage: `url(${currentImage.src})` }}
        key={currentIndex}
      ></div>
      
      {/* Overlay for Title and Description */}
      {(currentImage.title || currentImage.description) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 pointer-events-none">
          {currentImage.title && <h3 className="text-white text-2xl md:text-3xl font-bold font-heading">{currentImage.title}</h3>}
          {currentImage.description && <p className="text-gray-200 mt-2 text-sm md:text-base">{currentImage.description}</p>}
        </div>
      )}

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-5 opacity-70 hover:opacity-100 transition-opacity duration-300 z-[9999]">
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            goToPrevious();
          }} 
          className="bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full cursor-pointer select-none"
          type="button"
        >
            <ChevronLeftIcon className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-5 opacity-70 hover:opacity-100 transition-opacity duration-300 z-[9999]">
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            goToNext();
          }} 
          className="bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full cursor-pointer select-none"
          type="button"
        >
            <ChevronRightIcon className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-[9999]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-4 h-4 md:w-6 md:h-6 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer select-none flex items-center justify-center ${currentIndex === index ? 'bg-white shadow-lg' : 'bg-white/60 hover:bg-white/80'}`}
            type="button"
          >
            <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-white'}`}></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;