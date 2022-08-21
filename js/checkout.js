window.onload = function () {
  // Via local Storage
  const offre = localStorage.getItem("offre");
  const price = localStorage.getItem("price");

  document.getElementById("offre").innerHTML = offre;
  document.getElementById("price").innerHTML = price;
};
