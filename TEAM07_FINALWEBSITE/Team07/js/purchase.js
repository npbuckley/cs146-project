function showGroceryBagsPrice() {
  var title = document.getElementByTagName(H4);
  if (title.innerHTML === "Reusable Grocery Bags (3 Pack)") {
    title.innerHTML = "Currently $26.99";
  } 
  else {
    title.innerHTML = "Reusable Grocery Bags (3 Pack)";
  }
}
