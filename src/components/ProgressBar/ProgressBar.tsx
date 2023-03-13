interface ProgressBarProps {
  text1: string;
  text2: string;
  num1: number;
  num2: number;
}

import "./ProgressBar.css";
import CSS from "csstype";

export default function ProgressBar(props: ProgressBarProps) {
  const { text1, text2, num1, num2 } = props;

  var largenum = 0.0;
  var smallnum = 0.0;
  var stringlargenum = ""
  var stringsmallnum = ""

  if (num1 > num2) {
    let onepercent = num1 / 100;
    var prnct = num2 / onepercent;
    smallnum = num2;
    largenum = num1;
    stringlargenum = text1
    stringsmallnum = text2
  } else if (num1 < num2) {
    let onepercent = num2 / 100;
    var prnct = num1 / onepercent;
    smallnum = num1;
    largenum = num2;
    stringlargenum = text2
    stringsmallnum = text1
  }
  else{
    var prnct = 100;
    smallnum = num1;
    largenum = num2;
    stringlargenum = text2
    stringsmallnum = text1
  }
  

  const progressStyle: CSS.Properties = {
    width: `${prnct}%`,
  };

  return (
    <div className=" ">
      <div className="flex justify-content-between mb-6 ">
        <div className="text-2xl pr-20 mr-20 font-weight-400 text-[16px]">
         {stringlargenum} <span className="text-[#77767A]">/ {stringsmallnum}</span>
        </div>
        <div className="text-2xl pl-20 ml-20 font-weight-400 text-[14px]">
          £{smallnum} <span className="text-[#77767A]">/ £{largenum}</span>
        </div>
      </div>

      <div className="bg-[#EDEEF0] rounded-full w-1/2 h-2.5">
        <div id="progressBar" style={progressStyle}></div>
      </div>
    </div>
  );
}
