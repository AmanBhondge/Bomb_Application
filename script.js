let Timer = document.getElementById("timer");
let InputUser = document.getElementById("userInput");
let Bomb = document.getElementById("bomb");
let Message = document.getElementById("msg");
let count = 10;

let timerId = setInterval(() => {

    count = count - 1;
    Timer.textContent = count;
    if(count === 0){
        clearInterval(timerId);
        Bomb.src = "assets/blast.jpg";
        Message.textContent = "Game Over! You didn't defuse the bomb in time!";
    }
    
}, 1000);


function bombDef(event){

    if(event.target.value === "defuse" && event.key === "Enter" && count > 0)
    {
        clearInterval(timerId);
        Bomb.src = "assets/bomb-defused.gif";
    }
    else if (event.key === "Enter") {
        clearInterval(timerId);
        Bomb.src = "assets/blast.jpg";
    }

}

InputUser.addEventListener("keyup",bombDef)