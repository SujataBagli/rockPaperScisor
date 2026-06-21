let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
let displayUserChoice = document.querySelector(".userChoice");
let displayComputerChoice = document.querySelector(".computerChoice");
let userScrore = document.querySelector("#user-score");
let computerScrore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let computerPoints = 0;
let userPoints = 0;


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");        
        playGame(userChoice);
    });
});

const playGame = (userChoice) =>{
    console.log("User Choice ",userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("computer Choice ",compChoice);
    if(userChoice === compChoice){
        //Draw Game
        drawGame(userChoice);
    }else{
        let userWin = true;
        if(userChoice == "paper"){
            // comp optn rock , scisosr
            userWin = (compChoice == "rock") ? true : false; // user wins or computer win
        }
        if(userChoice == "scissor"){ 
            // comp optn rock , paper
            userWin = (compChoice == "paper") ? true : false; // user wins or computer win
        }
        if(userChoice == "rock"){ 
            // comp optn scissor , paper
            userWin = (compChoice == "scissor") ? true : false; // user wins or computer win
        }
        shoWinner(userWin,userChoice,compChoice);        
    }
}
const genCompChoice = () =>{
    //rock,paper,scissor
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3); // number will generaet betwwen 0 to 2 
    return options[randIdx];
}
const drawGame = (userChoice) =>{    
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "blue";

    var userChoiceImg = `<img src="./images/${userChoice}.png" alt=""></img>`;
    var compChoiceImg = `<img src="./images/${userChoice}.png" alt=""></img>`;

    displayUserChoice.classList.remove("hide");
    displayComputerChoice.classList.remove("hide");
    displayUserChoice.innerHTML = userChoiceImg;
    displayComputerChoice.innerHTML = compChoiceImg;
}
const shoWinner = (userWin,userChoice,compChoice)=>{
    console.log(userChoice);
    var userChoiceImg = `<img src="./images/${userChoice}.png" alt=""></img>`;
    var compChoiceImg = `<img src="./images/${compChoice}.png" alt=""></img>`;

    displayUserChoice.classList.remove("hide");
    displayComputerChoice.classList.remove("hide");
    displayUserChoice.innerHTML = userChoiceImg;
    displayComputerChoice.innerHTML = compChoiceImg;
    if(userWin){
        userPoints++;
        userScrore.innerText = userPoints;
        msg.innerText = "You Win!";     
        msg.style.backgroundColor = "green";        
    }else{
        computerPoints++;
        computerScrore.innerText = computerPoints;
        msg.innerText = "You Loose!";
        msg.style.backgroundColor = "red";        
    }    
}

