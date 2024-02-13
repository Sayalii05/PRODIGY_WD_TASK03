let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function handleClick(index) {
    if (board[index] === '' && !isGameOver()) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        
        if (isWinner()) {
            alert(currentPlayer + ' wins!');
            resetGame();
        } else if (isBoardFull()) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function isWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern =>
        board[pattern[0]] !== '' &&
        board[pattern[0]] === board[pattern[1]] &&
        board[pattern[1]] === board[pattern[2]]
    );
}

function isBoardFull() {
    return board.every(cell => cell !== '');
}

function isGameOver() {
    return isWinner() || isBoardFull();
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];

    const cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cell => {
        cell.innerText = '';
    });
}