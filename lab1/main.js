/* eslint-disable no-plusplus */
// user selects an option from [rock, paper, scissors]
// then let the computer select one from those options
// now compare both of selected options
// find the winner
//     if both are same then its a tie,
//         user        pc
//     if [scissors - paper] -> user
//     if [scissors - rock] -> pc
//     if [rock - scissors] -> user
//     if [rock - paper] -> pc
//     if [paper - scissors] -> pc
//     if [paper - rock] -> user

//     increment the score and display the winner

const game = {
  user: null,
  opponent: null,
  winnerMessage: null,
  wins: 0,
  loses: 0,
  ties: 0,
  init() {
    const chooseButtons = document.querySelectorAll('#chooseButtons button');
    chooseButtons.forEach(button =>
      button.addEventListener('click', this.chooseOption)
    );
  },
  displayChoices() {
    const userChoice = document.querySelector('#userChoice');
    const opponentChoice = document.querySelector('#opponentChoice');
    userChoice.innerText = this.user;
    opponentChoice.innerText = this.opponent;
  },
  getOpponentChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * 3)];
  },
  chooseOption(e) {
    game.user = e.target.name;
    // eslint-disable-next-line no-restricted-globals
    if (!confirm(`You choose ${game.user}\n Do you want to continue?`)) {
      return;
    }
    game.opponent = game.getOpponentChoice();
    game.displayChoices();
    game.findWinner();
    game.displayWinner();
    game.updateScore();
  },
  findWinner() {
    if (this.user === this.opponent) {
      this.winnerMessage = "It's a tie";
      this.ties++;
    } else if (
      (this.user === 'rock' && this.opponent === 'scissor') ||
      (this.user === 'paper' && this.opponent === 'rock') ||
      (this.user === 'scissor' && this.opponent === 'paper')
    ) {
      this.winnerMessage = 'You have won!';
      this.wins++;
    } else {
      this.winnerMessage = 'Better luck next time. Computer won!';
      this.loses++;
    }
  },
  displayWinner() {
    const result = document.querySelector('#result h1');
    result.innerText = this.winnerMessage;
  },
  updateScore() {
    const winsDisplay = document.querySelector('#scoreboard #wins');
    const losesDisplay = document.querySelector('#scoreboard #loses');
    const tiesDisplay = document.querySelector('#scoreboard #ties');

    winsDisplay.innerText = this.wins;
    losesDisplay.innerText = this.loses;
    tiesDisplay.innerText = this.ties;
  },
};
game.init();
