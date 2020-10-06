import NumberFormat from '@jsroot/lib/numberFormat';

export default class NumberHelper {
    static displayRate(rate) {
        return `${rate > 0 ? '+' : ''}${NumberFormat.format(rate)}%`;
    }

    static getColorRate = rate => {
        if (rate === 0) {
            return '';
        }
        return rate > 0 ? 'green-color' : 'red-color';
    }

}