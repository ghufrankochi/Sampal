// JavaScript
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 2;
let ballSpeedY = 2;

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function updateGame() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX + 10 > canvas.width || ballX - 10 < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY + 10 > canvas.height || ballY - 10 < 0) {
        ballSpeedY = -ballSpeedY;
    }

    drawBall();
}

document.getElementById("startButton").addEventListener("click", () => {
    setInterval(updateGame, 20);
});