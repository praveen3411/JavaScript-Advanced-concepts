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
