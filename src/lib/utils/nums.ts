export function percentageDiff(a, b, asChange = false) {
    const result =  ( a - b ) / ( (a+b)/2 ) ;

    if (asChange){
        return result > 1 ? result - 1 : result < -1 ? result + 1 : result
    }
    else{
        return result
    }
}


export function countDecimalPlaces(myNum : number) {
    if(Math.floor(myNum.valueOf()) === myNum.valueOf()) return 0;
    return myNum.toString().split(".")[1].length || 0; 
}