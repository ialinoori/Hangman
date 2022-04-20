const secretphrases = ["never", "you", "that", "bullet", "break"];

let randomitem = "";
let clicked = [];
let result = "";
let mistakes = 0




function selectrandomitem() {
    randomitem = secretphrases[Math.floor(Math.random() * secretphrases.length)];

    document.getElementById("letters").addEventListener("click", buttonhandler)
};


function setunderscore() {
    let splitedword = randomitem.split("");
    let mappedword = splitedword.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"))

    result = mappedword.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}


function checkifwon() {
    if (randomitem === result) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";


    }
}

function checkifloose() {
    if (mistakes === 6) {
        document.getElementById("gameover").querySelector("p").style.display = "block";

        document.getElementById("clue").innerHTML = `<p>random word is ${randomitem}</p>`

    }


}


function updatehangmanpic() {
    const image = document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistakes}.png`;

}






function letterhandler(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomitem.indexOf(letter) >= 0) {
        setunderscore()
        checkifwon()


    } else if (randomitem.indexOf(letter) === -1) {
        mistakes++;
        checkifloose()
        updatehangmanpic()

    }



}



function buttonhandler(event) {
    letterhandler(event.target.id)


}

selectrandomitem();
setunderscore()
































localStorage.setItem("name", "milad");