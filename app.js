// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

let games = [];
let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Function to check if there's a winner
function checkWinner(board, player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return true;
        }
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }
    return false;
}

// Function to check if a move is valid
function isValidMove(row, col) {
    return gameBoard[row] && gameBoard[row][col] === '';
}

// Function to make a random move for the bot
function makeBotMove() {
    let row, col;
    do {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
    } while (!isValidMove(row, col));
    gameBoard[row][col] = currentPlayer;
    return { row, col };
}

// Route to handle making a move
app.post('/make-move', (req, res) => {
    const { row, col } = req.body;

    if (!isValidMove(row, col)) {
        return res.status(400).json({ error: 'Invalid move' });
    }

    gameBoard[row][col] = currentPlayer;

    if (checkWinner(gameBoard, currentPlayer)) {
        games.push({ board: gameBoard.map(row => [...row]), winner: currentPlayer });
        res.json({ winner: currentPlayer, board: gameBoard });
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            const botMove = makeBotMove();
            if (checkWinner(gameBoard, currentPlayer)) {
                games.push({ board: gameBoard.map(row => [...row]), winner: currentPlayer });
                res.json({ winner: currentPlayer, board: gameBoard });
            } else {
                currentPlayer = 'X'; // Switch back to player after bot's move
                res.json({ board: gameBoard, currentPlayer });
            }
        } else {
            res.json({ board: gameBoard, currentPlayer });
        }
    }
});

// Route to reset the game
app.post('/reset-game', (req, res) => {
    currentPlayer = 'X';
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    res.json({ message: 'Game reset', board: gameBoard, currentPlayer });
});

// Route to get all saved games
app.get('/saved-games', (req, res) => {
    res.json(games);
});

// Route to get a specific saved game by index
app.get('/saved-games/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < games.length) {
        const savedGame = games[index];
        res.json(savedGame);
    } else {
        res.status(404).json({ error: 'Game not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Tic Tac Toe app listening at http://localhost:${port}`);
});
