const noButton = document.getElementById('no');
let canClick = true;
let inCooldown = false;
const yesButton = document.getElementById('yes');

noButton.addEventListener('mouseover', function () {
    noButton.style.left = `${Math.ceil(Math.random() * 200)}%`;
    noButton.style.top = `${Math.ceil(Math.random() * 200)}%`;
});

noButton.addEventListener('click', function () {
    if (canClick && !inCooldown) {
        changeNoText();
        canClick = false;

        setTimeout(function () {
            canClick = true;
        }, 2000);

        noButton.style.left = `${Math.ceil(Math.random() * 200)}%`;
        noButton.style.top = `${Math.ceil(Math.random() * 200)}%`;
    }
});

function changeNoText() {
    var noButton = document.getElementById('no');
    noButton.innerText = randomNoPhrases();
}

let lastRandomIndex;

function randomNoPhrases() {
    const phrases = ["Are you sure?",
        "Come on Babe? :(",
        "You can't do this :(",
        "Please Babe?",
        "Think about all the fun we could have!"
    ];

    let rand;

    do {
        rand = Math.floor(Math.random() * phrases.length);
    } while (rand === lastRandomIndex);

    lastRandomIndex = rand;

    return phrases[rand];
}

yesButton.addEventListener('click', function () {
    replaceImage("img/yes-1.gif");
});

function replaceImage(imagePath) {
    const imgBg = document.querySelector('.img-bg');
    const newTxt = document.querySelector('.txt');
    imgBg.src = imagePath;
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    newTxt.innerText = txtPhrases();
}
function txtPhrases(){
    const phrases = ["HEHEHEHEHE", "I LOVE YOU <3", "Thanks Babe :)"];
    var rand = Math.floor(Math.random()*phrases.length);
    return phrases[rand];
}
