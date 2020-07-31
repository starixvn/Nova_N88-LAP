export default class NumberHelper {
    static displayRate(rate) {
        return `${rate > 0 ? '+' : ''}${rate}%`;
    }
}