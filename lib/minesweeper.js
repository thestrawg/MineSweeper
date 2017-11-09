'use strict';

var printboard = function printboard(board) {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printboard(board);

board[0][1] = '1';
board[2][2] = 'B';

printboard(board);