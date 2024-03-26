const playerNumSpan = document.getElementById("player-num");
const playerOneScoreSpan = document. getElementById("player-1-score")
const playerTwoScoreSpan =document. getElementById("player-2-score")
const playerOneButton = document.getElementById("player-1-btn")
const playerTwoButton = document.getElementById("player-2-btn")
const resetButton = document.getElementById("reset-btn");
const diceImg = document.getElementById( "dice-img");

const data={
    currentPlayer:1,
    playeroneScore:0,
    playerTwoScore:0,
}

console.log(data)
const setCurrentPlayer=(playerNum)=>{
    data.currentPlayer = playerNum;
    playerNumSpan.innerText=data.currentPlayer;
    if(data.currentPlayer==1){
        playerOneButton.classList.remove("disabled")
        playerTwoButton.classList.add("disabled")
        playerOneButton.removeAttribute("disabled")
        playerTwoButton.setAttribute("disabled","disabled")
    }
    else{
        playerTwoButton.classList.remove("disabled")
        playerOneButton.classList.add("disabled")
        playerTwoButton.removeAttribute("disabled")
        playerOneButton.setAttribute("disabled","disabled")
    }
}


const startGame=()=>{
    diceImg.setAttribute("src", `./images/dice.png`);
    setCurrentPlayer(data.currentPlayer=Math.ceil(Math.random()*2));
    data.playeroneScore=0;
    data.playerTwoScore=0;

    playerOneScoreSpan.innerText=data.playeroneScore;
    playerTwoScoreSpan.innerText=data.playerTwoScore;

    console.log(data.currentPlayer)

    
}

const rollTheDice=()=>{
    const intervalId = setInterval(()=>{
        const randomNum=Math.ceil(Math.random() *6 );
        diceImg.setAttribute("src", `./images/${randomNum}.png`);
        }, 100);
    
    setTimeout(()=>{
    clearInterval(intervalId);
    const randomNum=Math.ceil(Math.random() *6 )
    diceImg.setAttribute("src",`./images/${randomNum}.png`)
    
    if(data.currentPlayer == 1 ){
       data.playeroneScore+=randomNum;
       playerOneScoreSpan.innerText=data.playeroneScore;
     }else {
         data.playerTwoScore += randomNum;
         playerTwoScoreSpan.innerText = data.playerTwoScore;
     }
    },1000)
}

playerOneButton.addEventListener("click",()=>{
    console.log("P-1 button clicked");
    rollTheDice();
    setTimeout(()=>{
    if(data.playeroneScore >=30){
        setTimeout(()=>alert("Player 1 Wins"),1000)
        resetButton.classList.remove("disabled")
        resetButton.removeAttribute("disabled")
        playerOneButton.setAttribute("disabled","disabled")
    }
    else{
    setCurrentPlayer(2)
    }
},1000)
})



playerTwoButton.addEventListener("click",()=>{
    console.log("P-2 button clicked");
    rollTheDice();
    setTimeout(()=>{
    if(data.playerTwoScore >=30){
        setTimeout(()=>alert("Player 2 Wins"),1000)
        resetButton.classList.remove("disabled")
        resetButton.removeAttribute("disabled")
        playerTwoButton.setAttribute("disabled","disabled")
    }
    else{
    setCurrentPlayer(1)
    }
    },1000)
})

resetButton.addEventListener("click",()=>{
    startGame()
    resetButton.classList.add("disabled")
    resetButton.setAttribute("disabled","disabled")
})



document.onload=startGame();