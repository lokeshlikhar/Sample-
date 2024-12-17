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