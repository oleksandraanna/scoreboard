let scoreEl1 = document.getElementById ("score-t1")
let scoreEl2 = document.getElementById ("score-t2")

scoreT1 = 12
scoreT2 = 5

function adding1h() {
    scoreT1 += 1
    scoreEl1.innerText = scoreT1
}

function adding2h() {
    scoreT1 += 2
    scoreEl1.innerText = scoreT1
}

function adding3h() {
    scoreT1 += 3
    scoreEl1.innerText = scoreT1
}


function adding1g() {
    scoreT2 += 1
    scoreEl2.innerText = scoreT2
}

function adding2g() {
    scoreT2 += 2
    scoreEl2.innerText = scoreT2
}

function adding3g() {
    scoreT2 += 3
    scoreEl2.innerText = scoreT2
}

let gameRenew = document.getElementById ("new-game")
function newGame() {
    scoreEl1.innerText = 0
    scoreEl2.innerText = 0
    scoreT1 = 0
    scoreT2 = 0
} 