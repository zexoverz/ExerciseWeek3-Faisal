/*
  ======================
  Mencari yang terpintar
  ======================
  
  Buatlah algoritma atau pseudocode untuk mencari semua angka diatas rata-rata.
  Data yang diberikan berupa satu set angka dari nilai ujian murid-murid
  di kelas.


  pseudocode : 
  Start
    Store `NilaiUjian` with Array [85, 45, 30, 90]
    Store `HighRate` with 85 
    Store `Iteration` with 0
 
    For Iteration LessThan nilaiUjian Length 
      DO IF NilaiUjian MoreThan 85 THEN
        Display "Nilai Murid ini Di atas Rata Rata"
      Else 
        Display "Nilai Murid ini Di bawah Rata Rata"
      END IF
      INCREMENT Iteration by 1

*/

let nilaiUjian = [86, 45, 30, 90];
let HighRate = 85;

for (let i = 0; i < nilaiUjian.length; i++) {
  if (nilaiUjian[i] > 85) {
    console.log("Nilai Murid ini Di atas Rata Rata");
  } else {
    console.log("Nilai Murid ini Di bawah Rata Rata");
  }
}