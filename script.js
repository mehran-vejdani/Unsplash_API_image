const input = document.querySelector(".input");
const grid = document.querySelector(".grid");

window.addEventListener("load", dayNightMode);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    loadImg();
  }
});

function loadImg() {}

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
