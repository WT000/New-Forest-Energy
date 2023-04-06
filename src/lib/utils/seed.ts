export function genID(h: string, n: string, l: string) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const charl = chars.length;
    const s = Number('0.' + h.replace(/[^0-9]/g, ""));
    let r = '';
    r += n.charAt(0);
    r += l.charAt(0);
    for ( let i = 0; i < 5; i++) {
        r += chars.charAt(Math.floor(genSeed(s) * charl))
    }
    return r;
}

function genSeed(s: number) {
    let t = Math.random() + s;
    if ( t > 1) { t -= 1};
    return t;
}