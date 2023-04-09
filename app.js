function balance (operations) {
  let startBalance = 100;
  let res = 0;
  let incomeArr = [];
  let outcomeArr = [];
  let avrIncome = 0;
  let avrOutcome = 0;
  for(let i=0; i<operations.length; i++) {
    res = res + operations[i]
    if (res<0) {return false}
  }
  for (let i = 0; i<operations.length; i++) {
    if (operations[i]>0) {
      incomeArr.push(operations[i])
    } else if (operations[i]<0) {
      outcomeArr.push(operations[i])
    }
  }
  for (let i = 0; i<incomeArr.length; i++) {
    avrIncome = avrIncome + incomeArr[i]
  }
  avrIncome = avrIncome/incomeArr.length
  for (let i = 0; i<outcomeArr.length; i++) {
    avrOutcome = avrOutcome + outcomeArr[i]
  }
  avrOutcome = avrOutcome/outcomeArr.length
  return `Balance: ${res+startBalance}
Average Income: ${avrIncome}
Average Outcome: ${avrOutcome}`
}

console.log(balance([1000, -700, 300, -500, 10000]))