function targetTerdekat(arr) {
    var o_cords = 0;
    var x_cords = [];
    var jarak = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "x") {
            x_cords.push(i);
        } else if (arr[i] === "o") {
            o_cords = i;
        }
    }

    for (let i = 0; i < x_cords.length; i++) {
        var temp = Math.abs(x_cords[i] - o_cords);
        jarak.push(temp);
    }
    var min = jarak[0];
    for (let i = 0; i < jarak.length; i++) {
        if (jarak[i] < min) {
            min = jarak[i];
        }
    }

    if (x_cords.length < 1) {
        return 0;
    }
    return min;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2