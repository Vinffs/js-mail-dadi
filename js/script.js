// EMAIL VALIDATOR
const checkBtn = document.querySelector('.checkButton');

checkBtn.addEventListener('click', function () {
  const emailValidator = document.getElementById('userEmail').value;
  const emailList = [
    'a@gmail.com',
    'b@gmail.com',
    'c@gmail.com',
    'd@gmail.com',
    'e@gmail.com',
    'f@gmail.com',
  ]

  let match = false;
  let i;

  for (i = 0; i <= emailList.length - 1; i++) {
    if (emailValidator.includes(emailList[i])) {
      match = true;
    } else { }
  }

  let email = document.createElement('div');

  if (match == true) {
    email.innerText = `Accesso Consentito`
  } else {
    email.innerText = `Accesso Negato, Si prega di Verificare`
  }

  document.querySelector('.commentContainer').appendChild(email);
}
)


// ROLL THE DICE

// Player name 
let player1 = "Player 1";
let player2 = "Player 2";

// Function to change the player name 
function editNames() {
  player1 = prompt("Change Player1 name");
  player2 = prompt("Change player2 name");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}

// Function to roll the dice 
function rollTheDice() {

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src",
    "img/dice" + randomNumber1 + ".png");

  document.querySelector(".img2").setAttribute("src",
    "img/dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML
      = (player2 + " WINS!");
  }

  else {
    document.querySelector("h1").innerHTML
      = (player1 + " WINS!");
  }
}

