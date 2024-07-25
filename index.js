let userScore=0;
let comScore=0;

const options=document.querySelectorAll(".option");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#comScore");

compChoiceGen=()=>{
    const options=["stone","paper","scissor"];
    const compchoice=Math.floor(Math.random()*3);
    return options[compchoice];
}



drawGame=()=>{
    msg.innerText="Draw! play again.";
    msg.style.backgroundColor="rgb(6, 17, 53)";
}

showWinner=(userWin, userChoice, compchoice)=>{
    if(userWin){
     userScore++;
     console.log(userScore);
        userScorePara.innerText=userScore;
       msg.innerText=`You won. ${userChoice} beats ${compchoice} `;
       msg.style.backgroundColor="green";
    }else{
        comScore++;
        console.log(comScore);
        compScorePara.innerText=comScore;
        msg.style.backgroundColor="red";
        msg.innerText=`You lose. ${compchoice} beats ${userChoice} `;
        console.log("You lose. play again.");
    }
}

playGame=(userChoice)=>{
    console.log("User choice =", userChoice);
    // computerchoice generator
    compchoice=compChoiceGen();
    console.log("Computer choice is",compchoice );

    if(userChoice===compchoice){
       drawGame();
    }
    else{
        userWin=true;
        if(userChoice==="stone"){
            userWin= compchoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin=compchoice==="scissor" ? false : true;
        }else if(userChoice==="scissor"){
            userWin=compchoice==="stone" ? false : true;
        }
        showWinner(userWin, userChoice, compchoice);
    }
}

options.forEach((option)=>{
    
    option.addEventListener("click",()=>{
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});