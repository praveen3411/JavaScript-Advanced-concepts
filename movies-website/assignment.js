document.querySelector("form").addEventListener("submit", myfuc);
let pro = document.querySelector("#attach");
function myfuc() {
  event.preventDefault();
  let one = document.querySelector("#movie").value;
  let dataone = `http://www.omdbapi.com/?t=${one}&apikey=4178641e`;
  async function hello() {
    try {
      let boom = await fetch(dataone);
      let boomone = await boom.json();
      praveenkumar(boomone);
      console.log(boomone);
    } catch (Error) {
      console.log(Error);
    }
  }
  hello();
}
function praveenkumar(data) {
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

  create.append(one, two, three, four, five);

  document.querySelector("#attach").append(create);
}
