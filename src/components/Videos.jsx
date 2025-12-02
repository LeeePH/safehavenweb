import React, { useState, useEffect } from 'react';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import config from './config'; // Import config file

function Videos() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [voiceRecordings, setVoiceRecordings] = useState([]);

  useEffect(() => {
    const loadVideos = () => {
      // Load videos from public/assets folder
      const loadedVideos = [];
      for (let i = 1; i <= 9; i++) {
        loadedVideos.push({
          videoUrl: `/assets/Video${i}.mp4`,
        });
      }
      setVideos(loadedVideos);
    };

    const loadVoiceRecordings = () => {
      // Load voice recordings from public/assets folder
      const loadedVoices = [];
      for (let i = 1; i <= 20; i++) { // Support up to 20 voice recordings
        loadedVoices.push({
          audioUrl: `/assets/Voice${i}.mp3`,
        });
      }
      setVoiceRecordings(loadedVoices);
    };

    loadVideos();
    loadVoiceRecordings();
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 drop-shadow-lg text-white text-center">
          {config.videosTitle || config.pictureTitle}
        </h1>

        {/* Videos Section */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
            Videos:
          </h2>
          {videos.length > 0 ? (
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {videos.slice(0, 9).map((video, index) => (
                <div
                  key={index}
                  className="relative aspect-square bg-black/20 rounded-lg overflow-hidden group"
                >
                  <video
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60 py-8 bg-white/5 rounded-lg">
              <p>No videos found. Please add Video1.mp4, Video2.mp4, etc. to the assets folder.</p>
            </div>
          )}
        </div>

        {/* Voice Recordings Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
            {config.voiceRecordingsTitle}:
          </h2>
          {voiceRecordings.length > 0 ? (
            <div className="space-y-3">
              {voiceRecordings.map((recording, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4"
                >
                  <audio
                    src={recording.audioUrl}
                    controls
                    className="w-full"
                    preload="metadata"
                  >
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60 py-8 bg-white/5 rounded-lg">
              <p>No voice recordings found. Please add Voice1.mp3, Voice2.mp3, etc. to the assets folder.</p>
            </div>
          )}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center w-full mt-4">
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

export default Videos;

