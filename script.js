const noButton = document.getElementById("no");
let canClick = true;
let inCooldown = false;
const yesButton = document.getElementById("yes");
const wholeBackground = document.querySelector(".whole");
let flag = false;

noButton.addEventListener("mouseover", function () {
  noButton.style.left = `${Math.floor(Math.random() * 200)}%`;
  noButton.style.top = `${Math.floor(Math.random() * 200)}%`;
});


var count = 0;

noButton.addEventListener("click", function () {
    if (flag == false) {
        flag = true;
        count = 0; 
    }

    if (canClick && !inCooldown) {
        changeNoText();
        canClick = false;

        setTimeout(function () {
            canClick = true;
        }, 2000);

        noButton.style.left = `${Math.floor(Math.random() * 200)}%`;
        noButton.style.top = `${Math.floor(Math.random() * 200)}%`;

        count = count + 1;
        if (count === 3) {
            alert("You're really committing to No huh?");
            count = 0; 
        }

        console.log(count);
    }

    var rand = Math.floor(Math.random() * 7);
    var str = "img/no/" + rand + ".gif";

    replaceNoImage(str);
});


function replaceNoImage(imagePath) {
  const imgBg = document.querySelector(".img-bg");
  const newTxt = document.querySelector(".txt");

  imgBg.src = imagePath;
  imgBg.width = 400;
  imgBg.height = 400;
}

function changeNoText() {
  var noButton = document.getElementById("forNo");
  noButton.innerText = randomNoPhrases();
}

let lastRandomIndex;

function randomNoPhrases() {
  const phrases = [
    "Really????",
    "Come on Babe? :(",
    "You can't do this :(",
    "Please Babe?",
    "Think about all the fun we could have!",
  ];

  let rand;

  do {
    rand = Math.floor(Math.random() * phrases.length);
  } while (rand === lastRandomIndex);

  lastRandomIndex = rand;

  return phrases[rand];
}

yesButton.addEventListener("click", function () {
  var rand = Math.floor(Math.random() * 7);
  var str = "img/yes/" + rand + ".gif";

  replaceYesImage(str);

  wholeBackground.style.backgroundImage = `url(img/main/123.gif)`;

});

function replaceYesImage(imagePath) {
  const imgBg = document.querySelector(".img-bg");
  const newTxt = document.querySelector(".txt");
  const audio = document.querySelector("audio");
  var no = document.querySelector("#forNo");

  no.innerText = "";  
  imgBg.src = imagePath;
  imgBg.width = 400;
  imgBg.height = 400;
  yesButton.style.display = "none";
  noButton.style.display = "none";
  newTxt.innerText = txtPhrases();
  audio.play();
}

function txtPhrases() {
  const phrases = [
    "HEHEHEHEHE",
    "I LOVE YOU\u2764",
    "Thanks Babe \uD83D\uDE0A",
    "사랑해요\u2764",
    "I love you and I miss you with all my heart\u2764",
  ];
  var rand = Math.floor(Math.random() * phrases.length);
  return phrases[rand];
}
document.addEventListener("DOMContentLoaded", function () {
  var audio = document.querySelector("audio");

  audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
  });
  audio.volume = 0.1;
  audio.play();
});
wholeBackground.style.backgroundImage = "none";
