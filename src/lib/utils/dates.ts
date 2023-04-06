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

export function sortDatesAscending(array) {
    return array.sort(function(a, b) {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
     } )
}

export function sortDatesDescending(array) {
    return array.sort(function(a, b) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
     } )
}

export function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    const x =  Math.floor((utc2 - utc1) / _MS_PER_DAY);

    return Math.abs(x)
  }