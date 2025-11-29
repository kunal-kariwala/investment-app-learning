import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Frame1Landing from './components/Frame1Landing';
import Frame2Intro from './components/Frame2Intro';
import Frame3QuizPrompt from './components/Frame3QuizPrompt';
import Quiz from './components/Quiz';

export default function App() {
  const [currentFrame, setCurrentFrame] = useState(1);

  const handleStartLearning = () => {
    setCurrentFrame(2);
  };

  const handleIntroComplete = () => {
    setCurrentFrame(3);
  };

  const handleStartQuiz = () => {
    setCurrentFrame(4);
  };

  const handleQuizComplete = () => {
    // You can add logic here for what happens after quiz completion
    console.log('Quiz completed!');
  };

  return (
    <div className="relative size-full overflow-hidden">
      <AnimatePresence mode="wait">
        {currentFrame === 1 && (
          <motion.div
            key="frame1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Frame1Landing onStartLearning={handleStartLearning} />
          </motion.div>
        )}

        {currentFrame === 2 && (
          <motion.div
            key="frame2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Frame2Intro onComplete={handleIntroComplete} />
          </motion.div>
        )}

        {currentFrame === 3 && (
          <motion.div
            key="frame3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Frame3QuizPrompt onStartQuiz={handleStartQuiz} />
          </motion.div>
        )}

        {currentFrame === 4 && (
          <motion.div
            key="frame4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Quiz onComplete={handleQuizComplete} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
