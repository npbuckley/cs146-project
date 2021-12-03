function showGroceryBagsPrice() {
  var img = document.getElementById("grocerybags");
  var title = document.getElementByTagName(h4);
  if (title.innerHTML === "Reusable Grocery Bags") {
    title.innerHTML = "Currently $26.99";
  } else {
    title.innerHTML = "Reusable Grocery Bags";
  }
}
