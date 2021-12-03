function showGroceryBagsPrice() {
  var title = document.getElementById("caption");
  if (title.innerHTML == "Price:") {
    title.innerHTML = 'Currently $26.99';
  } 
  else {
    title.innerHTML = "Price:";
  }
}
