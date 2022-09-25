// 5 days-wheater-app
function GetInfo() {
  var newName = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = " " + newName.value + " ";

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      newName.value +
      "&appid=32ba0bfed592484379e51106cef3f204"
  )
    .then((response) => response.json())
    .then((data) => {
      //Getting the min and max values for each day
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          "Min: " +
          Number(data.list[i].main.temp_min - 273.15).toFixed(1) +
          "°";
        //Number(1.3450001).toFixed(2); // 1.35
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max: " +
          Number(data.list[i].main.temp_max - 273.15).toFixed(2) +
          "°";
      }
      //------------------------------------------------------------

      //Getting Weather Icons
      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
      //------------------------------------------------------------
      console.log(data);
    })

    .catch((err) =>
      alert("Something Went Wrong: Try Checking Your Internet Coneciton")
    );
}

function DefaultScreen() {
  document.getElementById("cityInput").defaultValue = "London";
  GetInfo();
}

var d = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

// clouds.html
document.querySelector("form").addEventListener("submit", madhu);
let api_key = "0a7a1dbcbb604d9ce6a32c6ceb2ca4ed";
let puthere = document.querySelector("#ganesh");
function madhu() {
  event.preventDefault();
  let catc = document.querySelector("#two").value;

  let datatwo = `https://api.openweathermap.org/data/2.5/forecast?q=${catc}&appid=0a7a1dbcbb604d9ce6a32c6ceb2ca4ed`;
  async function danny() {
    try {
      let takeone = await fetch(datatwo);
      let taketwo = await takeone.json();
      // praveenkumar(taketwo)
      console.log(taketwo);
    } catch (err) {
      console.log(err);
    }
  }
  danny();
}

// index.html
document.querySelector("form").addEventListener("submit", myfunction);
let attachone = document.querySelector("#boom");
let attachtwo = document.querySelector("#boomone");
const apikeyy = "0a7a1dbcbb604d9ce6a32c6ceb2ca4ed";

function myfunction() {
  event.preventDefault();
  let take = document.querySelector("#wheather").value;
  let original = `https://api.openweathermap.org/data/2.5/weather?q=${take}&appid=${api_keyy}`;
  async function callme() {
    try {
      let inputone = await fetch(original);
      let inputtwo = await inputone.json();
      thisisdata(inputtwo);
      console.log(inputtwo);
    } catch (err) {
      console.log(err);
    }
  }
  callme();
}
function thisisdata(data) {
  if (data.name == undefined) {
    attachone.innerHTML = "Not found";
  } else {
    attachone.innerHTML = null;
    let cre = document.createElement("div");

    let one = document.createElement("h2");
    one.innerText = ` :${data.name}`;

    let two = document.createElement("h2");
    two.innerText = `:${data.base}`;

    let three = document.createElement("h2");
    three.innerText = `:${data.main.temp_min}`;

    let four = document.createElement("h2");
    four.innerText = `:${data.main.temp_max}`;

    let five = document.createElement("h2");
    five.innerText = `:${data.wind.deg}`;

    let six = document.createElement("h2");
    six.innerText = `:${data.clouds.all}`;

    let seven = document.createElement("h2");
    seven.innerText = `:${data.sys.sunset}`;

    let eignt = document.createElement("h2");
    eignt.innerText = `:${data.sys.sunrise}`;

    let iframe = document.querySelector("#gmap_canvas");
    iframe.src = `https://maps.google.com/maps?q=${data.name}%20&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    cre.append(one, two, three, four, five, six, seven, eignt);

    attachone.append(cre);
  }
}

// wheather.html
const apikey = "0a7a1dbcbb604d9ce6a32c6ceb2ca4ed";
let takeshot = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

let one = document.querySelector("#boom");
one.addEventListener("click", myfunction);

let mamma = document.querySelector("#back");
function myfunction() {
  let city = document.querySelector("#wheather").value;
  let dataone = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  async function hello() {
    try {
      let boom = await fetch(dataone);
      let boomone = await boom.json();
      bollobhai(boomone);
      console.log(boomone);
    } catch (err) {
      console.log(err);
    }
  }
  hello();
}
function bollobhai(data) {
  let cre = document.createElement("div");
  mamma.innerHTML = null;
  let one = document.createElement("h2");
  one.innerText = `base :${data.base}`;

  let two = document.createElement("h2");
  two.innerText = `clouds :${data.cod}`;

  let three = document.createElement("h3");
  three.innerText = `name :${data.name}`;

  let four = document.createElement("h2");
  four.innerText = `time-zone :${data.timezone}`;

  let five = document.createElement("h2");
  five.innerText = `id :${data.id}`;

  let six = document.createElement("h2");
  six.innerText = `wisiblity :${data.visibility}`;

  let seven = document.createElement("h4");
  seven.innerText = `curr-temp :${data.main.temp}`;

  let iframe = document.querySelector("#gmap_canvas");
  iframe.src = `https://maps.google.com/maps?q=${data.name}%20&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  cre.append(one, two, three, four, five, six, seven);

  document.querySelector("#back").append(cre);
}
//     function getLocationWeather() {
//   navigator.geolocation.getCurrentPosition(success);
//   function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     console.log(latitude);
//     console.log(longitude);
//   }
// }
// getLocationWeather();
