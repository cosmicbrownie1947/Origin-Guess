const images = [

{
src:"images/image1.jpg",
type:"ai",
explanation:"This image is AI generated. Look closely at the inconsistent textures and unnatural lighting."
},

{
src:"images/image2.jpg",
type:"real",
explanation:"This is a real photograph taken by a human photographer."
},

{
src:"images/image3.jpg",
type:"ai",
explanation:"AI images often have small distortions or overly smooth textures."
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

function showResults(){

document.querySelector(".game-container").innerHTML = `
<h1>Game Complete!</h1>
<p>You scored ${score} out of 10.</p>
<a href="game.html"><button style="margin-top:20px;padding:12px 24px;">Play Again</button></a>
`;

}

loadRound();
