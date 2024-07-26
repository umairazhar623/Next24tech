const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    console.log("clicked");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    console.log("clicked");
  });
}
// crtbtn active coding

const btn = document.getElementById("crtbtn");
