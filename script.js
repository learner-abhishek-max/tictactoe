const boxes = document.querySelectorAll(".box");
const winnershow = document.querySelector(".winnershow");
const showturn = document.querySelector(".showturn");

let turn = 1;
let winner;

for (var i = 0; i < 9; i++) {
  boxes[i].addEventListener("click", function () {
    let currentPlayer;
    turn % 2 == 0 ? (currentPlayer = "x") : (currentPlayer = "y");
    this.textContent = currentPlayer;
    this.style.fontSize = "10px";

    if (turn % 2 == 0) {
      showturn.textContent = "X's turn";
    } else {
      showturn.textContent = "Y's turn";
    }
    if (
      (boxes[0].textContent == boxes[1].textContent &&
        boxes[0].textContent == boxes[2].textContent) ||
      (boxes[3].textContent == boxes[4].textContent &&
        boxes[3].textContent == boxes[5].textContent) ||
      (boxes[6].textContent == boxes[7].textContent &&
        boxes[6].textContent == boxes[8].textContent) ||
      (boxes[0].textContent == boxes[4].textContent &&
        boxes[4].textContent == boxes[8].textContent) ||
      (boxes[2].textContent == boxes[4].textContent &&
        boxes[6].textContent == boxes[2].textContent)
    ) {
      winner = currentPlayer;
      winnershow.textContent = `${winner} wins`;
      winnershow.style.fontSize = "100px";
    }

    turn++;
  });
}
