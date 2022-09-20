const clicker = document.getElementById("clicker");
let pointsCounter = document.getElementById("points");
let autoclicker = document.getElementById("autoclicker");
let reset = document.getElementById("resetButton");
let points = 0
let clickerUpgrade = false;

clicker.addEventListener("click", () => {
    points += 1
    pointsCounter.innerHTML = points
});

function buyAutoclicker() {
        if (points >= 10 && !clickerUpgrade) {
            points -= 10
           alert("upgrade bought")
           setTimeout(() => {
               points++
               clickerUpgrade = true;
           }, 1000)
        }
    else if(points >= 10 && clickerUpgrade) {
        alert("already bought")
    } else {
        alert("please get 10 points")
    }
}

function resetButton() {
    if(points > 0){
        points -= points;
        pointsCounter.innerHTML = 0;
    }
}

autoclicker.addEventListener("click", buyAutoclicker);
reset.addEventListener("click", resetButton);
