function handleSubmit(id) {
  if (id == 1) {
    // to set into local storage
    localStorage.setItem("offre", "Small Pack");
    localStorage.setItem("price", "$12.99");
  }
  if (id == 2) {
    // to set into local storage
    localStorage.setItem("offre", "Basic Pack");
    localStorage.setItem("price", "$17.99");
  }
  if (id == 3) {
    // to set into local storage
    localStorage.setItem("offre", "Premium Pack");
    localStorage.setItem("price", "$25.99");
  }
  if (id == 4) {
    // to set into local storage
    localStorage.setItem("offre", "Super Pack");
    localStorage.setItem("price", "$39.99");
  }
  if (id == 5) {
    // to set into local storage
    localStorage.setItem("offre", "PACK Test");
    localStorage.setItem("price", "$0.00");
  }

  return;
}

      