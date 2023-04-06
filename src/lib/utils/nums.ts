export function percentageDiff(a, b, asChange = false) {
    const result =  ( a - b ) / ( (a+b)/2 ) ;

    if (asChange){
        return result > 1 ? result - 1 : result < -1 ? result + 1 : result
    }
    else{
        return result
    }
}