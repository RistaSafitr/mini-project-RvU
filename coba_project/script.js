// function hitungLuas(event) {
//     event.preventDefault();
    
//     var sisi = document.getElementById("sisi-luas").value;
    
//     if (sisi > 0) {
//       var luas = sisi * sisi;
//       document.getElementById("output_luas").textContent = "Luas: " + sisi + " *" + sisi + " =" + luas;
//     } else {
//       document.getElementById("output_luas").textContent = "Masukkan nilai sisi yang valid!";
//     }
//   }
  
//   function hitungKeliling(event) {
//     event.preventDefault();
    
//     var sisi = document.getElementById("sisi-keliling").value;
    
//     if (sisi > 0) {
//       var keliling = 4 * sisi;
//       document.getElementById("output_keliling").textContent = "Keliling: " + keliling;
//     } else {
//       document.getElementById("output_keliling").textContent = "Masukkan nilai sisi yang valid!";
//     }
//   }
  
//   function resetPerhitungan() {
//     document.getElementById("luasForm").reset();
//     document.getElementById("kelilingForm").reset();
//     document.getElementById("output_luas").textContent = "";
//     document.getElementById("output_keliling").textContent = "";
//   }
  
document.getElementById("luasForm").addEventListener("submit", hitungLuas);
document.getElementById("kelilingForm").addEventListener("submit", hitungKeliling);

function hitungLuas(event) {
  event.preventDefault();

  var sisi = parseFloat(document.getElementById("sisi-luas").value);

  if (!isNaN(sisi) && sisi > 0) {
    var luas = sisi * sisi;
    document.getElementById("output_luas").textContent = "Luas: " + sisi + " * " + sisi + " = " + luas;
  } else {
    document.getElementById("output_luas").textContent = "Masukkan nilai sisi yang valid!";
  }
}

function hitungKeliling(event) {
  event.preventDefault();

  var sisi = parseFloat(document.getElementById("sisi-keliling").value);

  if (!isNaN(sisi) && sisi > 0) {
    var keliling = 4 * sisi;
    document.getElementById("output_keliling").textContent = "Keliling: " + keliling;
  } else {
    document.getElementById("output_keliling").textContent = "Masukkan nilai sisi yang valid!";
  }
}

function resetPerhitungan() {
  document.getElementById("luasForm").reset();
  // document.getElementById("kelilingForm").reset();
  document.getElementById("output_luas").textContent = "";
  // document.getElementById("output_keliling").textContent = "";
}
