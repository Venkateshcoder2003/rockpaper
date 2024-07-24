let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const u_Score = document.querySelector("#user-score");
const c_Score = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {

    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "brown";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        u_Score.innerText = userScore;
        msg.innerText = `YOU WON! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        c_Score.innerText = compScore;
        msg.innerText = `YOU LOSE!  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("User Choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice:", compChoice);

    if (userChoice === compChoice) {
        drawGame();
        //msg.innerText = "Game Was Draw";
    }


    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Button clicked", userChoice);
        playGame(userChoice);
    });
});


