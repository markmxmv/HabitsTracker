function rps (p1, p2) {
  let res;
  if (p1 === 'rock' && p2 === 'scissors') {
    res = 'Player 1 won!';
  } else if (p1 === 'scissors' && p2 === 'rock') {
    res = 'Player 2 won!';
  } else if (p1 === 'paper' && p2 === 'rock') {
    res = 'Player 1 won!';
  } else if (p1 === 'rock' && p2 === 'paper') {
    res = 'Player 2 won!';
  } else if (p1 === 'scissors' && p2 === 'paper') {
    res = 'Player 1 won!';
  } else if (p1 === 'paper' && p2 === 'scissors') {
    res = 'Player 2 won!';
  } else if (p1 === p2) {
    res = 'Draw!'
  }
  return res;
}

console.log(rps('rock', 'paper'));