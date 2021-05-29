document.addEventListener("DOMContentLoaded", () => {
  let DataLength = 6; // usahakan genap dah

  const type = document.querySelector("#type");
  const imgList = document.getElementById("imgs");
  const loadMoreBtn = document.querySelector("#loadMoreBtn");
  const http = new EasyHTTP();

  const baseURL = "https://api.waifu.pics/many/nsfw";

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
      loadMoreBtn.classList.add('none')
    }
  }

  loadMoreBtn.onclick = () => {
    loadMore();
  };

  const types = `waifu neko trap blowjob`;
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
    loadMoreBtn.classList.remove('none')

    getData();
  });
});
