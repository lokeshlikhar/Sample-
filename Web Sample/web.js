let gameSeq = [];
let userSeq = [];
let allScore = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  setTimeout(() => {
    if (started == false) {
      started = true;
      levelUp();
    }
  }, 150);
});

let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
}
