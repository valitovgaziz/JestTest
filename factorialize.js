function factorialize(number) {
    if (number < 0) {
        throw new RangeError(`Factorials are only defined for posititve numbers`);
    } else if (number != Math.trunc(number)) {
        throw new RangeError(`Factorials are only defined for integers`);
    } else {
        let result = number;
        while (number > 1) {
            number--;
            result *= number;
        }
        return result;
    }
}

export { factorialize }