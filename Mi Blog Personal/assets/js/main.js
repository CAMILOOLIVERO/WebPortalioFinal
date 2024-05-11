document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".text", {
    strings: ["RPA Developer", "Youtuber"],
    typeSpeed: 125,
    backSpeed: 125,
    backDelay: 2000,
    loop: true
  });
});

document.getElementById("botoncv").addEventListener("click", function() {
  // URL del archivo PDF
  var url = './assets/images/CV-Camilo-2024.pdf';

  // Crear un enlace <a> temporal
  var link = document.createElement('a');
  link.href = url;
  link.download = 'CV-Camilo-2024.pdf';
  
  // Hacer clic en el enlace para iniciar la descarga
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});