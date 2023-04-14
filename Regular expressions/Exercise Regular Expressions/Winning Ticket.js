function winningTicket(string) {
  let checkValidation = /^(?<firstHalf>.{10})(?<secondHalf>.{10})$/
  let ticketsArr = string.split(/[\s,]+/);
  for (let ticket of ticketsArr) {
    let match = checkValidation.exec(ticket);
    if (match) {
      let firstHalf = match.groups.firstHalf;
      let secondHalf = match.groups.secondHalf;
      let checkFirstHalf = checkForWinningTicket(firstHalf);
      let checkSecondHalf = checkForWinningTicket(secondHalf);
      let halfToLog = ""

      if(checkFirstHalf[0]<checkSecondHalf[0]) halfToLog = checkFirstHalf
      else halfToLog = checkSecondHalf

      if (checkFirstHalf[0] === 10 && checkSecondHalf[0] === 10) {
        console.log(
          `ticket "${ticket}" - ${halfToLog[0]}${halfToLog[1][0]} Jackpot!`);
      } else if (checkFirstHalf[0] >= 6 && checkSecondHalf[0] >= 6) {
        console.log(`ticket "${ticket}" - ${halfToLog[0]}${halfToLog[1][0]}`);
      } else {
        console.log(`ticket "${ticket}" - no match`);
      }
    } else {
      console.log("invalid ticket");
    }
  }

  function checkForWinningTicket(half) {
    let checkForWinning = /[@]{6,9}|[#]{6,9}|[$]{6,9}|[\^]{6,9}/
    let checkForWinningJackpot = /[@]{10}|[#]{10}|[$]{10}|[\^]{10}/
    let winningJackpot = half.match(checkForWinningJackpot);
    let winning = half.match(checkForWinning);
    if (winningJackpot) {
      return [10, winningJackpot[0]];
    } else if (winning) {
      return [winning[0].length, winning[0]];
    }
    return []
  }
}
winningTicket("h@@@@@@@@@mo@@@@@@ey");
