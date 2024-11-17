import { factorialize } from "./factorialize.js";

test(`10! is 3628800`, () => {
    expect(factorialize(10)).toBe(3628800);
});