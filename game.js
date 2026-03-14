const images = [

{
src:"imagesPLACEHOLDER.jpg",
type:"ai",
explanation:"Most apples don’t always come in the exact same shape! These apples don’t have any defects that add life to them."
},

{
src:"images/ai/butterfly-wild-real.jpg",
type:"real",
explanation:"PLACEHOLDER."
},

{
src:"images/ai/astronaut-water-ai.jpg",
type:"ai",
explanation:"Astronauts can’t walk on water!."
},

{
src:"images/image4.jpg",
type:"real",
explanation:"Real photos usually have natural imperfections and consistent lighting."
}

];

let currentRound = 0;
let score = 0;
let currentImage;

function loadRound(){

if(currentRound >= 10){
showResults();
return;
}

document.getElementById("round").textContent = currentRound + 1;

currentImage = images[Math.floor(Math.random()*images.length)];

document.getElementById("game-image").src = currentImage.src;

document.getElementById("feedback").classList.add("hidden");

const buttons = document.querySelectorAll(".guess-buttons button");

buttons.forEach(button => button.disabled = false);

document.getElementById("game-image").style.border = "4px solid #222";

updateProgressBar();

}

function guess(choice){

const feedbackBox = document.getElementById("feedback");
const feedbackText = document.getElementById("feedback-text");
const imageBox = document.getElementById("game-image");

const buttons = document.querySelectorAll(".guess-buttons button");

buttons.forEach(button => button.disabled = true);

if(choice === currentImage.type){

score++;

imageBox.style.border = "4px solid #3cb371";

feedbackText.innerHTML = `
✅ <strong>Correct!</strong> Nice eye.
`;

}else{

imageBox.style.border = "4px solid #ff4d4d";

let correctAnswer = currentImage.type === "ai" ? "AI Generated" : "Real Image";

feedbackText.innerHTML = `
❌ <strong>Incorrect</strong><br><br>
Correct answer: <strong>${correctAnswer}</strong><br><br>
${currentImage.explanation}
`;

}

feedbackBox.classList.remove("hidden");

}

function nextRound(){

currentRound++;

loadRound();

}

function updateProgressBar(){

let progress = ((currentRound) / 10) * 100;

document.getElementById("progress-fill").style.width = progress + "%";

}


function showResults(){

document.querySelector(".game-container").innerHTML = `
<h1>Game Complete!</h1>

<p>You scored <strong>${score} / 10</strong></p>

<p style="margin-top:15px;">
Are you better than the average player?
</p>

<a href="leaderboard.html">
<button style="margin-top:15px;padding:12px 24px;">View Leaderboard</button>
</a>

<br><br>

<a href="game.html">
<button style="padding:12px 24px;">Play Again</button>
</a>
`;

}

loadRound();
