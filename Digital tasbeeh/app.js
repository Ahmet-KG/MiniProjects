document.querySelector(".tugma").addEventListener("click", function () {
  var ekran = document.querySelector(".ekran");
  ekran.value = parseInt(ekran.value) + 1;
});
document.querySelector(".restart").addEventListener("click", function () {
  document.querySelector(".ekran").value = 0;
});
