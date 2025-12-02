import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import config from './config';

function LoveStory() {
  const navigate = useNavigate();

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
            https://www.leeandarianne.com/love-story
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          What makes Lee fall for Arianne?
        </h1>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-[#9aa0a6]">
          <span>Lee & Arianne</span>
          <span>•</span>
          <span>Love Story</span>
          <span>•</span>
          <span>Published: Always</span>
        </div>

        {/* Divider */}
        <div className="border-b border-[#5f6368] mb-8"></div>

        {/* Blog Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-[#bdc1c6] leading-relaxed text-base sm:text-lg">
            <p className="mb-4">
              {config.leeFallsForArianneAnswer}
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

export default LoveStory;

