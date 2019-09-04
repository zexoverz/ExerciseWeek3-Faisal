function palindrome(kata) {
    let balikkata = "";
    for (let i = 0; i < kata.length; i++) {
        balikkata = kata[i] + balikkata;
    }
    if (kata === balikkata) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false