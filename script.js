const input = document.querySelector(".input");
const grid = document.querySelector(".grid");

window.addEventListener("load", dayNightMode);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    loadImg();
  }
});

function loadImg() {
  removeImages();

  const url =
    `https://api.unsplash.com/search/photos/?query=` +
    input.value +
    `&per_page=9&client_id=r2bHPejpAJLpcG3EKmJv8bL970RdsUc_u5OqLVQ7C84`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Error" + response.status);
      }
    })
    .then((data) => {
      const imageNodes = [];
      for (let i = 0; i < data.results.length; i++) {
        imageNodes[i] = document.createElement("div");
        imageNodes[i].className = "img";
        imageNodes[i].style.backgroundImage =
          `url(` + data.results[i].urls.raw + `)`;
        imageNodes[i].addEventListener("dblclick", () => {
          window.open(data.results[i].links.download, `_blank`);
        });

        grid.appendChild(imageNodes[i]);
      }
    });
}

function removeImages() {
  grid.innerHTML = "";
}

function dayNightMode() {
  const data = new Date();
  const hour = data.getHours();

  if (hour >= 7 && hour <= 19) {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}
