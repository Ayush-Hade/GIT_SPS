const arr = ["Stone", "Paper", "Scissor"];
const start = document.querySelector("#Start");
const computer = document.querySelector("#computer");
const btns = document.querySelectorAll("button");
let user = document.querySelector(".user");
const comh = document.querySelector("#comh");
const userh = document.querySelector("#userh");
const reset = document.querySelector("#reset");

let comScore = 0;
let userScore = 0;
let temp = "";

start.addEventListener("click", () => {
    user.style.visibility = "visible";
    start.style.visibility = "hidden";
    let rand = Math.floor(Math.random()*3);
    temp = arr[rand];
    computer.innerHTML = "Computer Selected<br> Now <u>your turn<u> to select any of three";
})

user.addEventListener("click", (e)=> {
    console.log(e.target.id);
    let tuu = "";
    if(e.target.id == "Paper" && temp == "Paper") tuu = "Tie";
    else if(e.target.id == "Paper" && temp == "Stone") {
        tuu = "You Won";
        userScore ++;
    }
    else if(e.target.id == "Paper" && temp == "Scissor") {
        tuu = "Computer Won";
        comScore ++;
    }

    else if(e.target.id == "Stone" && temp == "Paper") {
        tuu = "Computer Won";
        comScore ++;
    }
    else if(e.target.id == "Stone" && temp == "Stone") tuu = "Tie";
    else if(e.target.id == "Stone" && temp == "Scissor") {
        tuu = "You Won";
        userScore ++;
    }

    else if(e.target.id == "Scissor" && temp == "Paper") {
        tuu = "You Won";
        userScore ++;
    }
    else if(e.target.id == "Scissor" && temp == "Stone") {
        tuu = "Computer Won";
        comScore ++;
    }
    else if(e.target.id == "Scissor" && temp == "Scissor") tuu = "Tie";

    computer.innerHTML = `Computer Selected ${temp} and<br> You selected ${e.target.id} so <u>${tuu}<u>`
    comh.innerHTML = `Computer Score : ${comScore}`;
    userh.innerHTML = `User Score : ${userScore}`;
    user.style.visibility = "hidden";
    start.style.visibility = "visible";
})

reset.addEventListener("click", (e)=> {
    location.reload();
})