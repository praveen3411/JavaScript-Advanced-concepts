document.querySelector("form").addEventListener("submit", myfunction);
var array1 = JSON.parse(localStorage.getItem("product")) || [];
function objects100(nam, cat, imag, pric, gend, solde) {
  this.name = nam;
  this.category = cat;
  this.image = imag;
  this.price = pric;
  this.gender = gend;
  this.sold = solde;
}

function myfunction() {
  event.preventDefault();
  let nam = admin.name.value;
  let cat = admin.category.value;
  let imag = admin.image.value;
  let pric = admin.price.value;
  let gend = admin.gender.value;
  let solde = admin.sold.value;
  var out = new objects100(nam, cat, imag, pric, gend, solde);
  array1.push(out);
  localStorage.setItem("product", JSON.stringify(array1));
}