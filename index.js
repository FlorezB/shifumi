const elements = ["pierre", "feuille", "ciseaux"];

const userChoice = window.prompt(elements.join(' ou '));
const random = Math.floor(Math.random() * 3);
//console.log(random);
const computerChoice = elements[random];
//console.log(computerChoice);

if (userChoice === computerChoice) {
    console.log("Egalité");
} else if (
    (userChoice === elements[0] && computerChoice === elements[2]) ||
    (userChoice === elements[1] && computerChoice === elements[0]) ||
    (userChoice === elements[2] && computerChoice === elements[1]  )
) {
    console.log("Vous gagnez");
} else {
    console.log("Vous perdez");
}