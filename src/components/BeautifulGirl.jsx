import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import config from './config';

function BeautifulGirl() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = () => {
      // Load images from public/assets folder - try JFIF first, then fallback
      const loadedImages = [];
      
      for (let i = 1; i <= 6; i++) {
        // Try JFIF first, then other formats as fallback
        loadedImages.push(`/assets/beautiful${i}.jfif`);
      }
      
      setImages(loadedImages);
    };
    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-[#202124] text-white">
      {/* Header */}
      <div className="border-b border-[#5f6368] sticky top-0 bg-[#202124] z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-[#303134] rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#8ab4f8]" />
          </button>
          <div className="text-sm text-[#9aa0a6]">
            https://www.leeandarianne.com/most-beautiful
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Who's the most beautiful girl in the world?
        </h1>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-[#9aa0a6]">
          <span>Lee & Arianne</span>
          <span>•</span>
          <span>Beauty</span>
          <span>•</span>
          <span>Published: Always</span>
        </div>

        {/* Divider */}
        <div className="border-b border-[#5f6368] mb-8"></div>

        {/* Blog Content */}
        <div className="prose prose-invert max-w-none">
          {/* Images Section - Show First */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {images.map((imageUrl, index) => (
                <div key={index} className="w-full aspect-square overflow-hidden rounded-lg">
                  <img
                    src={imageUrl}
                    alt={`Beautiful moment ${index + 1}`}
                    className="w-full h-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Try other extensions if JFIF fails
                      const currentSrc = e.target.src;
                      const basePath = currentSrc.replace(/\.(jfif|jpg|jpeg|png)$/, '');
                      const triedExt = currentSrc.match(/\.(jfif|jpg|jpeg|png)$/)?.[1];
                      
                      if (triedExt === 'jfif') {
                        // JFIF failed, try JPG
                        e.target.src = `${basePath}.jpg`;
                      } else if (triedExt === 'jpg') {
                        // JPG failed, try JPEG
                        e.target.src = `${basePath}.jpeg`;
                      } else if (triedExt === 'jpeg') {
                        // JPEG failed, try PNG
                        e.target.src = `${basePath}.png`;
                      }
                      // If PNG also fails, image will just not display (404)
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Placeholder if no images */}
          {images.length === 0 && (
            <div className="mb-8 p-8 bg-[#303134] rounded-lg text-center text-[#9aa0a6]">
              <p>Images not found. Please add beautiful1.jpg through beautiful6.jpg to the assets folder.</p>
            </div>
          )}

          {/* Text Section - Show After Images */}
          <div className="text-[#bdc1c6] leading-relaxed text-base sm:text-lg">
            <p className="mb-4">
              {config.mostBeautifulGirlAnswer}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#5f6368]">
          <div className="flex flex-wrap gap-4 text-sm text-[#9aa0a6]">
            <button 
              onClick={() => navigate(-1)}
              className="text-[#8ab4f8] hover:underline"
            >
              ← Back to search results
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BeautifulGirl;

