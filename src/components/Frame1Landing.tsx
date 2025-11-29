import imgChatGptImageNov282025031935Am1 from "figma:asset/feeafa163c414531aa15f70f59acddfbfbf3ca58.png";

interface Frame1LandingProps {
  onStartLearning: () => void;
}

function StartButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#00b386] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[16px] py-[20px] relative rounded-[8px] shrink-0 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
    >
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[30px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Start Learning</p>
      </div>
    </button>
  );
}

function Frame1Content({ onStartLearning }: { onStartLearning: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31px] items-center left-[163px] top-[103px] w-[1115px]">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#45475e] text-[80px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Growwing wealth, made simple</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#8d8d8d] text-[30px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Investing for Everyone</p>
      </div>
      <StartButton onClick={onStartLearning} />
    </div>
  );
}

export default function Frame1Landing({ onStartLearning }: Frame1LandingProps) {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 5">
      <div className="absolute bg-gradient-to-b from-[10.4%] from-[rgba(255,255,255,0.7)] h-[781px] left-0 to-[327.4%] to-[rgba(27,174,101,0.42)] top-0 w-[1440px]" />
      <Frame1Content onStartLearning={onStartLearning} />
      <div className="absolute h-[725px] left-[367px] top-[418px] w-[654px]" data-name="ChatGPT Image Nov 28, 2025, 03_19_35 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[135.24%] left-0 max-w-none top-[-35.2%] w-full" src={imgChatGptImageNov282025031935Am1} />
        </div>
      </div>
    </div>
  );
}
