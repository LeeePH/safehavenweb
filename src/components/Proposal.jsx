import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Download, Play, Pause } from 'lucide-react';
import { gsap, CSSRulePlugin } from "gsap/all";
import config from './config';
import '../index.css';

gsap.registerPlugin(CSSRulePlugin);

// Typewriter effect hook
const useTypewriter = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      setIsComplete(false);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed]);

  return { displayedText, isComplete };
};

// Story 1 Component
const Story1Component = ({ onNext }) => {
  const story1Title = useTypewriter(config.proposalStory1Title || "Our LDR Journey", 50);
  const story1Content = useTypewriter(config.proposalStory1Content || "Miles apart, but hearts connected. Every message, every call, every moment we share bridges the distance between us. Our love knows no boundaries.", 60);
  const images = config.proposalStory1Images || [];
  
  return (
    <motion.div
      key="story1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl w-full px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 min-h-[3rem]">
            {story1Title.displayedText}
            {!story1Title.isComplete && <span className="animate-pulse">|</span>}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 min-h-[8rem]">
            {story1Content.displayedText}
            {!story1Content.isComplete && <span className="animate-pulse">|</span>}
          </p>
          {story1Content.isComplete && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={onNext}
              className="px-6 py-3 flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/50 rounded-lg hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.nextButtonText || "Next"} <ArrowRight className="w-5 h-5" />
            </motion.button>
          )}
        </div>
        
        {/* Right Side - Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.slice(0, 3).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`LDR Journey ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const basePath = img.replace(/\.(jfif|jpg|jpeg|png)$/, '');
                  if (img.includes('.jfif')) {
                    e.target.src = `${basePath}.jpg`;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Story 2 Component
const Story2Component = ({ onNext }) => {
  const story2Title = useTypewriter(config.proposalStory2Title || "Growing Together", 100);
  const kiligTitle = useTypewriter(config.proposalStory2KiligTitle || "Kilig Moments", 100);
  const kiligContent = useTypewriter(config.proposalStory2KiligContent || "Through every challenge and every joy, we've grown stronger. Your presence in my life has been the greatest gift, and I'm grateful for every day we get to share.", 80);
  const tampuhanTitle = useTypewriter(config.proposalStory2TampuhanTitle || "Tampuhan", 100);
  const tampuhanContent = useTypewriter(config.proposalStory2TampuhanContent || "Even in our disagreements, we learn and grow. Every misunderstanding becomes a chance to understand each other better, to love deeper, and to strengthen our bond.", 80);
  
  return (
    <motion.div
      key="story2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl w-full px-4"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 min-h-[3rem]">
          {story2Title.displayedText}
          {!story2Title.isComplete && <span className="animate-pulse">|</span>}
        </h2>
      </div>
      
      <div className="space-y-12">
        {/* Kilig Moments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-pink-300 min-h-[2rem]">
            {kiligTitle.displayedText}
            {!kiligTitle.isComplete && <span className="animate-pulse">|</span>}
          </h3>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed min-h-[6rem]">
            {kiligContent.displayedText}
            {!kiligContent.isComplete && <span className="animate-pulse">|</span>}
          </p>
        </motion.div>
        
        {/* Tampuhan Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-300 min-h-[2rem]">
            {tampuhanTitle.displayedText}
            {!tampuhanTitle.isComplete && <span className="animate-pulse">|</span>}
          </h3>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed min-h-[6rem]">
            {tampuhanContent.displayedText}
            {!tampuhanContent.isComplete && <span className="animate-pulse">|</span>}
          </p>
        </motion.div>
      </div>
      
      {kiligContent.isComplete && tampuhanContent.isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <motion.button
            onClick={onNext}
            className="px-6 py-3 flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/50 rounded-lg hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {config.nextButtonText || "Next"} <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

// Question Stage Component
const QuestionStageComponent = ({ onYes, onNo, noButtonClicks, getNoButtonText, showYesButton, setShowYesButton }) => {
  useEffect(() => {
    // After 5 seconds, change "I don't" to "Yes"
    const timer = setTimeout(() => {
      setShowYesButton(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [setShowYesButton]);

  return (
    <motion.div
      key="question"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      className="text-center max-w-2xl"
    >
      <motion.div
        className="mb-8"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart className="w-24 h-24 text-pink-400 fill-pink-400 mx-auto" />
      </motion.div>
      <motion.h2
        className="text-3xl sm:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {config.proposalQuestion || "Will you be my girlfriend?"}
      </motion.h2>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          onClick={onYes}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-xl font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
          animate={{
            scale: noButtonClicks > 0 ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: noButtonClicks > 0 ? 1.25 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={showYesButton ? 'yes' : 'idont'}
        >
          {showYesButton ? (
            <>
              {config.proposalYesButton || "Yes"} 💖
            </>
          ) : (
            "I don't"
          )}
        </motion.button>
        <motion.button
          onClick={onNo}
          className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full text-xl font-bold hover:bg-white/30 transition-all"
          animate={{
            scale: noButtonClicks > 0 ? 0.7 : 1,
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: noButtonClicks > 0 ? 0.75 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {getNoButtonText()}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Story 3 Component
const Story3Component = ({ onNext }) => {
  const story3Title = useTypewriter(config.proposalStory3Title || "The First 'I Love You'", 100);
  const story3Content = useTypewriter(config.proposalStory3Content || "That moment when we first said 'I love you' changed everything. It wasn't just words—it was a promise, a commitment, the beginning of forever.", 80);
  const image = config.proposalStory3Image || "/assets/beautiful4.jfif";
  
  return (
    <motion.div
      key="story3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl w-full px-4"
    >
      {/* Image on Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 rounded-lg overflow-hidden"
      >
        <img
          src={image}
          alt="I Love You"
          className="w-full h-auto max-h-[400px] object-cover"
          onError={(e) => {
            const basePath = image.replace(/\.(jfif|jpg|jpeg|png)$/, '');
            if (image.includes('.jfif')) {
              e.target.src = `${basePath}.jpg`;
            }
          }}
        />
      </motion.div>
      
      {/* Text Below */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 min-h-[3rem]">
          {story3Title.displayedText}
          {!story3Title.isComplete && <span className="animate-pulse">|</span>}
        </h2>
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 min-h-[8rem]">
          {story3Content.displayedText}
          {!story3Content.isComplete && <span className="animate-pulse">|</span>}
        </p>
        {story3Content.isComplete && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onNext}
            className="px-6 py-3 flex items-center gap-2 mx-auto bg-white/20 backdrop-blur-sm border border-white/50 rounded-lg hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {config.nextButtonText || "Next"} <ArrowRight className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

function Proposal() {
  const [stage, setStage] = useState('loading'); // loading, ringVerification, welcome, story1, story2, story3, recap, promises, plans, question, official
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const [openEnvelopes, setOpenEnvelopes] = useState({ promises: {}, plans: {} });
  const [ringImage, setRingImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const fileInputRef = useRef(null);
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showYesButton, setShowYesButton] = useState(false);

  // Loading sequence
  useEffect(() => {
    if (stage === 'loading') {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStage('ringVerification'), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [stage]);

  // Auto-play music on welcome stage (for mobile)
  useEffect(() => {
    if (stage === 'welcome' && config.proposalWelcomeMusic && audioRef.current) {
      // Small delay to ensure audio element is mounted
      const timer = setTimeout(async () => {
        if (audioRef.current && audioRef.current.paused) {
          try {
            // Set audio properties before playing
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
            
            // Try to play
            await audioRef.current.play();
            setIsMusicPlaying(true);
          } catch (err) {
            // Auto-play blocked - user can click play button
            console.log('Auto-play prevented, user can click play button:', err);
          }
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Reset showYesButton when entering question stage
  useEffect(() => {
    if (stage === 'question') {
      setShowYesButton(false);
    }
  }, [stage, setShowYesButton]);

  const toggleMusic = async (e) => {
    if (e) e.preventDefault();
    
    if (!audioRef.current) {
      console.log('Audio ref not available');
      return;
    }
    
    try {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        // Ensure audio is set up
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
        
        // Play the audio
        await audioRef.current.play();
        setIsMusicPlaying(true);
      }
    } catch (err) {
      console.error('Audio play failed:', err);
      // Try loading and playing again
      try {
        if (audioRef.current.readyState < 2) {
          audioRef.current.load();
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
        await audioRef.current.play();
        setIsMusicPlaying(true);
      } catch (retryErr) {
        console.error('Audio retry failed:', retryErr);
        setIsMusicPlaying(false);
      }
    }
  };

  // Auto-advance welcome to story1
  useEffect(() => {
    if (stage === 'welcome') {
      const timer = setTimeout(() => setStage('story1'), 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleNext = () => {
    if (stage === 'story1') {
      setStage('story2');
    } else if (stage === 'story2') {
      setStage('story3');
    } else if (stage === 'story3') {
      setStage('recap');
    } else if (stage === 'recap') {
      setStage('promises');
    } else if (stage === 'promises') {
      setStage('plans');
    } else if (stage === 'plans') {
      setStage('question');
    }
  };

  const certificateRef = useRef(null);

  const handleYes = () => {
    setStage('official');
    // Generate certificate after a short delay
    setTimeout(() => {
      generateCertificate();
    }, 1000);
  };

  const generateCertificate = () => {
    // Certificate will be generated in the official stage component
  };

  const downloadCertificate = () => {
    if (!certificateRef.current) return;

    // Use html2canvas to capture the certificate
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(certificateRef.current, {
        backgroundColor: '#f5f5dc',
        scale: 2,
        logging: false,
        useCORS: true,
      }).then((canvas) => {
        // Convert to blob and download
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `Official_Certificate_${config.certificatePartner1Name}_${config.certificatePartner2Name}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        });
      });
    });
  };

  const handleNo = () => {
    setNoButtonClicks(prev => prev + 1);
    // After max clicks, still go to official (playful)
    if (noButtonClicks >= (config.proposalNoButtonTexts?.length || 5) - 1) {
      setTimeout(() => setStage('official'), 500);
    }
  };

  const toggleEnvelope = (type, index) => {
    setOpenEnvelopes(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [index]: !prev[type][index]
      }
    }));
  };

  const EnvelopeCard = ({
    title,
    message,
    index,
    type,
  }) => {
    const isOpen = openEnvelopes[type]?.[index] || false;

    return (
      <div
        className="w-full flex justify-center items-center py-12"
        style={{ minHeight: isOpen ? "480px" : "320px", transition: "min-height 0.5s ease" }}
      >
        <div className="letter-container">
          <motion.div className="envelope-wrapper" onClick={() => !isOpen && toggleEnvelope(type, index)}>
            {/* Top Flap */}
            <motion.div
              className="absolute top-0 left-0 w-full h-0 border-t-[115px] border-t-[#7873A7] border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent origin-top z-40 pointer-events-none drop-shadow-md"
              initial={false}
              animate={isOpen ? { rotateX: 180, zIndex: 10 } : { rotateX: 0, zIndex: 40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Envelope Back */}
            <div className="envelope-back" />

            {/* The Letter */}
            <motion.div
              className="letter-content"
              initial={false}
              animate={isOpen ? { y: -160, zIndex: 50, scale: 1.05 } : { y: 0, zIndex: 20, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="letter-header">
                <span className="font-bold text-sm uppercase tracking-wider">{title}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleEnvelope(type, index)
                  }}
                  className="close-letter hover:text-red-500 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="letter-body custom-scrollbar">{message}</div>
            </motion.div>

            {/* Envelope Front (Static Triangles) */}
            <div className="envelope-front">
              <div className="envelope-left" />
              <div className="envelope-right" />
              <div className="envelope-bottom" />
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  const getNoButtonText = () => {
    const texts = config.proposalNoButtonTexts || ["No", "Are you sure?", "Really?", "Please?", "Last chance!"];
    return texts[Math.min(noButtonClicks, texts.length - 1)];
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRingImage(reader.result);
        // Start scanning process
        setIsScanning(true);
        setTimeout(() => {
          setIsScanning(false);
          setIsVerified(true);
          // After showing verified message, proceed to welcome
          setTimeout(() => {
            setStage('welcome');
          }, 2000);
        }, 2000); // Simulate 2 second scan
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTakePhoto = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center text-white px-4 relative overflow-hidden">
      {/* Fixed Music Play Button - Always visible */}
      {config.proposalWelcomeMusic && (
        <>
          <audio
            ref={audioRef}
            src={config.proposalWelcomeMusic}
            loop
            preload="auto"
            playsInline
            onPlay={() => setIsMusicPlaying(true)}
            onPause={() => setIsMusicPlaying(false)}
            onError={(e) => {
              console.error('Audio loading error:', e);
              setIsMusicPlaying(false);
            }}
          />
          <motion.button
            onClick={toggleMusic}
            className="fixed top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center hover:bg-white/30 transition-all z-50 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            aria-label={isMusicPlaying ? "Pause music" : "Play music"}
          >
            {isMusicPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-0.5" />
            )}
          </motion.button>
        </>
      )}
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-pink-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {/* Loading Stage */}
        {stage === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              className="text-6xl mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="w-16 h-16 text-pink-400 fill-pink-400" />
            </motion.div>
            <motion.p
              className="text-xl mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Preparing something special...
            </motion.p>
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-sm mt-2 text-white/70">{loadingProgress}%</p>
          </motion.div>
        )}

        {/* Ring Verification Stage */}
        {stage === 'ringVerification' && (
          <motion.div
            key="ringVerification"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-2xl w-full px-4"
          >
            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {config.ringVerificationTitle || "Before we proceed"}
            </motion.h1>

            {!ringImage && !isScanning && !isVerified && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.p
                  className="text-lg sm:text-xl text-white/90 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {config.ringVerificationQuestion || "Did you receive the promise ring I've gifted?"}
                </motion.p>
                <motion.p
                  className="text-base sm:text-lg text-white/70 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {config.ringVerificationInstruction || "Please take a picture of your finger wearing the ring and upload it as proof."}
                </motion.p>

                <motion.button
                  onClick={handleTakePhoto}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  📸 Take Photo
                </motion.button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </motion.div>
            )}

            {ringImage && isScanning && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <div className="mb-6 rounded-lg overflow-hidden max-w-md">
                  <img
                    src={ringImage}
                    alt="Ring verification"
                    className="w-full h-auto"
                  />
                </div>
                <motion.div
                  className="flex flex-col items-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.div
                    className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="text-lg text-white/90">
                    {config.ringVerificationScanning || "Scanning image..."}
                  </p>
                </motion.div>
              </motion.div>
            )}

            {isVerified && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="mb-6"
                >
                  <Heart className="w-20 h-20 text-pink-400 fill-pink-400" />
                </motion.div>
                <motion.p
                  className="text-xl sm:text-2xl text-white/90 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {config.ringVerificationReceived || "Ring verified! Thank you for the proof, my love. 💍✨"}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Welcome Stage */}
        {stage === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-2xl relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Heart className="w-20 h-20 text-pink-400 fill-pink-400 mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {config.proposalWelcome || "Welcome, my love"}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {config.proposalWelcomeMessage || "You've found something special..."}
            </motion.p>
          </motion.div>
        )}

        {/* Story Part 1 - LDR Journey (Left: Text, Right: Images) */}
        {stage === 'story1' && <Story1Component onNext={handleNext} />}

        {/* Story Part 2 - Growing Together (Two sections: Kilig Moments & Tampuhan) */}
        {stage === 'story2' && <Story2Component onNext={handleNext} />}

        {/* Story Part 3 - I Love You (Image top, Text bottom) */}
        {stage === 'story3' && <Story3Component onNext={handleNext} />}

        {/* 2025 Recap Section */}
        {stage === 'recap' && (
          <motion.div
            key="recap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-3xl w-full"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              {config.proposalRecap2025Title || "Our 2025 Journey"}
            </h2>
            <div className="space-y-6 mb-8 max-h-[60vh] overflow-y-auto px-4">
              {(config.proposalRecap2025Items || []).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-left"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={handleNext}
              className="px-6 py-3 flex items-center gap-2 mx-auto bg-white/20 backdrop-blur-sm border border-white/50 rounded-lg hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.nextButtonText || "Next"} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Promises Section */}
        {stage === 'promises' && (
          <motion.div
            key="promises"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center w-full px-2 sm:px-4 py-4 sm:py-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-2">
              {config.proposalPromisesTitle || "My Promises to You"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 justify-items-center max-w-7xl mx-auto">
              {(config.proposalPromises || []).slice(0, 6).map((promise, index) => (
                <EnvelopeCard
                  key={index}
                  title={promise.title}
                  message={promise.message}
                  index={index}
                  type="promises"
                />
              ))}
            </div>
            <motion.button
              onClick={handleNext}
              className="px-6 py-3 flex items-center gap-2 mx-auto bg-white/20 backdrop-blur-sm border border-white/50 rounded-lg hover:bg-white/30 transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.nextButtonText || "Next"} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Plans Section */}
        {stage === 'plans' && (
          <motion.div
            key="plans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center w-full px-2 sm:px-4 py-4 sm:py-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-2">
              {config.proposalPlans2026Title || "Our Plans for 2026"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 justify-items-center max-w-7xl mx-auto">
              {(config.proposalPlans2026 || []).slice(0, 6).map((plan, index) => (
                <EnvelopeCard
                  key={index}
                  title={plan.title}
                  message={plan.message}
                  index={index}
                  type="plans"
                />
              ))}
            </div>
            <motion.button
              onClick={handleNext}
              className="px-6 py-3 flex items-center gap-2 mx-auto bg-white/20 backdrop-blur-sm border border-white/50 rounded-lg hover:bg-white/30 transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.nextButtonText || "Next"} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Question Stage */}
        {stage === 'question' && <QuestionStageComponent 
          onYes={handleYes} 
          onNo={handleNo} 
          noButtonClicks={noButtonClicks}
          getNoButtonText={getNoButtonText}
          showYesButton={showYesButton}
          setShowYesButton={setShowYesButton}
        />}

        {/* Official Stage */}
        {stage === 'official' && (
          <motion.div
            key="official"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-4xl w-full px-4"
          >
            {/* Confetti/Sparkles effect */}
            {[...Array(20)].map((_, i) => {
              const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 400;
              const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: centerX,
                    y: centerY,
                    opacity: 1,
                  }}
                  animate={{
                    x: centerX + (Math.random() - 0.5) * 800,
                    y: centerY + (Math.random() - 0.5) * 800,
                    opacity: 0,
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </motion.div>
              );
            })}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="mb-8"
            >
              <Heart className="w-32 h-32 text-pink-400 fill-pink-400 mx-auto" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {config.proposalOfficialTitle || "OFFICIALLY OURS! 💕"}
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {config.proposalOfficialMessage || "We're officially together, and I couldn't be happier!"}
            </motion.p>

            {/* Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <div
                ref={certificateRef}
                className="bg-[#f5f5dc] text-[#2c2c2c] p-8 sm:p-12 rounded-lg shadow-2xl mx-auto max-w-2xl"
                style={{
                  background: 'linear-gradient(to bottom, #f5f5dc 0%, #fafafa 100%)',
                  border: '8px solid #d4af37',
                  fontFamily: 'serif',
                }}
              >
                {/* Certificate Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: 'serif', color: '#8b4513' }}>
                    {config.certificateTitle || "OFFICIAL CERTIFICATE"}
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold" style={{ color: '#8b4513' }}>
                    {config.certificateSubtitle || "of Boyfriend & Girlfriend Relationship"}
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="border-t-2 border-[#d4af37] my-6"></div>

                {/* Certificate Body */}
                <div className="text-center mb-6">
                  <p className="text-lg sm:text-xl mb-4 leading-relaxed">
                    This certifies that
                  </p>
                  <div className="text-3xl sm:text-4xl font-bold my-6" style={{ color: '#8b4513' }}>
                    <div className="mb-2">{config.certificatePartner1Name || "Lee Bernard Nillar"}</div>
                    <div className="text-2xl my-2">❤️</div>
                    <div>{config.certificatePartner2Name || "Arianne Lonzaga"}</div>
                  </div>
                  <p className="text-lg sm:text-xl mb-4 leading-relaxed">
                    are now officially
                  </p>
                  <div className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#8b4513' }}>
                    BOYFRIEND & GIRLFRIEND
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed">
                    {config.certificateDate || `As of ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="border-t-2 border-[#d4af37] my-6"></div>

                {/* Signature Section */}
                <div className="flex justify-around mt-8">
                  <div className="text-center">
                    <div className="border-t-2 border-[#2c2c2c] w-32 mt-12 mb-2"></div>
                    <div className="text-sm font-semibold">{config.certificatePartner1Name || "Lee Bernard Nillar"}</div>
                  </div>
                  <div className="text-center">
                    <div className="border-t-2 border-[#2c2c2c] w-32 mt-12 mb-2"></div>
                    <div className="text-sm font-semibold">{config.certificatePartner2Name || "Arianne Lonzaga"}</div>
                  </div>
                </div>

                {/* Decorative Hearts */}
                <div className="flex justify-center gap-4 mt-6">
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                </div>
              </div>

              {/* Download Button */}
              <motion.button
                onClick={downloadCertificate}
                className="mt-6 px-6 py-3 flex items-center gap-2 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Certificate
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {config.proposalPromiseTitle || "My Promise to You"}
              </h3>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                {config.proposalPromise || "I promise to love you through every distance, support you in every dream, and cherish every moment we share. You are my forever, and I am yours. Together, we'll create a lifetime of beautiful memories. I love you more than words can express. 💖"}
              </p>
            </motion.div>

            {/* Animated hearts */}
            <div className="mt-12 flex justify-center gap-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Proposal;
