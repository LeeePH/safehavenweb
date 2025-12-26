import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Download } from 'lucide-react';
import { gsap, CSSRulePlugin } from "gsap/all";
import config from './config';
import '../index.css';

gsap.registerPlugin(CSSRulePlugin);

function Proposal() {
  const [stage, setStage] = useState('loading'); // loading, welcome, story1, story2, story3, recap, promises, plans, question, official
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const [openEnvelopes, setOpenEnvelopes] = useState({ promises: {}, plans: {} });

  // Loading sequence
  useEffect(() => {
    if (stage === 'loading') {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStage('welcome'), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [stage]);

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

  const EnvelopeCard = ({ title, message, index, type }) => {
    const envelopeRef = useRef(null);
    const letterRef = useRef(null);
    const flapRef = useRef(null);
    const isOpen = openEnvelopes[type]?.[index] || false;

    useEffect(() => {
      if (!envelopeRef.current || !letterRef.current || !flapRef.current) return;

      if (isOpen) {
        gsap.to(flapRef.current, {
          duration: 0.5,
          rotateX: 180,
          zIndex: 10,
        });
        gsap.to(letterRef.current, {
          scale: 1.1,
          translateY: -150,
          duration: 0.9,
          ease: "back.inOut(1.5)",
        });
        gsap.set(letterRef.current, { zIndex: 40 });
        gsap.to(letterRef.current, {
          duration: 0.7,
          ease: "back.out(0.4)",
          translateY: -5,
          translateZ: 250,
        });
      } else {
        gsap.to(flapRef.current, {
          duration: 0.5,
          rotateX: 0,
          zIndex: 30,
        });
        gsap.to(letterRef.current, {
          scale: 1,
          translateY: 0,
          translateZ: 0,
          duration: 0.7,
          ease: "back.inOut(1.5)",
        });
        gsap.set(letterRef.current, { zIndex: 15 });
      }
    }, [isOpen]);

    const envelopeWidth = 320;
    const envelopeHeight = 200;

    return (
      <div className="w-full flex justify-center overflow-visible" style={{ minHeight: isOpen ? '500px' : '350px', padding: '20px' }}>
        <div className="letter-container" style={{ width: `${envelopeWidth}px`, height: `${envelopeHeight}px`, position: 'relative' }}>
          <div className="content" style={{ position: 'relative', width: `${envelopeWidth}px`, height: `${envelopeHeight}px` }}>
            <div 
              className="envelope cursor-pointer relative"
              ref={envelopeRef}
              onClick={() => toggleEnvelope(type, index)}
              style={{ 
                background: 'linear-gradient(#cccbd7 0.5px, var(--base-light) 0.5px)',
                width: `${envelopeWidth}px`,
                height: `${envelopeHeight}px`,
                position: 'absolute',
                top: '10px',
                left: '10px'
              }}
            >
              <div 
                ref={flapRef}
                className="absolute top-0 left-0 z-30"
                style={{
                  width: `${envelopeWidth}px`,
                  borderTop: `${envelopeHeight * 0.65}px solid #7873A7`,
                  borderLeft: `${envelopeWidth / 2}px solid transparent`,
                  borderRight: `${envelopeWidth / 2}px solid transparent`,
                  boxSizing: 'border-box',
                  transformOrigin: 'top',
                }}
              ></div>
            </div>
            <div 
              className="letter" 
              ref={letterRef} 
              style={{ 
                position: 'absolute', 
                top: '10px', 
                left: '10px',
                width: `${envelopeWidth}px`,
                height: `${envelopeHeight}px`,
              }}
            >
              <div 
                className="body" 
                style={{
                  width: `${envelopeWidth - 40}px`,
                  height: `${envelopeHeight - 40}px`,
                  padding: '16px',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
              >
                <span 
                  className="close cursor-pointer" 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleEnvelope(type, index);
                  }}
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    lineHeight: '1',
                  }}
                >
                  ×
                </span>
                <div className="message" style={{ marginTop: '8px' }}>
                  <div className="font-bold mb-3 text-base" style={{ fontSize: '16px', color: 'var(--base)' }}>{title}</div>
                  <div 
                    className="text-sm leading-relaxed" 
                    style={{ 
                      fontSize: '14px', 
                      color: 'var(--base)',
                      wordWrap: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.6',
                    }}
                  >
                    {message}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getNoButtonText = () => {
    const texts = config.proposalNoButtonTexts || ["No", "Are you sure?", "Really?", "Please?", "Last chance!"];
    return texts[Math.min(noButtonClicks, texts.length - 1)];
  };

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center text-white px-4 relative overflow-hidden">
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

        {/* Welcome Stage */}
        {stage === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-2xl"
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

        {/* Story Part 1 - LDR Connection */}
        {stage === 'story1' && (
          <motion.div
            key="story1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="text-center max-w-2xl"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌙
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {config.proposalStory1Title || "Our LDR Journey"}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
              {config.proposalStory1Content || "Miles apart, but hearts connected. Every message, every call, every moment we share bridges the distance between us. Our love knows no boundaries."}
            </p>
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

        {/* Story Part 2 - Growing Together */}
        {stage === 'story2' && (
          <motion.div
            key="story2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="text-center max-w-2xl"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💫
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {config.proposalStory2Title || "Growing Together"}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
              {config.proposalStory2Content || "Through every challenge and every joy, we've grown stronger. Your presence in my life has been the greatest gift, and I'm grateful for every day we get to share."}
            </p>
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

        {/* Story Part 3 - I Love You Milestone */}
        {stage === 'story3' && (
          <motion.div
            key="story3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="text-center max-w-2xl"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💕
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {config.proposalStory3Title || "The First 'I Love You'"}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
              {config.proposalStory3Content || "That moment when we first said 'I love you' changed everything. It wasn't just words—it was a promise, a commitment, the beginning of forever."}
            </p>
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
            className="text-center w-full px-4 py-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              {config.proposalPromisesTitle || "My Promises to You"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 mb-8 justify-items-center max-w-7xl mx-auto">
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
              className="px-6 py-3 flex items-center gap-2 mx-auto bg-white/20 backdrop-blur-sm border border-white/50 rounded-lg hover:bg-white/30 transition-all"
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
            className="text-center w-full px-4 py-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              {config.proposalPlans2026Title || "Our Plans for 2026"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 mb-8 justify-items-center max-w-7xl mx-auto">
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
              className="px-6 py-3 flex items-center gap-2 mx-auto bg-white/20 backdrop-blur-sm border border-white/50 rounded-lg hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.nextButtonText || "Next"} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Question Stage */}
        {stage === 'question' && (
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
                onClick={handleYes}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-xl font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
                animate={{
                  scale: noButtonClicks > 0 ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: noButtonClicks > 0 ? 1.25 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {config.proposalYesButton || "Yes"} 💖
              </motion.button>
              <motion.button
                onClick={handleNo}
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
        )}

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
