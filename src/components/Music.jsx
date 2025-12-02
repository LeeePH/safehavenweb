import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import config from "./config"; // Import config file
import MusicModal from "./MusicModal"; // Import music modal

function Music() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadSongs = () => {
      const loadedSongs = config.musicGallery.map((song, index) => {
        // Try multiple image formats from public/assets/music folder
        // Try all extensions - browser will handle 404s for missing files
        const imageExtensions = ['png', 'jpg', 'jpeg', 'jfif'];
        // Use PNG first, then try others as fallback
        const albumCover = `/assets/music/${index + 1}.png`;
        
        // Handle MP3 URL - if it's a relative path, convert to public path
        let mp3Url = song.mp3Url || "";
        if (mp3Url && mp3Url.trim() !== "" && mp3Url.startsWith('../assets/')) {
          mp3Url = mp3Url.replace('../assets/', '/assets/');
        } else if (mp3Url && mp3Url.trim() !== "" && !mp3Url.startsWith('http') && !mp3Url.startsWith('/')) {
          // If it's a relative path without ../assets/, assume it's in /assets/music/
          mp3Url = `/assets/music/${mp3Url}`;
        }
        
        return {
          albumCover: albumCover,
          title: song.title || "No Title",
          artist: song.artist || "Unknown Artist",
          left: song.left || "0%",
          top: song.top || "0%",
          spotifyUrl: song.spotifyUrl || "",
          mp3Url: mp3Url,
        };
      });

      setSongs(loadedSongs);
    };

    loadSongs();
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
          {config.musicTitle}
        </h1>

        <div ref={containerRef} className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12">
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{
                left: song.left,
                top: song.top,
              }}
              drag
              dragConstraints={containerRef}
              onClick={() => {
                setSelectedSong(song);
                setIsModalOpen(true);
              }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem] hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <img
                    src={song.albumCover}
                    alt="Album cover"
                    className="w-full h-full rounded-md object-cover"
                    onError={(e) => {
                      // Try other extensions if PNG fails
                      const currentSrc = e.target.src;
                      const basePath = currentSrc.replace(/\.(png|jpg|jpeg|jfif)$/, '');
                      const extensions = ['jpg', 'jpeg', 'jfif'];
                      const triedExt = currentSrc.match(/\.(png|jpg|jpeg|jfif)$/)?.[1];
                      
                      if (triedExt === 'png') {
                        // PNG failed, try JPG
                        e.target.src = `${basePath}.jpg`;
                      } else if (triedExt === 'jpg') {
                        // JPG failed, try JPEG
                        e.target.src = `${basePath}.jpeg`;
                      } else if (triedExt === 'jpeg') {
                        // JPEG failed, try JFIF
                        e.target.src = `${basePath}.jfif`;
                      } else {
                        // All failed, show placeholder
                        e.target.style.display = 'none';
                        if (!e.target.nextElementSibling) {
                          const placeholder = document.createElement('div');
                          placeholder.className = 'w-full h-full rounded-md bg-white/10 flex items-center justify-center';
                          placeholder.innerHTML = '<span class="text-white/50 text-xs">🎵</span>';
                          e.target.parentElement.appendChild(placeholder);
                        }
                      }
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-medium text-sm truncate">{song.title}</h2>
                  <p className="text-white/70 text-xs truncate">{song.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center w-full mt-4 mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>
      </div>

      {/* Music Modal */}
      <MusicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        song={selectedSong}
      />
    </div>
  );
}

export default Music;
