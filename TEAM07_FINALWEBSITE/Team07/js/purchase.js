function showGroceryBagsPrice() {
  var title = document.getElementById("caption");
  if (title.innerHTML == "Price:") {
    title.innerHTML = 'Price: Currently $26.99';
  } 
  else {
    title.innerHTML = "Price:";
  }
}
