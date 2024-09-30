const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;
//fetches choice from html document, foreach applies elements to functions
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = getWinner (userChoice, computerChoice);

        document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
        document.getElementById('opponent-choice').textContent = `Computer's Choice: ${computerChoice}`;
        document.getElementById('end-result').textContent = `Winner: ${winner}`;

        

    document.getElementById('user-score').textContent = `Your score: ${userScore}`;
    document.getElementById('opponent-score').textContent = `Opponent score: ${computerScore}`;

        score(winner)
    });

});


function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie!';
    }
    else if (
       (userChoice === 'rock' && computerChoice === 'scissors') ||
       (userChoice === 'paper' && computerChoice === 'rock') ||
       (userChoice === 'scissors' &&computerChoice === 'paper')
    ) {
        userScore++
        return 'You';
    } else {
        computerScore++
        return 'Computer';
    }
}
