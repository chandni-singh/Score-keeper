
// Players 1 and 2 objects
const p1 = {
    score : 0,
    button : document.querySelector('#btn1'),
    display : document.querySelector('#P1')
}

const p2 = {
    score : 0,
    button : document.querySelector('#btn2'),
    display : document.querySelector('#P2')
}

// Variable declarations
let winningScoreSelect = document.querySelector('select');
let resetBtn = document.querySelector('#reset');
let winningScore = 3;
let isGameOver = false;

// function to update player score, display and button
function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score++;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

// Event listeners on each inputs
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

p1.button.addEventListener('click', function() {
    updateScores(p1,p2);
});

p2.button.addEventListener('click', function () {
    updateScores(p2,p1);
});

resetBtn.addEventListener('click', reset);

// Reset functionality
function reset() {
    isGameOver = false;

    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    }
}
