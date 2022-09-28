function signIn() {
  window.location.href = "signup.html";
}

const result_div = document.getElementById("deep");
async function searchVideo() {
  try {
    let video_query = document.getElementById("video").value;

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_query}&type=video&key=AIzaSyDSPJNe2EV2i9wVug-hyfyyRYmr86CmVnQ&maxResults=20`
    );
    let data = await res.json();

    let videos = data.items;
    localStorage.setItem("recommend", JSON.stringify(videos));

    appendVideo(videos);
  } catch (err) {
    console.log("err: ", err);
  }
}

const appendVideo = (results) => {
  result_div.innerHTML = "";

  results.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement("div");

    let title = document.createElement("h3");
    title.innerHTML = snippet.title;

    let thumbnail = document.createElement("img");
    thumbnail.src = snippet.thumbnails.medium.url;

    div.append(thumbnail, title);

    let data_to_send = {
      snippet,
      videoId,
    };
    console.log("data_to_send: ", data_to_send);
    div.onclick = () => {
      showvideo(data_to_send);
    };
    result_div.append(div);
  });
};
function showvideo(data) {
  localStorage.setItem("clickVideo", JSON.stringify(data));
  window.location.href = "video.html";
}

trendVideo();

const result_di = document.getElementById("deep");
async function trendVideo() {
  try {
    let res = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&regionCode=in&type=video&key=AIzaSyDSPJNe2EV2i9wVug-hyfyyRYmr86CmVnQ&maxResults=20"
    );
    let data = await res.json();
    console.log("data: ", data);

    let videos = data.items;

    appendVide(videos);
  } catch (err) {
    console.log("err: ", err);
  }
}

const appendVide = (results) => {
  result_di.innerHTML = "";

  results.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement("div");

    let title = document.createElement("h3");
    title.innerHTML = snippet.title;

    let thumbnail = document.createElement("img");
    thumbnail.src = snippet.thumbnails.medium.url;

    div.append(thumbnail, title);

    let data_to_send = {
      snippet,
      videoId,
    };

    div.onclick = () => {
      showvideo(data_to_send);
    };
    result_di.append(div);
  });
};
function showvideo(data) {
  localStorage.setItem("clickVideo", JSON.stringify(data));
  window.location.href = "video.html";
}
