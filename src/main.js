import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let canvasElement = document.getElementById("canvasElement");
let ctx = canvasElement.getContext("2d")

let player1Y = 300;
let player2Y = 300;

let player1Score = 0;
let player2Score = 0;

let circleX = 500;
let circleY = 400;

let circleVelocityX = 1;
let circleVelocityY = 1;

function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 800);

  ctx.fillStyle = "white";
  ctx.fillRect(0, player1Y, 30, 150)

  ctx.fillRect(970, player2Y, 30, 150)

  ctx.font = "100px Monospace";
  ctx.fillText(player1Score, 150, 100); 
  ctx.fillText(player2Score, 790, 100); 

  ctx.fillRect(500, 0, 10, 800)

  ctx.beginPath();
  ctx.arc(circleX, circleY, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "green";
  ctx.fill();


}

function update() {
  circleX = circleX + circleVelocityX;
  circleY = circleY + circleVelocityY;

  if (circleY < 20 || circleY > 800 - 20) {
    circleVelocityY = -circleVelocityY;
  }

  if (circleX < 0) {
    player2Score++;
    resetBall();
  }

  if (circleX > 1000) {
    player1Score++;
    resetBall();
  }

  if (circleX < 50 && 150 > Math.abs(circleY - player1Y)) {
    circleVelocityX = -circleVelocityX * 1.1;
  }

  if (circleX > 950 && 150 > Math.abs(circleY - player2Y)) {
    circleVelocityX = -circleVelocityX * 1.1;
  }
}


document.addEventListener("keydown", playerMove)

function playerMove(event) {
  if (event.keyCode == 38) {
    player2Y = player2Y - 50;
  }
  if (event.keyCode == 40) {
    player2Y = player2Y + 50;
  }
  if (event.keyCode == 87) {
    player1Y = player1Y - 50;
  }
  if (event.keyCode == 83) {
    player1Y = player1Y + 50;
  }
}

setInterval(render, 1);
setInterval(update, 1);

function resetBall() {
  circleX = 500;
  circleY = 400;

  circleVelocityX = -1;
  circleVelocityY = -1;
}




