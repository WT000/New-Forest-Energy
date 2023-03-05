interface ProgressBarProps {
    text1: string;
    text2: string;
    showbar: boolean;
  }
  
  
  export default function ProgressBar(props: ProgressBarProps) {
    const { text1, text2, showbar} = props;

    if (showbar){

        return (
        
            <div>
            <div className="flex flex-row pb-3">

                
            </div>
    
            </div>
            
        );


    } 

  
  
  }

