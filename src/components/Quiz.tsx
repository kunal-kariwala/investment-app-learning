import { useState } from 'react';
import { motion } from 'motion/react';
import imgChatGptImageNov282025031935Am1 from "figma:asset/feeafa163c414531aa15f70f59acddfbfbf3ca58.png";

interface QuizProps {
  onComplete: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is diversification in investing?",
    options: [
      "Putting all your money in one stock",
      "Spreading investments across different assets",
      "Only investing in bonds",
      "Investing only in your home country"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What does ROI stand for?",
    options: [
      "Rate of Interest",
      "Return on Investment",
      "Risk of Investment",
      "Ratio of Income"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which investment typically has the highest risk?",
    options: [
      "Savings Account",
      "Government Bonds",
      "Individual Stocks",
      "Certificates of Deposit"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What is compound interest?",
    options: [
      "Interest calculated only on principal",
      "Interest on interest plus principal",
      "A type of stock",
      "A banking fee"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is a mutual fund?",
    options: [
      "A single company's stock",
      "A pooled investment vehicle",
      "A type of savings account",
      "A government bond"
    ],
    correctAnswer: 1
  }
];

function NiviAvatar() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-[#3178ab] relative rounded-[40px] shrink-0 size-[30px]">
        <div aria-hidden="true" className="absolute border-4 border-[#00b386] border-solid inset-0 pointer-events-none rounded-[40px]" />
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#45475e] text-[40px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Nivi</p>
      </div>
    </div>
  );
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return; // Prevent changing answer
    
    setSelectedAnswer(index);
    const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;
    setAnsweredCorrectly(isCorrect);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnsweredCorrectly(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredCorrectly(null);
  };

  if (showResult) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = "";
    
    if (percentage >= 80) {
      message = "Excellent! You have a great understanding of investing basics!";
    } else if (percentage >= 60) {
      message = "Good job! You have a solid foundation in investing.";
    } else if (percentage >= 40) {
      message = "Not bad! Keep learning to improve your investment knowledge.";
    } else {
      message = "Keep learning! Everyone starts somewhere on their investment journey.";
    }

    return (
      <div className="bg-[#ccf3e8] relative size-full">
        <div className="absolute bg-gradient-to-b from-[10.4%] from-[rgba(255,255,255,0.7)] h-[781px] left-0 to-[327.4%] to-[rgba(27,174,101,0.42)] top-0 w-[1440px]" />
        <div className="absolute h-[725px] left-[367px] top-[418px] w-[654px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[135.24%] left-0 max-w-none top-[-35.2%] w-full" src={imgChatGptImageNov282025031935Am1} />
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bg-white box-border content-stretch flex flex-col gap-[30px] items-center left-[350px] px-[53px] py-[50px] rounded-[50px] top-[100px] w-[740px]"
        >
          <NiviAvatar />
          
          <div className="flex flex-col items-center gap-[20px] w-full">
            <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center text-[#45475e] text-[50px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>Quiz Complete! 🎉</p>
            </div>
            
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center text-[#45475e] text-[35px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>Your Score: {score} / {quizQuestions.length}</p>
              <p className="text-[25px] text-[#8d8d8d] mt-4">{message}</p>
            </div>

            <button
              onClick={handleRestart}
              className="bg-[#00b386] px-[40px] py-[20px] rounded-[8px] transition-transform hover:scale-105 active:scale-95 cursor-pointer mt-6"
            >
              <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center text-[25px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p>Retake Quiz</p>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="bg-[#ccf3e8] relative size-full">
      <div className="absolute bg-gradient-to-b from-[10.4%] from-[rgba(255,255,255,0.7)] h-[781px] left-0 to-[327.4%] to-[rgba(27,174,101,0.42)] top-0 w-[1440px]" />
      <div className="absolute h-[725px] left-[367px] top-[418px] w-[654px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[135.24%] left-0 max-w-none top-[-35.2%] w-full" src={imgChatGptImageNov282025031935Am1} />
        </div>
      </div>
      
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="absolute bg-white box-border content-stretch flex flex-col gap-[30px] items-start left-[300px] px-[53px] py-[40px] rounded-[50px] top-[80px] w-[840px]"
      >
        <div className="flex items-center justify-between w-full">
          <NiviAvatar />
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium text-[#8d8d8d] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p>Question {currentQuestion + 1} of {quizQuestions.length}</p>
          </div>
        </div>

        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold text-[#45475e] text-[28px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p>{question.question}</p>
        </div>

        <div className="flex flex-col gap-[15px] w-full">
          {question.options.map((option, index) => {
            let bgColor = "bg-white";
            let borderColor = "border-[#e0e0e0]";
            let hoverClass = "hover:bg-[#f5f5f5]";

            if (selectedAnswer !== null) {
              if (index === question.correctAnswer) {
                bgColor = "bg-[#d4f4e8]";
                borderColor = "border-[#00b386]";
              } else if (index === selectedAnswer) {
                bgColor = "bg-[#ffd4d4]";
                borderColor = "border-[#ff4d4d]";
              }
              hoverClass = "";
            }

            return (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                className={`${bgColor} ${borderColor} ${hoverClass} border-2 px-[25px] py-[18px] rounded-[12px] transition-all cursor-pointer disabled:cursor-not-allowed text-left`}
              >
                <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium text-[#45475e] text-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p>{option}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {answeredCorrectly !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center"
          >
            <div className={`flex flex-col font-['Roboto:Medium',sans-serif] font-medium text-[24px] ${answeredCorrectly ? 'text-[#00b386]' : 'text-[#ff4d4d]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>{answeredCorrectly ? '✓ Correct!' : '✗ Incorrect'}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
