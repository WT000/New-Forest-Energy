interface ProgressBarProps {
  text1: string;
  text2: string;
  num1: number;
  num2: number;
}


export default function ProgressBar(props: ProgressBarProps) {
  const { text1, text2, num1, num2 } = props;

  var largenum = 0.00;
  var smallnum = 0.00;
  var stringlargenum = ""
  var stringsmallnum = ""

  const _num1 = isNaN(num1) ? 0.00 : num1 ?? 0.00
  const _num2 = isNaN(num2) ? 0.00 : num2 ?? 0.00

  console.log("props", props, _num1, _num2)

  if (_num1 > _num2) {
    let onepercent = _num1 / 100;
    var prnct = _num2 / onepercent;
    smallnum = _num2;
    largenum = _num1;
    stringlargenum = text1
    stringsmallnum = text2
  } else if (_num1 < _num2) {
    let onepercent = _num2 / 100;
    var prnct = _num1 / onepercent;
    smallnum = _num1;
    largenum = _num2;
    stringlargenum = text2
    stringsmallnum = text1
  }
  else{
    var prnct = 100;
    smallnum = _num1;
    largenum = _num2;
    stringlargenum = text2
    stringsmallnum = text1
  }

  const progressStyle = { width: `${prnct}%` };

  return (
    <div className=" ">
      <div className="flex justify-between mb-2 ">
        <div className="text-2xl font-normal text-[18px] ">
         {stringlargenum} <span className="text-black-500">/ {stringsmallnum}</span>
        </div>
        <div className="text-2xl font-normal text-[18px]">
          £{smallnum?.toFixed(2) ?? 0.00} <span className="text-black-500">/ £{largenum?.toFixed(2)}</span>
        </div>
      </div>

      <div className="bg-white-300 rounded-full w-full h-2.5">
        <div className={`bg-black rounded-full w-[26%] h-2.5`} style={progressStyle}></div>
      </div>
    </div>
  );
}
