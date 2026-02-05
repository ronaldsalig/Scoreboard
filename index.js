let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let scoreHome = 0
let scoreGuest = 0

function plusOne() {
    if (event.target.closest(".homeSide")){
        scoreHome += 1
        homeScore.textContent = scoreHome
    }
    else if (event.target.closest(".guestSide")){
        scoreGuest +=1
        guestScore.textContent = scoreGuest
    }
    
}

function plusTwo() {
    if (event.target.closest(".homeSide")){
        scoreHome += 2
        homeScore.textContent = scoreHome
    }
    else if (event.target.closest(".guestSide")){
        scoreGuest +=2
        guestScore.textContent = scoreGuest
    }
}

function plusThree() {
    if (event.target.closest(".homeSide")){
        scoreHome += 3
        homeScore.textContent = scoreHome
    }
    else if (event.target.closest(".guestSide")){
        scoreGuest += 3
        guestScore.textContent = scoreGuest
    }
}

function restart() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}