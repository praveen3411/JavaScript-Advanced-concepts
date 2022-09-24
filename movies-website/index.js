document.querySelector("form").addEventListener("submit", myfuc);
let pro = document.querySelector("#attach");
function myfuc() {
  event.preventDefault();
  let one = document.querySelector("#movie").value;
  let dataone = `https://www.omdbapi.com/?t=${one}&apikey=4178641e`;
  async function hello() {}
  let takehere = document.querySelector("#appendhere");
  function praveenkumar(data) {
    if (data.Director == undefined) {
      pro.innerHTML = null;

      let create = document.createElement("div");

      let one = document.createElement("img");
      one.src =
        "https://media0.giphy.com/media/TqiwHbFBaZ4ti/200w.webp?cid=ecf05e47g6n0f2nlx3dy2ktagosrfvd1mb7c2d44vfmve2cp&rid=200w.webp&ct=g";
      create.append(one);
      document.querySelector("#attach").append(create);
    } else {
      pro.innerHTML = null;
      let create = document.createElement("div");

      let one = document.createElement("img");
      one.src = data.Poster;

      let two = document.createElement("h2");
      two.innerText = `Meta-score ${data.Metascore}`;

      let three = document.createElement("h3");
      three.innerText = `Director :${data.Director}`;

      let four = document.createElement("h4");
      four.innerText = `Language :${data.Language}`;

      let five = document.createElement("p");
      five.innerText = data.Genre;

      let six = document.createElement("h5");
      six.innerText = `IDMB-Rating :${data.imdbRating}`;
      if (data.imdbRating > 8) {
        takehere.innerText = "super-movie";
      }
      create.append(one, two, three, four, five, six);

      document.querySelector("#attach").append(create);
    }
  }
}
