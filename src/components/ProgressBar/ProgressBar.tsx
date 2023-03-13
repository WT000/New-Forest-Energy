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
  } else if (num1 < num2) {
    let onepercent = num2 / 100;
    var prnct = num1 / onepercent;
    smallnum = num1;
    largenum = num2;
  }
  else{
    var prnct = 100;
    smallnum = num1;
    largenum = num2;
    stringlargenum = text1
    stringsmallnum = text2
  }

  const progressStyle: CSS.Properties = {
    width: `${prnct}%`,
  };

  return (
    <div className=" ">
      <div className="flex justify-content-between mb-6 ">
        <div className="text-2xl pr-20 mr-20 font-weight-400">
          {stringlargenum} / {stringsmallnum}
        </div>
        <div className="text-2xl pl-20 ml-20 font-weight-400 ">
          £{smallnum} / £{largenum}
        </div>
      </div>

      <div id="bar">
        <div id="progressBar" style={progressStyle}></div>
      </div>
    </div>
  );
}
