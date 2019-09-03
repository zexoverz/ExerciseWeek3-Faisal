let joyful = ["Rizal", "Alif", "Faqih", "Rendo", "Iqbal", "Tomi"];

for (let i = 0; i < joyful.length; i++) {
    for (let j = 0; j < joyful[i].length; j++) {
        if (joyful[i][j] === "a" || joyful[i][j] === "A") {
            console.log(joyful[i]);
        }
    }
}