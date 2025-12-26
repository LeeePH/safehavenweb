import React, { useState, useRef, useEffect } from 'react';
import { Search, Mic, Camera, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Google } from './icons';
import config from './config'; // Import config file

function Question() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [beautifulImages, setBeautifulImages] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    const loadImages = () => {
      // Load images from public/assets folder - try JFIF first, then fallback
      const loadedImages = [];
      
      for (let i = 1; i <= 6; i++) {
        // Try JFIF first, then other formats as fallback
        loadedImages.push(`/assets/beautiful${i}.jfif`);
      }
      
      setBeautifulImages(loadedImages);
    };
    loadImages();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseQuery = searchQuery.toLowerCase().trim();
    
    // Check for the special proposal code "143"
    if (lowerCaseQuery === "143" || lowerCaseQuery.includes("143")) {
      navigate('/proposal');
      return;
    }
    
    // Check if it's the special query about Lee falling for Arianne
    if (lowerCaseQuery === "what makes lee fall for arianne?" || lowerCaseQuery.includes("what makes lee fall for arianne")) {
      setShowSearchResults(true);
      setIsInputFocused(true);
      return;
    }
    
    // Check if it's the special query about most beautiful girl
    if (lowerCaseQuery.includes("most beautiful girl") || lowerCaseQuery.includes("who's the most beautiful")) {
      setShowSearchResults(true);
      setIsInputFocused(true);
      return;
    }
    
    // Check for timer redirect query
    if (config.correctSearchQueries.some(query => lowerCaseQuery === query.toLowerCase())) {
      navigate(config.timerRedirectPath);
    } else {
      // For other searches, show search results page
      setShowSearchResults(true);
      setIsInputFocused(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#202124] text-white">
      {!isInputFocused ? (
        <div className="flex flex-col items-center px-4 pt-16">
          <div className="mb-8">
            <Google />
          </div>
          <div
            className="w-full max-w-[600px] flex items-center gap-3 px-4 py-3 rounded-full bg-[#303134] border border-[#5f6368] focus-within:border-[#8ab4f8]"
            onClick={() => {
              setIsInputFocused(true);
              setTimeout(() => inputRef.current?.focus(), 0);
            }}
          >
            <Search className="w-5 h-5 text-[#9aa0a6]" />
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent outline-none"
              placeholder={config.searchPlaceholder}
            />
            <Mic className="w-5 h-5 text-[#8ab4f8]" />
            <Camera className="w-5 h-5 text-[#8ab4f8]" />
          </div>

          <div className="mt-8 w-full max-w-[600px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl">{config.trendingTitle}</h2>
              <button className="p-2">
                <Search className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {config.trendingSearches.map((trend) => (
                <div key={trend} className="flex items-center gap-3 py-2">
                  <Search className="w-5 h-5 text-[#9aa0a6]" />
                  <span>{trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : showSearchResults ? (
        // Google Search Results Page
        <div className="min-h-screen bg-[#202124] text-white">
          {/* Search Header */}
          <div className="border-b border-[#5f6368]">
            <div className="max-w-3xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <button 
                    type="button" 
                    onClick={() => {
                      setShowSearchResults(false);
                      setSearchQuery('');
                    }}
                    className="p-1 sm:p-0"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab4f8]" />
                  </button>
                  <div className="hidden sm:block">
                    <Google />
                  </div>
                </div>
                <form onSubmit={handleSearch} className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-[#303134] border border-[#5f6368] focus-within:border-[#8ab4f8]">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#9aa0a6] flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-sm sm:text-base min-w-0"
                      autoFocus
                    />
                    <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab4f8] flex-shrink-0 hidden sm:block" />
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab4f8] flex-shrink-0 hidden sm:block" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            {/* Stats */}
            <div className="text-xs sm:text-sm text-[#9aa0a6] mb-4 sm:mb-6">
              About 1 result (0.39 seconds)
            </div>

            {/* Main Result */}
            {searchQuery.toLowerCase().includes("what makes lee fall for arianne") ? (
              <div className="mb-6">
                <div className="text-xs sm:text-sm text-[#9aa0a6] mb-1">
                  https://www.leeandarianne.com/love-story
                </div>
                <h3 
                  className="text-lg sm:text-xl text-[#8ab4f8] hover:underline cursor-pointer mb-1 break-words"
                  onClick={() => navigate('/love-story')}
                >
                  What makes Lee fall for Arianne? - Love Story
                </h3>
                <p className="text-sm sm:text-base text-[#bdc1c6] leading-relaxed line-clamp-3 overflow-hidden">
                  {config.leeFallsForArianneAnswer}
                </p>
                <button
                  onClick={() => navigate('/love-story')}
                  className="text-sm text-[#8ab4f8] hover:underline mt-2"
                >
                  Read more →
                </button>
              </div>
            ) : searchQuery.toLowerCase().includes("most beautiful girl") || searchQuery.toLowerCase().includes("who's the most beautiful") ? (
              <div className="mb-6">
                {/* Google Images Style Section */}
                {beautifulImages.length > 0 && (
                  <>
                    {/* Images Grid - Show First Like Google Images */}
                    <div className="mb-6">
                      <div className="text-xs sm:text-sm text-[#9aa0a6] mb-3">
                        Images for "Who's the most beautiful girl in the world?"
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                        {beautifulImages.map((imageUrl, index) => (
                          <div 
                            key={index}
                            className="aspect-square bg-[#303134] rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity group"
                            onClick={() => navigate('/most-beautiful')}
                          >
                            <img
                              src={imageUrl}
                              alt={`Beautiful ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
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
                    </div>
                    
                    {/* Link Section - Below Images */}
                    <div className="border-t border-[#5f6368] pt-4">
                      <div className="text-xs sm:text-sm text-[#9aa0a6] mb-1">
                        https://www.leeandarianne.com/most-beautiful
                      </div>
                      <h3 
                        className="text-lg sm:text-xl text-[#8ab4f8] hover:underline cursor-pointer mb-1 break-words"
                        onClick={() => navigate('/most-beautiful')}
                      >
                        Who's the most beautiful girl in the world? - Beauty
                      </h3>
                      <p className="text-sm sm:text-base text-[#bdc1c6] leading-relaxed line-clamp-3 overflow-hidden">
                        {config.mostBeautifulGirlAnswer}
                      </p>
                      <button
                        onClick={() => navigate('/most-beautiful')}
                        className="text-sm text-[#8ab4f8] hover:underline mt-2"
                      >
                        Read more →
                      </button>
                    </div>
                  </>
                )}
                
                {/* Fallback if no images */}
                {beautifulImages.length === 0 && (
                  <div className="mb-6">
                    <div className="text-xs sm:text-sm text-[#9aa0a6] mb-1">
                      https://www.leeandarianne.com/most-beautiful
                    </div>
                    <h3 
                      className="text-lg sm:text-xl text-[#8ab4f8] hover:underline cursor-pointer mb-1 break-words"
                      onClick={() => navigate('/most-beautiful')}
                    >
                      Who's the most beautiful girl in the world? - Beauty
                    </h3>
                    <p className="text-sm sm:text-base text-[#bdc1c6] leading-relaxed line-clamp-3 overflow-hidden">
                      {config.mostBeautifulGirlAnswer}
                    </p>
                    <button
                      onClick={() => navigate('/most-beautiful')}
                      className="text-sm text-[#8ab4f8] hover:underline mt-2"
                    >
                      Read more →
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-6">
                <div className="text-sm text-[#9aa0a6] mb-1">
                  No results found
                </div>
                <h3 className="text-xl text-[#8ab4f8] mb-1">
                  Your search - {searchQuery} - did not match any documents.
                </h3>
                <p className="text-[#bdc1c6]">
                  Try searching for "What makes Lee fall for Arianne?" or "How long have we been together?"
                </p>
              </div>
            )}

            {/* Related Searches */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Related searches</h4>
              <div className="space-y-2 sm:space-y-3">
                {config.trendingSearches.slice(0, 4).map((trend, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 py-2 hover:bg-[#303134] rounded-lg px-2 sm:px-3 cursor-pointer transition-colors"
                    onClick={() => {
                      setSearchQuery(trend);
                      const lowerTrend = trend.toLowerCase();
                      if (lowerTrend.includes("what makes lee fall for arianne") || 
                          lowerTrend.includes("most beautiful girl") || 
                          lowerTrend.includes("who's the most beautiful")) {
                        setShowSearchResults(true);
                      }
                    }}
                  >
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#9aa0a6] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-[#8ab4f8] break-words">{trend}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Search Input View with Keyboard
        <div className="flex flex-col min-h-screen w-full max-w-[480px] mx-auto ">
          <form onSubmit={handleSearch} className="border-b border-[#5f6368]">
            <div className="flex items-center gap-3 px-4 py-3">
              <button type="button" onClick={() => setIsInputFocused(false)}>
                <ArrowLeft className="w-5 h-5 text-[#8ab4f8]" />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                autoFocus
              />
              <Mic className="w-5 h-5 text-[#8ab4f8]" />
              <Camera className="w-5 h-5 text-[#8ab4f8]" />
            </div>
          </form>
          <div className="mt-10 px-5 text-white/50">
            <p>{config.proTip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
