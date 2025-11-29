import { useState, useEffect } from 'react';
import imgChatGptImageNov282025031935Am1 from "figma:asset/feeafa163c414531aa15f70f59acddfbfbf3ca58.png";

interface Frame2IntroProps {
  onComplete: () => void;
}

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

function TypingText({ onComplete }: { onComplete: () => void }) {
  const fullText = "Hi I'm Nivi, your helper :)\n\nMy goal is to help you get better at investments :)";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50); // Typing speed: 50ms per character

      return () => clearTimeout(timeout);
    } else {
      // Typing complete, pause for 1 second then call onComplete
      const pauseTimeout = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(pauseTimeout);
    }
  }, [currentIndex, fullText, onComplete]);

  // Split text into paragraphs for proper rendering
  const lines = displayedText.split('\n');

  return (
    <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[normal] min-w-full relative shrink-0 text-[#45475e] text-[30px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
      {lines.map((line, index) => (
        <p key={index} className="mb-0">
          {line || '\u00A0'}
        </p>
      ))}
      <span className="inline-block w-[2px] h-[30px] bg-[#45475e] ml-1 animate-pulse" />
    </div>
  );
}

function MessageBox({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-[400px] px-[53px] py-[35px] rounded-[50px] top-[78px] w-[639px]">
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full">
          <NiviAvatar />
          <TypingText onComplete={onComplete} />
        </div>
      </div>
    </div>
  );
}

export default function Frame2Intro({ onComplete }: Frame2IntroProps) {
  return (
    <div className="bg-[#ccf3e8] relative size-full" data-name="Desktop - 8">
      <div className="absolute bg-gradient-to-b from-[10.4%] from-[rgba(255,255,255,0.7)] h-[781px] left-0 to-[327.4%] to-[rgba(27,174,101,0.42)] top-0 w-[1440px]" />
      <div className="absolute h-[725px] left-[367px] top-[418px] w-[654px]" data-name="ChatGPT Image Nov 28, 2025, 03_19_35 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[135.24%] left-0 max-w-none top-[-35.2%] w-full" src={imgChatGptImageNov282025031935Am1} />
        </div>
      </div>
      <MessageBox onComplete={onComplete} />
    </div>
  );
}
