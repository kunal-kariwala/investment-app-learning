import imgChatGptImageNov282025031935Am1 from "figma:asset/feeafa163c414531aa15f70f59acddfbfbf3ca58.png";

function Frame() {
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full">
      <Frame />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[normal] min-w-full relative shrink-0 text-[#45475e] text-[30px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Hi I’m Nivi, your helper :) `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>My goal is to help you get better at investments :)</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-[400px] px-[53px] py-[35px] rounded-[50px] top-[78px] w-[639px]">
      <Frame3 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#ccf3e8] relative size-full" data-name="Desktop - 8">
      <div className="absolute bg-gradient-to-b from-[10.4%] from-[rgba(255,255,255,0.7)] h-[781px] left-0 to-[327.4%] to-[rgba(27,174,101,0.42)] top-0 w-[1440px]" />
      <div className="absolute h-[725px] left-[367px] top-[418px] w-[654px]" data-name="ChatGPT Image Nov 28, 2025, 03_19_35 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[135.24%] left-0 max-w-none top-[-35.2%] w-full" src={imgChatGptImageNov282025031935Am1} />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}