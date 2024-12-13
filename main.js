// COIN FLIP SIMULATOR

//coin count vars
let numHeads = 0;
let numTails = 0;

//html vars
let btnEl = document.getElementById("btn");
let headsSpanEl = document.getElementById("heads-out");
let tailsSpanEl = document.getElementById("tails-out");

btnEl.addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  let output = document.getElementById("output");
  if (randNum < 0.5) {
    output.innerHTML = "<img src='img/heads.png'>";
    numHeads += 1;
    headsSpanEl.innerHTML = numHeads;
  } else {
    output.innerHTML = "<img src='img/tails.png'>";
    numTails += 1;
    tailsSpanEl.innerHTML = numTails;
  }
}

//dice section

//dice vars
let onesDisplay = document.getElementById("1s-out");
let twosDisplay = document.getElementById("2s-out");
let threesDisplay = document.getElementById("3s-out");
let foursDisplay = document.getElementById("4s-out");
let fivesDisplay = document.getElementById("5s-out");
let sixsDisplay = document.getElementById("6s-out");
let dicePic = document.getElementById("dice-pic-out");
let diceBtnEl = document.getElementById("dice-btn");

//dice count vars
let onesCount = 0;
let twosCount = 0;
let threesCount = 0;
let foursCount = 0;
let fivesCount = 0;
let sixsCount = 0;

diceBtnEl.addEventListener("click", diceCalculation);

function diceCalculation() {
  let diceRand = Math.random();
  if (diceRand <= 0.15) {
    onesCount++;
    dicePic.innerHTML = "<img src='img/1.png'>";
  } else if (diceRand <= 0.3) {
    twosCount++;
    dicePic.innerHTML = "<img src='img/2.png'>";
  } else if (diceRand <= 0.45) {
    threesCount++;
    dicePic.innerHTML = "<img src='img/3.png'>";
  } else if (diceRand <= 0.6) {
    foursCount++;
    dicePic.innerHTML = "<img src='img/4.png'>";
  } else if (diceRand <= 0.75) {
    fivesCount++;
    dicePic.innerHTML = "<img src='img/5.png'>";
  } else if (diceRand <= 0.9) {
    sixsCount++;
    dicePic.innerHTML = "<img src='img/6.png'>";
  }

  //dice display = dice count
  onesDisplay.innerHTML = onesCount;
  twosDisplay.innerHTML = twosCount;
  threesDisplay.innerHTML = threesCount;
  foursDisplay.innerHTML = foursCount;
  fivesDisplay.innerHTML = fivesCount;
  sixsDisplay.innerHTML = sixsCount;
}
