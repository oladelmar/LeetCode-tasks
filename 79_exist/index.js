function exist(board, word) {
    let found = false;

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word[0]) {
                helper(row, col, 0, word)
            }
        }
    }

    function helper(row, col, count, word) {
        if (count === word.length) {
            found = true;
            return;
        }

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[count] || found) {
            return;
        }

        let temp = board[row][col];
        board[row][col] = "";

        helper(row + 1, col, count + 1, word);
        helper(row - 1, col, count + 1, word);
        helper(row, col + 1, count + 1, word);
        helper(row, col - 1, count + 1, word);

        board[row][col] = temp;
    }

    return found;
}

module.exports = exist;
