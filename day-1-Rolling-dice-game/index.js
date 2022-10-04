function myfunction() {
  var one = document.querySelector("#member-1");
  one.innerHTML = Math.floor(Math.random() * 6) + 1;
  var two = document.querySelector("#member-2");
  two.innerHTML = Math.floor(Math.random() * 6) + 1;
  var three = document.querySelector("#member-3");
  three.innerHTML = Math.floor(Math.random() * 6) + 1;
  var four = document.querySelector("#winner");
  if (one.innerHTML > two.innerHTML && one.innerHTML > three.innerHTML) {
    four.innerHTML = "Member-1";
    one.style.background = "green";
  } else if (one.innerHTML < two.innerHTML && one.innerHTML < three.innerHTML) {
    one.style.background = "red";
  } else if (
    one.innerHTML === two.innerHTML &&
    one.innerHTML === three.innerHTML
  ) {
    one.style.background = "blue";
    four.innerHTML = "Equal";
  } else {
    one.style.background = "yellow";
  }
  if (two.innerHTML > one.innerHTML && two.innerHTML > three.innerHTML) {
    four.innerHTML = "Member-2";
    two.style.background = "green";
  } else if (two.innerHTML < one.innerHTML && two.innerHTML < three.innerHTML) {
    two.style.background = "red";
  } else if (
    two.innerHTML == one.innerHTML &&
    two.innerHTML == three.innerHTML
  ) {
    two.style.background = "blue";
    four.innerHTML = "Equal";
  } else {
    two.style.background = "yellow";
  }

  if (three.innerHTML > one.innerHTML && three.innerHTML > two.innerHTML) {
    four.innerHTML = "Member-3";
    three.style.background = "green";
  } else if (
    three.innerHTML < one.innerHTML &&
    three.innerHTML < two.innerHTML
  ) {
    three.style.background = "red";
  } else if (
    three.innerHTML == one.innerHTML &&
    three.innerHTML == two.innerHTML
  ) {
    three.style.background = "blue";
    four.innerHTML = "Equal";
  } else {
    three.style.background = "yellow";
  }
}
