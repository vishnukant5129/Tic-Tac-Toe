let player1 = prompt("enter your name1");
let player2 = prompt("enter your name2");

let login = document.querySelector(".login")
let start = document.querySelector(".login-btn");
let boxes = document.querySelectorAll(".box");
let main = document.querySelector("main");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

login.classList.remove("hide");

start.addEventListener("click", () => {
    login.classList.add("hide");
    main.classList.remove("hide");
});


let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const newGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked");

        if (turn0) {
            box.innerText = player1;
            box.style.backgroundColor = "black";
            box.style.color = "white";
            turn0 = false;
        } else {
            box.innerText = player2;
            console.log(player1);
            box.style.backgroundColor = "white";
            box.style.color = "black";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);



