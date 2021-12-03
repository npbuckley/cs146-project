function showGroceryBagsPrice() {
  var title = document.getElementById("grocerybags");
  if (title.innerHTML == "Reusable Grocery Bags (3 Pack)") {
    title.innerHTML = "Currently $26.99";
  } 
  else {
    title.innerHTML = "Reusable Grocery Bags (3 Pack)";
  }
}
