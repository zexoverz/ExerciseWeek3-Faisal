function pasanganTerbesar(num) {
    var numberstring = String(num);
    var result = "";
    var max = 0;
    for (let i = 0; i < numberstring.length; i++) {
        result = numberstring.slice(i, i + 2);
        if (result.length === 2) {
            if (result > max) {
                max = result;
            } else if (result < max) {
                max = max;
            }
        } else {
            result = numberstring.slice(numberstring.length, numberstring.length - 1);
            return max;
        }
    }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99