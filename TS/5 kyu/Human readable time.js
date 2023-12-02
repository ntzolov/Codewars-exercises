export function humanReadable(seconds) {
    let hours = 0;
    let minutes = Math.floor(seconds / 60);
    let secondsPrint = seconds % 60;
    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes %= 60;
    }
    const result = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${secondsPrint > 9 ? secondsPrint : '0' + secondsPrint}`;
    return result;
}
console.log(humanReadable(359999));
//# sourceMappingURL=Human%20readable%20time.js.map