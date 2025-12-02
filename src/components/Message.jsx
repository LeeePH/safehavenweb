import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import config from './config'; // Import config file

function Message() {
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const loadImages = () => {
      // Load images from public/assets folder - try JFIF first, then fallback
      const loadedImages = config.messageGallery.map((item, index) => {
        // Try JFIF first, then other formats as fallback
        return {
          Image: `/assets/MessageImage${index + 1}.jfif`,
          title: item?.title || 'No Title',
          description: item?.description || 'No Description',
        };
      });

      setPictures(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          {config.messageTitle}
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description }, index) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText={`Message image ${index + 1}`}
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
