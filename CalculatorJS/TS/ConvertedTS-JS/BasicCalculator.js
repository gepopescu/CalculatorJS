"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicCalculator {
    add(a, b, ...args) {
        var sum = a + b;
        args.forEach(elem => {
            sum = sum + elem;
        });
        return sum;
    }
    dif(a, b, ...args) {
        var dif = a - b;
        args.forEach(elem => {
            dif = dif - elem;
        });
        return dif;
    }
    mul(a, b, ...args) {
        var m = a * b;
        args.forEach(elem => {
            m = m * elem;
        });
        return m;
    }
    div(a, b, ...args) {
        var d = a / b;
        args.forEach(elem => {
            d = d / elem;
        });
        return d;
    }
}
exports.BasicCalculator = BasicCalculator;
