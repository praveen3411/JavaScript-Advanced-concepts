var array1 = JSON.parse(localStorage.getItem("product")) || [];

callone(array1);

function callone(data) {
  data.forEach(function (ele, index) {
    var box = document.createElement("div");

    var one = document.createElement("h3");
    one.innerText = ele.name;

    var two = document.createElement("h4");
    two.innerText = ele.category;

    var three = document.createElement("img");
    three.setAttribute("src", ele.image);

    var four = document.createElement("p");
    four.innerText = ele.price;

    var five = document.createElement("p");
    five.innerText = ele.gender;

    var six = document.createElement("p");
    six.setAttribute("id", "sold");
    six.innerText = ele.sold;

    var seven = document.createElement("button");
    seven.innerText = "Remove";
    seven.addEventListener("click", function () {
      helloremove(ele, index);
    });

    var eight = document.createElement("button");
    eight.setAttribute("id", "don");
    eight.innerText = "Sold";
    if ((six.innerHTML = true)) {
      eight.style.background = "red";
    } else {
      eight.style.background = "green";
    }

    box.append(three, one, two, four, five, six, seven, eight);
    document.querySelector("#con").append(box);
  });
}

function helloremove(ele, index) {
  array1.splice(index, 1);
  localStorage.setItem("product", JSON.stringify(array1));
  window.location.reload();
}
