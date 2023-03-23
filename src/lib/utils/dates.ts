export function getOrdinal(n) {
    let ord = ["st", "nd", "rd"]
    let exceptions = [11, 12, 13]
    let nth = 
    ord[(n % 10) - 1] == undefined || exceptions.includes(n % 100) ? "th" : ord[(n % 10) - 1]
    return n + nth
}

export function getDayMonth(date, withYear=false) {
    const d = getOrdinal(date.getDate())
    const m = date.toLocaleString('default', { month: 'short' });
    const y = withYear ? " " + date.getFullYear() : ""
    
    return `${d} ${m}${y}`
}