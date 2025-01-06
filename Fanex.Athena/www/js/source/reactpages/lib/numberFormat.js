export default class NumberFormat {
    static formatDecimal(value) {
        return this.format(value, 2)
    }

    static formatInteger(value) {
        if (typeof value !== "number" || isNaN(value)) {
            return "";
        }

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static format(value, digits = 0) {
        if (!this.isNumber(value)) {
            return "";
        }

        const roundedValue = this.round(value, digits);

        return roundedValue.toFixed(digits).replace(/^[+-]?\d+/, (int) => int.replace(/(\d)(?=(\d{3})+$)/g, '$1,'));
    }

    static round(value, digits) {
        const sign = value < 0 ? -1 : 1;
        const absoluteValue = Math.abs(value);
        const rounded = Number(Math.round(absoluteValue + 'e' + digits) + 'e-' + digits);

        return sign * rounded;
    }

    static isNumber(value) {
        return typeof value !== "number" || isNaN(value) ? false : true;
    }

    static parseToString(number) {
        return number.toString().replace(/(\d)(?=(\d{3})+(\.|$))/g, "$1,");
    }
}