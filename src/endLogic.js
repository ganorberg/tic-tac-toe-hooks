const wins = () => {
    const topHorizontal = [0, 1, 2];
    const middleHorizontal = [3, 4, 5];
    const bottomHorizontal = [6, 7, 8];

    const leftVertical = [0, 3, 6];
    const middleVertical = [1, 4, 7];
    const rightVertical = [2, 5, 8];

    const backwardSlashDiagonal = [0, 4, 8];
    const forwardSlashDiagonal = [2, 4, 6];

    return [
        topHorizontal,
        middleHorizontal,
        bottomHorizontal,
        leftVertical,
        middleVertical,
        rightVertical,
        backwardSlashDiagonal,
        forwardSlashDiagonal
    ];
};

const lettersMatch = (cells) => {
    if (cells.includes("-")) {
        return false;
    }

    return cells[0] === cells[1] && cells[1] === cells[2];
};

export const isWin = (board) => {
    const winCoordinates = wins();
    for (let i = 0; i < winCoordinates.length; i++) {
        const winCoordinate = winCoordinates[i];

        const firstCell = board[winCoordinate[0]];
        const secondCell = board[winCoordinate[1]];
        const thirdCell = board[winCoordinate[2]];
        const boardCells = [firstCell, secondCell, thirdCell];

        if (lettersMatch(boardCells)) {
            return true;
        }
    }

    return false;
};

export const isDraw = (board, playerWon) => !playerWon && !board.includes("-");
