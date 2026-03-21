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
},
{
src:"real/curvy-road-real.jpg",
type:"real",
explanation:"A good giveaway is the lighting. The fog has created this dullness in the lighting that the camera was able to capture."
},
{
src:"real/dusk-city-real.jpg",
type:"real",
explanation:"If you look closer at the buildings, you can see that none of them loses any detail or look morphed together."
},
{
src:"real/field-cows-real.jpg",
type:"real",
explanation:"The colors in this image let us know that this image is real. AI images are all about color and creativity."
},
{
src:"real/one-parrot-real.jpg",
type:"real",
explanation:"The texture on the birds here is authentic and asymmetrical. The lighting also matches the background."
},
{
src:"real/outdoor-temple-real.jpg",
type:"real",
explanation:"The concrete and landscape here look genuine and aged. AI models tend to make their images look very new and smooth."
},
{
src:"real/purple-flower-real.jpg",
type:"real",
explanation:"Each of these flowers is unique in its coloring, petals, and size. There is also no strange smoothness as AI includes."
},
{
src:"real/yellow-field-real.jpg",
type:"real",
explanation:"You can see it is real because the lighting is even and it doesn’t include any unnatural smoothness as AI uses in its generation."
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
src:"ai/library-guy-ai.jpg",
type:"ai",
explanation:"Take a look at those magazines; none of those are real words or faces!"
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
},
{
src:"ai/rainbow-sky-ai.jpeg",
type:"ai",
explanation:"This looks straight out of a picture book! The biggest hint is the sky; it can’t change that fast!"
},
{
src:"ai/yellow-octopus-ai.jpg",
type:"ai",
explanation:"No octopus has those colors! He also looks very animated compared to a real octopus."
},
{
src:"ai/snow-bunny-ai.jpeg",
type:"ai",
explanation:"Those bunnies have some very red noses! Also, snowflakes are never that big to see their patterns."
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
src:"ai/yellow-car-ai.jpg",
type:"ai",
explanation:"While the mountain has a texture, do you notice how the overall shape looks off? It looks as if the bushes were drawn on top!"
},
{
src:"ai/parrot-group-ai.jpg",
type:"ai",
explanation:"Bird textures too smooth."
},
{
src:"ai/red-tree-ai.jpg",
type:"ai",
explanation:"There are leaves all over the ground, but the tree looks like it hasn’t lost a single leaf!"
},
{
src:"ai/basketball-hoop-ai.jpg",
type:"ai",
explanation:"While this looks very believable, the scene here looks very artificial and too clean."
},
{
src:"ai/watermelon-plate-ai.jpeg",
type:"ai",
explanation:"The shadow of the watermelon doesn’t match the shape of the watermelon!"
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
src:"ai/cat-reading-ai.jpg",
type:"ai",
explanation:"Take a look at those books! Those words look like they are blending into one."
},
{
src:"ai/young-student-ai.jpg",
type:"ai",
explanation:"You can tell this is AI because the girl's skin texture is smooth and unnatural"
},
{
src:"ai/library-lights-ai.jpg",
type:"ai",
explanation:"While this does seem very realistic, small details like the lights have no realistic shape."
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
},
{
src:"ai/snow-crow-ai.jpg",
type:"ai",
explanation:"This crow looks shinier than a natural crow, which has a matte finish."
},
{
src:"ai/snow-fox-ai.jpeg",
type:"ai",
explanation:"While the lighting is very realistic, the giveaway here is the hair! Those are some very long hairs coming off his back."
},
{
src:"ai/student-studying-ai.jpeg",
type:"ai",
explanation:"It’s a high-quality image, but the wording on the headphones is blurry! Also, the lighting is inaccurate."
},
{
src:"ai/woman-working-ai.jpg",
type:"ai",
explanation:"The picture seems to look too perfect, especially in the skin and hair."
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
