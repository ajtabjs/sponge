let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let pos = 0;

btnNext.addEventListener("click", () => {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});

for (let i = 0; i < 5; i++) {
 pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
}
