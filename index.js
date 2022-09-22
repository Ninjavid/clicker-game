const button = document.getElementById("clicker");
let pointsCounter = document.getElementById("points");
let points = 0;
let autoclicker = document.getElementById("autoclicker");

button.addEventListener("click", () => {
  points += 1;
  pointsCounter.innerHTML = points;
});

function buyAutoclicker() {
  if (points >= 10) {
    points -= 10;
    alert("upgrade bought");
    autoClick();
  } else {
    alert("please get 10 points");
  }
}
function autoClick() {
  setTimeout(() => {
    points++;
  }, 1000);
}

autoclicker.addEventListener("click", buyAutoclicker);
