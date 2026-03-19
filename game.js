const params = new URLSearchParams(window.location.search);
const difficulty = params.get("difficulty") || "easy";

// 🧠 USERNAME (for later use)
let username = localStorage.getItem("username");

// REAL IMAGES
const realImages = [
{
src:"real/butterfly-wild-real.jpg",
type:"real",
explanation:"The good giveaway is the lighting and the plants. None of the blurry plants in the back loses any of their shape or parts."
},
{
src:"real/college-student-real.jpg",
type:"real",
explanation:"It's easier to detect that this is real because of the wrinkles in the clothing and the uneven skin tones. AI doesn’t create small details like watch tans!"
},
{
src:"real/golden-puppy-real.jpg",
type:"real",
explanation:"Check out that grass! AI doesn’t add the small details like sticks and leaves into the grass."
}
];

// EASY AI
const easyAI = [
{
src:"ai/apple-bowl-ai.jpg",
type:"ai",
explanation:"Most apples don’t always come in the same shape! These apples don’t have any defects that add life to them."
},
{
src:"ai/astronaut-water-ai.jpg",
type:"ai",
explanation:"Astronauts can’t walk on water!"
},
{
src:"ai/cat-smile-ai.jpg",
type:"ai",
explanation:"You can tell they are not real because they have a synthetic look that AI produces."
},
{
src:"ai/cloud-scape-ai.jpg",
type:"ai",
explanation:"There are no cities that reach above the clouds!"
},
{
src:"ai/desert-dolphin-ai.jpg",
type:"ai",
explanation:"Dolphins can’t swim in the sand!"
},
{
src:"ai/llama-picnic-ai.jpg",
type:"ai",
explanation:"Llamas can’t have picnics!"
},
{
src:"ai/magenta-landscape-ai.jpg",
type:"ai",
explanation:"This looks straight out of a Dr. Suess book!"
},
{
src:"ai/neon-heart-ai.jpg",
type:"ai",
explanation:"This neon sign has no cord to give it power!"
}
];

// MEDIUM AI
const mediumAI = [
{
src:"ai/blossom-temple-ai.jpg",
type:"ai",
explanation:"The flower petals seem too large compared to the temple."
},
{
src:"ai/blue-crab-ai.jpg",
type:"ai",
explanation:"Those bubbles don’t look natural."
},
{
src:"ai/duo-dogs-ai.jpg",
type:"ai",
explanation:"Lighting inconsistency in background."
},
{
src:"ai/field-dog-ai.jpeg",
type:"ai",
explanation:"Flower petals lose detail unnaturally."
},
{
src:"ai/freestand-taco-ai.jpeg",
type:"ai",
explanation:"The taco standing upright is unrealistic."
},
{
src:"ai/grey-bedroom-ai.jpg",
type:"ai",
explanation:"Room looks untouched except bed."
},
{
src:"ai/parrot-group-ai.jpg",
type:"ai",
explanation:"Bird textures too smooth."
}
];

// HARD AI
const hardAI = [
{
src:"ai/field-goats-ai.jpg",
type:"ai",
explanation:"Missing goat head and unnatural fur."
},
{
src:"ai/mail-man-ai.jpg",
type:"ai",
explanation:"Skin texture is overly smooth."
},
{
src:"ai/night-mountain-ai.jpg",
type:"ai",
explanation:"Mountains look drawn."
}
];

// SELECT IMAGES
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

// SHUFFLE
let shuffledImages = [...images].sort(() => Math.random() - 0.5);

// GAME STATE
let currentRound = 0;
let score = 0;
let currentImage;

// LOAD ROUND
function loadRound(){

if(currentRound >= 10){
  localStorage.setItem("lastScore", score.toString());
  showResults();
  return;
}

document.getElementById("round").textContent = currentRound + 1;

currentImage = shuffledImages[currentRound % shuffledImages.length];

document.getElementById("game-image").src = currentImage.src;

document.getElementById("feedback").classList.add("hidden");

const buttons = document.querySelectorAll(".guess-buttons button");
buttons.forEach(button => button.disabled = false);

document.getElementById("game-image").style.border = "none";

updateProgressBar();
}

// GUESS
function guess(choice){

const feedbackBox = document.getElementById("feedback");
const feedbackText = document.getElementById("feedback-text");
const imageBox = document.getElementById("game-image");

const buttons = document.querySelectorAll(".guess-buttons button");
buttons.forEach(button => button.disabled = true);

if(choice === currentImage.type){

score++;
imageBox.style.border = "4px solid #3cb371";

feedbackText.innerHTML = `✅ <strong>Correct!</strong> Nice eye.`;

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

// RESULTS
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
