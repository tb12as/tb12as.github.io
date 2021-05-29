document.addEventListener("DOMContentLoaded", () => {
  const singleModal = document.getElementById("singleImgModal");
  const singleImg = document.querySelector("#singleImg");
  const html = document.querySelector("html");

  document.onclick = (e) => {
    // open modan and change src value img
    if (e.target.classList.contains("images")) {
      let src = e.target.getAttribute("src");
      singleImg.setAttribute("src", "");

      singleImg.setAttribute("src", src);
      singleModal.classList.add("is-active");

      html.classList.add("is-clipped");
    }

    // close modal
    if (
      e.target.classList.contains("modal-close") ||
      e.target.classList.contains("modal-background")
    ) {
      singleModal.classList.remove("is-active");

      html.classList.remove("is-clipped");
    }
  };
});
