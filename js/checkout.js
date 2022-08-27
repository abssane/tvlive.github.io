window.onload = function () {
  // Via local Storage
  const offre = localStorage.getItem("offre");
  const price = localStorage.getItem("price");

  document.getElementById("offre").innerHTML = offre;
  document.getElementById("price").innerHTML = price;
<<<<<<< HEAD

=======
  document.getElementById("offree").value = offre;
  document.getElementById("pricee").value = price;
>>>>>>> d054e9f37dcdd9a2b313211a53195e4137aa68e0
};
