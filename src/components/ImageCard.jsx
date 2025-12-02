import React from 'react';

export const ImageCard = ({ imageUrl, videoUrl, altText = "image", title, description }) => {
    return (
      <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg h-[36rem]">
        <div className="relative w-full h-[25rem]">
          {videoUrl ? (
            <video
              src={videoUrl}
              controls
              className="w-full h-full object-cover"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-full object-cover"
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
          )}
        </div>
        <div className="p-2">
          <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  