function binaryArrayToNumber(arr) {
  let rev = arr.reverse();
  res = [];
  if (rev[0] === 1) {
    res.push(1);
  } else if (rev[0] === 0) {
    res.push(0)
  } else return 'error';

  for (let i = 1; i<rev.length; i++) {
    if (rev[i] === 1) {
      res.push(2**i)
    } else if (rev[i] === 0) {
      res.push(0)
    } else {
      return 'error'
    }
  }

  let sum = 0;
  for (let i = 0; i<rev.length; i++) {
    sum += res[i]
  }
  return sum;
}

console.log(binaryArrayToNumber([0, 1, 1, 0]))