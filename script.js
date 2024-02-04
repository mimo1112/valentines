const noButton = document.getElementById('no');
let canClick = true;
let inCooldown = false;
const yesButton = document.getElementById('yes');

noButton.addEventListener('mouseover', function () {
    noButton.style.left = `${Math.floor(Math.random() * 200)}%`;
    noButton.style.top = `${Math.floor(Math.random() * 200)}%`;
});

noButton.addEventListener('click', function () {
    if (canClick && !inCooldown) {
        changeNoText();
        canClick = false;

        setTimeout(function () {
            canClick = true;
        }, 2000);

        noButton.style.left = `${Math.floor(Math.random() * 200)}%`;
        noButton.style.top = `${Math.floor(Math.random() * 200)}%`;
    }
    var rand = Math.floor(Math.random() * 7);
    var str = "img/no/" + rand + ".gif";

    replaceNoImage(str);
});
function replaceNoImage(imagePath) {
    const imgBg = document.querySelector('.img-bg');
    const newTxt = document.querySelector('.txt');

    imgBg.src = imagePath;
    imgBg.width = 400; 
    imgBg.height = 400; 

}
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
    var rand = Math.floor(Math.random() * 7);
    var str = "img/yes/" + rand + ".gif";

    replaceYesImage(str);
});

function replaceYesImage(imagePath) {
    const imgBg = document.querySelector('.img-bg');
    const newTxt = document.querySelector('.txt');

    imgBg.src = imagePath;
    imgBg.width = 400; 
    imgBg.height = 400; 
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    newTxt.innerText = txtPhrases();
}
function txtPhrases(){
    const phrases = ["HEHEHEHEHE", 
    "I LOVE YOU <3", 
    "Thanks Babe :)"
    ];
    var rand = Math.floor(Math.random()*phrases.length);
    return phrases[rand];
}
