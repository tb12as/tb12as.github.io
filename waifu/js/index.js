document.addEventListener("DOMContentLoaded", () => {
  let DataLength = 6; // usahakan genap dah

  const type = document.querySelector("#type");
  const imgList = document.getElementById("imgs");
  const loadMoreBtn = document.querySelector("#loadMoreBtn");
  const http = new EasyHTTP();

  let location = window.location.pathname;
  let parts = location.split("/");
  let path = parts[parts.length - 1];

  const baseURL = `https://api.waifu.pics/many/${
    path == "cursed" ? "n" : ""
  }sfw`;

  let param = type.value || "waifu";

  let result = [];

  function getData() {
    http.post(`${baseURL}/${param}`, {}).then((res) => {
      result.push(res.files);

      showData(result[0].slice(0, DataLength));
    });
  }

  getData();

  function showData(files) {
    // let files = result[0].slice(0, DataLength);

    files.forEach((value) => {
      let img = document.createElement("img");
      img.setAttribute("src", value);
      img.setAttribute("loading", "lazy");
      img.classList.add("images");
      img.setAttribute("alt", "Loading ....");

      let li = document.createElement("li");
      li.appendChild(img);

      imgList.appendChild(li);
    });
  }

  function loadMore() {
    if (imgList.childElementCount < 30) {
      showData(result[0].slice(DataLength, DataLength + 6));
      DataLength += 6;
    } else {
      loadMoreBtn.classList.add("none");
    }
  }

  loadMoreBtn.onclick = () => {
    loadMore();
  };

  let types = "";

  if (path == "cursed") {
    types = "waifu neko trap blowjob";
  } else {
    types = `waifu neko shinobu megumin bully cuddle cry hug awoo kiss lick pat smug bonk yeet blush smile wave highfive handhold nom bite glomp slap kill happy wink poke dance cringe`;
  }
  
  let arr = types.split(" ");

  arr.forEach((value) => {
    let option = document.createElement("option");
    option.setAttribute("value", value);
    option.innerText = value[0].toUpperCase() + value.slice(1);

    type.appendChild(option);
  });

  type.addEventListener("change", (e) => {
    imgList.innerText = "";
    param = e.target.value;

    DataLength = 6;
    result = [];
    loadMoreBtn.classList.remove("none");

    getData();
  });
});
