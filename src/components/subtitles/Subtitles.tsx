interface ProgressBarProps {
    text1: string;
    text2: string;
  }
  
  
  export default function ProgressBar(props: ProgressBarProps) {
    const { text1, text2} = props;
  
  
    return (
        <div>
        <div className="flex flex-row pb-3">
            <h3>
            {text1}
            <small className="text-muted ml-16 display-6 text-[#77767A]">{text2}</small>
            </h3>
            

            
        </div>
        <hr className="border-top-3 w-80"/>
        </div>
        
    );
  }