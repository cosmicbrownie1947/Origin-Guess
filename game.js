const params = new URLSearchParams(window.location.search);
const difficulty = params.get("difficulty") || "easy";

const realImages = [

{
src:"real/placeholder.jpg",
type:"real",
explanation:"placeholder"
}

];

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
explanation:"There are no cities that reach above the clouds! While there are towers, no full city has yet reached this height."
},

{
src:"ai/desert-dolphin-ai.jpg",
type:"ai",
explanation:"Dolphins can’t swim in the sand!"
},

{
src:"ai/llama-picnic-ai.jpg",
type:"ai",
explanation:"Llamas can’t have picnics! They also look very cartoonish and unnatural."
}


];

const mediumAI = [
{
src:"ai/blossom-temple-ai.jpg",
type:"ai",
explanation:"The flower petals at the bottom of the screen seem big compared to the size of the temple in the background. The colors are very saturated as well."
},

{
src:"ai/blue-crab-ai.jpg",
type:"ai",
explanation:"Those bubbles don’t look like anything you would find in the ocean!"
},

{
src:"ai/duo-dogs-ai.jpg",
type:"ai",
explanation:"The big giveaway here is the background. How is the front super lit, and the back isn't? To add, the texture on the dogs is a little too perfect."
},

{
src:"ai/field-dog-ai.jpeg",
type:"ai",
explanation:"Check out those flower petals that lose their details in the wind. Those aren’t supposed to look like that!"
},

{
src:"ai/freestand-taco-ai.jpeg",
type:"ai",
explanation:"How is that taco standing up on its own! Also, that cheese looks very unnatural."
},

{
src:"ai/grey-bedroom-ai.jpg",
type:"ai",
explanation:"Although the bed is a wreck, the rest of the bedroom looks like it has never been touched."
}
  
];

const hardAI = [
{
src:"field-goats-ai.jpg",
type:"ai",
explanation:"Our goat in the back left, where did his head go? Another good sign is the goat's fur, which looks far too groomed to be an outdoor goat."
}
  
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

currentImage = shuffledImages[currentRound % shuffledImages.length];

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
