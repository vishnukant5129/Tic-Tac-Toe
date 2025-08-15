├── app.js
├── index.html
└── style.css


/app.js:
--------------------------------------------------------------------------------
  1 | let player1 = prompt("enter your name1");
  2 | let player2 = prompt("enter your name2");
  3 | 
  4 | let login = document.querySelector(".login")
  5 | let start = document.querySelector(".login-btn");
  6 | let boxes = document.querySelectorAll(".box");
  7 | let main = document.querySelector("main");
  8 | let resetBtn = document.querySelector("#reset-btn");
  9 | let newGameBtn = document.querySelector("#new-btn");
 10 | let msgContainer = document.querySelector(".msg-container");
 11 | let msg = document.querySelector("#msg");
 12 | 
 13 | login.classList.remove("hide");
 14 | 
 15 | start.addEventListener("click", () => {
 16 |     login.classList.add("hide");
 17 |     main.classList.remove("hide");
 18 | });
 19 | 
 20 | 
 21 | let turn0 = true;
 22 | 
 23 | const winPatterns = [
 24 |     [0, 1, 2],
 25 |     [3, 4, 5],
 26 |     [6, 7, 8],
 27 |     [0, 3, 6],
 28 |     [1, 4, 7],
 29 |     [2, 5, 8],
 30 |     [0, 4, 8],
 31 |     [2, 4, 6],
 32 | ];
 33 | 
 34 | const resetGame = () => {
 35 |     turn0 = true;
 36 |     enableBoxes();
 37 |     msgContainer.classList.add("hide");
 38 | };
 39 | 
 40 | const newGame = () => {
 41 |     turn0 = true;
 42 |     enableBoxes();
 43 |     msgContainer.classList.add("hide");
 44 |     main.classList.remove("hide");
 45 | };
 46 | 
 47 | boxes.forEach((box) => {
 48 |     box.addEventListener("click", () => {
 49 |         console.log("Box clicked");
 50 | 
 51 |         if (turn0) {
 52 |             box.innerText = player1;
 53 |             box.style.backgroundColor = "black";
 54 |             box.style.color = "white";
 55 |             turn0 = false;
 56 |         } else {
 57 |             box.innerText = player2;
 58 |             console.log(player1);
 59 |             box.style.backgroundColor = "white";
 60 |             box.style.color = "black";
 61 |             turn0 = true;
 62 |         }
 63 |         box.disabled = true;
 64 | 
 65 |         checkWinner();
 66 |     })
 67 | });
 68 | 
 69 | const disableBoxes = () => {
 70 |     for(let box of boxes) {
 71 |         box.disabled = true;
 72 |     }
 73 | };
 74 | 
 75 | const enableBoxes = () => {
 76 |     for(let box of boxes) {
 77 |         box.disabled = false;
 78 |         box.innerText = "";
 79 |         box.style.backgroundColor = "";
 80 |     }
 81 | };
 82 | 
 83 | const showWinner = (winner) => {
 84 |     msg.innerText = `Congratulation, Winner is ${winner}`;
 85 |     msgContainer.classList.remove("hide");
 86 |     main.classList.add("hide");
 87 |     disableBoxes();
 88 | };
 89 | 
 90 | const checkWinner = () => {
 91 |     for (pattern of winPatterns) {
 92 |         let pos1Val = boxes[pattern[0]].innerText;
 93 |         let pos2Val = boxes[pattern[1]].innerText;
 94 |         let pos3Val = boxes[pattern[2]].innerText;
 95 | 
 96 |         if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
 97 |             if (pos1Val === pos2Val && pos2Val === pos3Val) {
 98 |                 console.log("winner",pos1Val);
 99 |                 showWinner(pos1Val);
100 |             }
101 |         }
102 |     }
103 | };
104 | 
105 | newGameBtn.addEventListener("click", newGame);
106 | resetBtn.addEventListener("click", resetGame);
107 | 
108 | 
109 | 
110 | 


--------------------------------------------------------------------------------
/index.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en">
 3 | 
 4 | <head>
 5 |     <meta charset="UTF-8">
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 7 |     <title>Tic Tac Toe Game copy for practice</title>
 8 |     <link rel="stylesheet" href="style.css">
 9 | </head>
10 | 
11 | <body>
12 |     
13 |     <div class="login hide">
14 |         <div class="login-container">
15 |             <!-- <div class="player">Player1
16 |                 <input type="text" id="Player1" class="input" placeholder="Enter your name">
17 |             </div>
18 |             <div class="player">Player2
19 |                 <input type="text" id="Player2" class="input" placeholder="Enter your name">
20 |             </div> -->
21 |             <button id="clear-btn">Clear</button>
22 |             <button class="login-btn" >Start</button>
23 |         </div>
24 |     </div>
25 | 
26 |     <div class="msg-container hide">
27 |         <p id="msg">Winner</p>
28 |         <button id="new-btn">New Game</button>
29 |     </div>
30 |     <main class="hide">
31 |         <h1>Tic Tac Toe</h1>
32 |         <div class="container">
33 |             <div class="game">
34 |                 <button class="box"></button>
35 |                 <button class="box"></button>
36 |                 <button class="box"></button>
37 |                 <button class="box"></button>
38 |                 <button class="box"></button>
39 |                 <button class="box"></button>
40 |                 <button class="box"></button>
41 |                 <button class="box"></button>
42 |                 <button class="box"></button>
43 |             </div>
44 |         </div>
45 |         <button id="reset-btn">Reset Game</button>
46 |     </main>
47 | </body>
48 | <script src="app.js"></script>
49 | 
50 | </html>


--------------------------------------------------------------------------------
/style.css:
--------------------------------------------------------------------------------
  1 | * {
  2 |     margin: 0px;
  3 |     padding: 0px;
  4 | }
  5 | 
  6 | body {
  7 |     background-color: #548687;
  8 |     text-align: center;
  9 | }
 10 | 
 11 | .login {
 12 |     height: 100vh;
 13 |     display: flex;
 14 |     justify-content: center;
 15 |     align-items: center;
 16 | }
 17 | 
 18 | .login-container {
 19 |     height: 60vmin;
 20 |     width: 60vmin;
 21 |     border: 2px solid black;
 22 |     border-radius: 20px;
 23 |     justify-content: center;
 24 |     align-content: center;
 25 |     background-color: rgb(240, 238, 238);
 26 | }
 27 | 
 28 | .player {
 29 |     height: 50px;
 30 |     font-size: 30px;
 31 | }
 32 | 
 33 | .input {
 34 |     height: 25px;
 35 |     font-size: 15px;
 36 |     color: #000;
 37 | }
 38 | 
 39 | #clear-btn {
 40 |     padding: 1rem;
 41 |     font-size: 1.25rem;
 42 |     background-color: #191913;
 43 |     color: #fff;
 44 |     border-radius: 20px;
 45 |     border: none;
 46 | } 
 47 | 
 48 | 
 49 | .login-btn {
 50 |     margin: 20px;
 51 |     padding: 1rem;
 52 |     font-size: 1.25rem;
 53 |     background-color: blue;
 54 |     color: #fff;
 55 |     border-radius: 20px;
 56 |     border: none;
 57 | }
 58 | 
 59 | .container {
 60 |     height: 70vh;
 61 |     display: flex;
 62 |     flex-wrap: wrap;
 63 |     justify-content: center;
 64 |     align-items: center;
 65 | }
 66 | 
 67 | .game {
 68 |     height: 60vmin;
 69 |     width: 60vmin;
 70 |     display: flex;
 71 |     flex-wrap: wrap;
 72 |     justify-content: center;
 73 |     align-items: center;
 74 |     gap: 1.5vmin;
 75 | }
 76 | 
 77 | .box {
 78 |     height: 18vmin;
 79 |     width: 18vmin;  
 80 |     border-radius: 1rem;
 81 |     border: none;
 82 |     box-shadow: 0 0 1rem rgba(0,0,0,0.3);
 83 |     font-size: 5vmin;
 84 |     color: #b0413e;
 85 |     background-color: #fffc7f;
 86 | } 
 87 | 
 88 | #reset-btn {
 89 |     padding: 1rem;
 90 |     font-size: 1.25rem;
 91 |     background-color: #191913;
 92 |     color: #fff;
 93 |     border-radius: 20px;
 94 |     border: none;
 95 | } 
 96 | 
 97 | #new-btn {
 98 |     padding: 1rem;
 99 |     font-size: 1.25rem;
100 |     background-color: #191913;
101 |     color: #fff;
102 |     border-radius: 1rem;
103 |     border: none;
104 | }
105 | 
106 | #msg {
107 |     color: #ffffc7;
108 |     font-size: 5vmin;
109 | 
110 | }
111 | 
112 | .msg-container {
113 |     height: 100vmin;
114 |     display: flex;
115 |     justify-content: center;
116 |     align-items: center;
117 |     flex-direction: column;
118 |     gap: 4rem;
119 | }
120 | 
121 | .hide {
122 |     display: none;
123 | } 
