
let winningScoreSelect = document.querySelector('select');
let P1 = document.querySelector('#P1');
let P2 = document.querySelector('#P2');
let resetBtn = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let winningScore = 1;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

document.querySelector('#btn1').addEventListener('click', () => {
    if(!isGameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            isGameOver = true;
            P1.classList.add('winner');
            P2.classList.add('loser');
        }
        P1.innerText = p1Score;
    } 
});
document.querySelector('#btn2').addEventListener('click', () => {
    if(!isGameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            isGameOver = true;
            P2.classList.add('winner');
            P1.classList.add('loser');
        }
        P2.innerText = p2Score;
    }
});

resetBtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    P1.innerText = 0;
    P2.innerText = 0;
    P1.classList.remove('winner', 'loser');
    P2.classList.remove('winner','loser');
}
