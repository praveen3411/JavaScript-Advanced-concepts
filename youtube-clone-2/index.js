let callingone = async () => {
  try {
    let take = document.querySelector("#protwo").value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${take}&key=AIzaSyDv81biK_BaQ1HH3YGK7zgLbylBdREgEa0`;
    let one = await fetch(url);
    let two = await one.json();
    appendinghere(two.items);
  } catch (error) {
    console.log(error);
  }
};

let newone = document.querySelector("#ramma");

let appendinghere = (data) => {
  newone.innerHTML = null;
  data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
    let cre = document.createElement("div");

    let one = document.createElement("img");
    one.setAttribute("id", "bon");
    one.src = thumbnails.default.url;

    var video = {
      videoId,
      title,
    };

    one.onclick = () => {
      praveen(video);
    };

    let two = document.createElement("h3");
    two.innerText = title;

    cre.append(one, two);

    newone.append(cre);
  });
};

function praveen(video) {
  localStorage.setItem("youtube", JSON.stringify(video));
  window.location.href = "goto.html";
}

let bro = document.querySelector("#deep");
let danny = async () => {
  try {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=goodtrendingvideos&key=AIzaSyDv81biK_BaQ1HH3YGK7zgLbylBdREgEa0`;
    let ma = await fetch(url);
    let ba = await ma.json();
    appen(ba.items);
  } catch (error) {
    console.log(error);
  }
};
danny();

let appen = (dataone) => {
  bro.innerHTML = null;
  dataone.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
    let money = document.createElement("div");

    let creo = document.createElement("img");
    creo.setAttribute("id", "ho");
    creo.src = thumbnails.default.url;

    let videoone = {
      videoId,
      title,
    };

    creo.onclick = () => {
      rowdybhai(videoone);
    };
    let ti = document.createElement("h4");
    ti.innerText = title;

    money.append(creo, ti);
    bro.append(money);
  });
};

let rowdybhai = (videoone) => {
  localStorage.setItem("youtube", JSON.stringify(videoone));
  window.location.href = "goto.html";
};
