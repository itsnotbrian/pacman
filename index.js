import {LEVEL, OBJECT_TYPE} from './setup'

// DOM elements
const gameGrid = document.querySelector('#game')
const scoreTable = document.querySelector('#score')
const startButton = document.querySelector('#start-button')

// Game constants
const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;

//  inital setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {

}

function checkcollision(pacman, ghost) {

}

function gameLoop(pacman, ghost) {

}
function startGame() {
    
}