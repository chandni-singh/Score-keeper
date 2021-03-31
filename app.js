
let winningScoreSelect = document.querySelector('select');
let P1 = document.querySelector('#P1');
let P2 = document.querySelector('#P2');

let p1Button = document.querySelector('#btn1');
let p2Button = document.querySelector('#btn2');
let resetBtn = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

p1Button.addEventListener('click', () => {
    if(!isGameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            isGameOver = true;
            P1.classList.add('has-text-success');
            P2.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        P1.innerText = p1Score;
    } 
});

p2Button.addEventListener('click', () => {
    if(!isGameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            isGameOver = true;
            P2.classList.add('has-text-success');
            P1.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
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
    P1.classList.remove('has-text-success','has-text-danger');
    P2.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
