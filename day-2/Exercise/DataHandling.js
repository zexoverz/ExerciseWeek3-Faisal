// Exercise Data Handling by Muhammad Faisal Firdani

// var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
// ]
const dataHandling = (input) => {
    return ` Nomor ID: ${input[0][0]} \n Nama Lengkap: ${input[0][1]} \n TTL: ${input[0][2]} ${input[0][3]} \n Hobi: ${input[0][4]}` + "\n" + "\n" + ` Nomor ID: ${input[1][0]} \n Nama Lengkap: ${input[1][1]} \n TTL: ${input[1][2]} ${input[1][3]} \n Hobi: ${input[1][4]}` + "\n" + "\n" + ` Nomor ID: ${input[2][0]} \n Nama Lengkap: ${input[2][1]} \n TTL: ${input[2][2]} ${input[2][3]} \n Hobi: ${input[2][4]}` + "\n" + "\n" + ` Nomor ID: ${input[3][0]} \n Nama Lengkap: ${input[3][1]} \n TTL: ${input[3][2]} ${input[3][3]} \n Hobi: ${input[3][4]}`;
}

console.log(dataHandling([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]));