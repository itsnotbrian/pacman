import { LEVEL, OBJECT_TYPE } from "./setup";
import { randomMovement } from "./ghostMoves";

import GameBoard from "./GameBoard";
import Pacman from "./Pacman";
import Ghost from "./Ghost";

// DOM elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

// Game constants
const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.creatGameBoard(gameGrid, LEVEL);

//  inital setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {}

function checkCollision(pacman, ghost) {}

function gameLoop(pacman, ghost) {
  gameBoard.moveCharacter(pacman);

  ghosts.forEach((ghost) => gameBoard.moveCharacter(ghost));
}

function startGame() {
  gameWin = false;
  (powerPillActive = false), (score = 0);

  startButton.classList.add("hide");

  gameBoard.createGrid(LEVEL);

  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
  document.addEventListener("keydown", (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist)
  );
  const ghosts = [
    new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
    new Ghost(4, 209, randomMovement, OBJECT_TYPE.PINKY),
    new Ghost(3, 230, randomMovement, OBJECT_TYPE.INKY),
    new Ghost(2, 251, randomMovement, OBJECT_TYPE.CLYDE),
  ];

  timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);
}

// initialize game
startButton.addEventListener("click", startGame);
