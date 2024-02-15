function play() {
  hideElementById("home-screen");
  // after play again start
  hideElementById("final-score");
  // after play again end
  showElementById("play-ground");
  const randomAlphabet = getARandomNumber();
  const displayElement = document.getElementById("display");
  displayElement.innerText = randomAlphabet;
  setBackgroundColorById(randomAlphabet);
}

document.addEventListener("keyup", function (event) {
  const userPressedAlphabet = event.key;
  const displayElement = document.getElementById("display");
  const displayAlphabet = displayElement.innerText.toLowerCase();
  displayElement.innerText = displayAlphabet;

  if (userPressedAlphabet === displayAlphabet) {
    const oldScore = getInitialScoreById("score");
    newScore = oldScore + 1;
    setNewScoreById("score", newScore);
    removeBackgroundColorById(userPressedAlphabet);
    play();
  } else {
    const oldLife = getInitialScoreById("life");
    newLife = oldLife - 1;
    if (newLife === 0) {
      gameOver();
    }
    setNewScoreById("life", newLife);
  }
});
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  const y = getElementValueById("score");

  setNewScoreById("last-score", y);
  const currentText = getElementTextById("display");
  removeBackgroundColorById(currentText);
}
setNewScoreById("life", 5);
function gameContinue() {
  setNewScoreById("score", 0);
  setNewScoreById("life", 5);
  play();
}
