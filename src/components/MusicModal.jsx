import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

// Helper function to convert regular Spotify URLs to embed URLs
function getSpotifyEmbedUrl(url) {
  if (!url) return null;
  
  // If it's already an embed URL, return as is
  if (url.includes('/embed/')) {
    return url;
  }
  
  // Extract track ID from regular Spotify URL
  // Format: https://open.spotify.com/track/TRACK_ID
  const trackIdMatch = url.match(/\/track\/([a-zA-Z0-9]+)/);
  if (trackIdMatch) {
    const trackId = trackIdMatch[1];
    return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
  }
  
  return url;
}

function MusicModal({ isOpen, onClose, song }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleEnded = () => setIsPlaying(false);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnded);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [song?.mp3Url]);

  useEffect(() => {
    if (!isOpen) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen]);

  if (!song) return null;
  
  const embedUrl = getSpotifyEmbedUrl(song.spotifyUrl);
  const hasMp3 = song.mp3Url && song.mp3Url.trim() !== '';

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = (e) => {
    if (audioRef.current) {
      const newTime = (e.target.value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                ×
              </button>

              {/* Song Info */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">{song.title}</h2>
                <p className="text-white/70 text-lg">{song.artist}</p>
              </div>

              {/* MP3 Player (Priority) */}
              {hasMp3 ? (
                <div className="w-full">
                  <audio ref={audioRef} src={song.mp3Url} preload="metadata" />
                  
                  {/* Album Cover */}
                  {song.albumCover && (
                    <div className="w-full aspect-square mb-4 rounded-lg overflow-hidden">
                      <img
                        src={song.albumCover}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Audio Controls */}
                  <div className="bg-white/5 rounded-xl p-4">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={duration ? (currentTime / duration) * 100 : 0}
                        onChange={handleTimeUpdate}
                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#8ab4f8]"
                      />
                      <div className="flex justify-between text-xs text-white/60 mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    {/* Play/Pause Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={togglePlay}
                        className="w-16 h-16 rounded-full bg-[#8ab4f8] hover:bg-[#7aa3e8] flex items-center justify-center transition-colors shadow-lg"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" fill="white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ) : embedUrl ? (
                /* Spotify Player (Fallback) */
                <div className="w-full">
                  <iframe
                    style={{ borderRadius: '12px' }}
                    src={embedUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              ) : (
                <div className="bg-white/5 rounded-xl p-8 text-center">
                  <p className="text-white/60 mb-2">
                    No audio source configured.
                  </p>
                  <p className="text-white/40 text-sm">
                    Please add an MP3 file path (mp3Url) or Spotify URL in config.js
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MusicModal;

