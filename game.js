// GET DIFFICULTY FROM URL
const params = new URLSearchParams(window.location.search);
const difficulty = params.get("difficulty") || "easy";


// REAL IMAGES (USED IN EVERY MODE)

const realImages = [

{
src:"ai/one-parrot-real.jpg",
type:"real",
explanation:"The texture on the birds here is authentic and asymmetrical. The lighting also matches the background."
},

{
src:"ai/butterfly-wild-real.jpg",
type:"real",
explanation:"The good giveaway is the lighting and the plants. None of the blurry plants in the back lose any of their shape or parts."
},

{
src:"ai/purple-flower-real.jpg",
type:"real",
explanation:"Each of these flowers is unique in its coloring, petals, and size. There is also no strange smoothness like AI includes."
},

{
src:"ai/curvy-road-real.jpg",
type:"real",
explanation:"A good giveaway is the lighting. The fog has created this dullness in lighting that the camera was able to capture."
}

];


// AI IMAGES BY DIFFICULTY

const easyAI = [

];

const mediumAI = [

];

const hardAI = [

];


// COMBINE REAL + AI IMAGES BASED ON DIFFICULTY

let images;

if (difficulty === "easy") {
images = [...realImages, ...easyAI];
}

if (difficulty === "medium") {
images = [...realImages, ...mediumAI];
}

if (difficulty === "hard") {
images = [...realImages, ...hardAI];
}


// SHUFFLE IMAGES (PREVENT REPEATS)

let shuffledImages = [...images].sort(() => Math.random() - 0.5);


// GAME STATE

let currentRound = 0;
let score = 0;
let currentImage;


// LOAD ROUND

function loadRound(){

if(currentRound >= 10){
showResults();
return;
}

document.getElementById("round").textContent = currentRound + 1;

currentImage = shuffledImages[currentRound];

document.getElementById("game-image").src = currentImage.src;

document.getElementById("feedback").classList.add("hidden");

const buttons = document.querySelectorAll(".guess-buttons button");
buttons.forEach(button => button.disabled = false);

document.getElementById("game-image").style.border = "4px solid #222";

updateProgressBar();

}


// HANDLE GUESS

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


// NEXT ROUND

function nextRound(){

currentRound++;
loadRound();

}


// PROGRESS BAR

function updateProgressBar(){

let progress = ((currentRound + 1) / 10) * 100;

document.getElementById("progress-fill").style.width = progress + "%";

}


// END GAME SCREEN

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


// START GAME

loadRound();
