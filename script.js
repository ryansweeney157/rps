const choices = ['rock', 'paper', 'scissors'];
//fetches choice from html document, foreach applies elements to functions
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = getWinner (userChoice, computerChoice);

        document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
        document.getElementById('opponent-choice').textContent = `Computer's Choice: ${computerChoice}`;
        document.getElementById('end-result').textContent = `Winner: ${winner}`;
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
        return 'You';
    } else {
        return 'Computer';
    }
}
