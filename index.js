const clicker = document.getElementById("clicker");
let pointsCounter = document.getElementById("points");
let points = 0;
let autoclicker = document.getElementById("autoclicker");
let reset = document.getElementById("resetButton");

let clickerUpgrade = false;

clicker.addEventListener("click", () => {
    points += 1
    pointsCounter.innerHTML = points
});

function buyAutoclicker() {
        if (points >= 10 && !clickerUpgrade) {
            points -= 10
           alert("upgrade bought")
           clickerUpgrade = true;
           autoTimer();
        }
    else if(points >= 10 && clickerUpgrade) {
        alert("already bought")
    } else {
        alert("please get 10 points")
    }
    pointsCounter.innerHTML = points
}

function autoClick() {
    points++
    // setTimeout(autoClick, 1000);
}

function autoTimer() {
    return(
    points = setInterval(function() {
        autoClick()

        pointsCounter.innerHTML = points
    }, 1000)
    )
}

function resetButton() {
    if(points > 0){
        points -= points;
        pointsCounter.innerHTML = 0;
    }
    if (points === 0) {
        clearInterval(autoTimer)
    }
}

autoclicker.addEventListener("click", buyAutoclicker);
reset.addEventListener("click", resetButton);
