//Exercise String Reverse by Muhammad Faisal Firdani

const balikStrings = (str) => {
    let balikkata = "";
    for (let i = 0; i < str.length; i++) {
        balikkata = str[i] + balikkata;
    }
    return balikkata;
}

console.log(balikStrings("Hello World!"));