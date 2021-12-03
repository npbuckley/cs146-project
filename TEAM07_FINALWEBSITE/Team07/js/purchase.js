function showGroceryBagsPrice() {
  var title = document.getElementById("grocerybags");
  if (title.innerHTML == "Show Price) {
    title.innerHTML = "Currently $26.99";
  } 
  else {
    title.innerHTML = "Show Price";
  }
}
