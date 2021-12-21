
export default class Battlesequence {
  constructor(num1, num2, operationRoll) {
    this.num1=num1 ; 
    this.num2=num2; 
    // this.num1 = num1 || this.diceRoll ()
    // this.num2 = num2 || this.diceRoll ()
    this.operationRoll = operationRoll
  }
  operation() { 
    return Math.floor(Math.random ()* 4) +1; 
  }
  reRollDice() { 
    this.num1 = this.diceRoll(); 
    this.num2 = this.diceRoll();
    this.operationRoll =this.operation (); 
  }
  diceRoll() { 
    return Math.floor(Math.random ()* 20) +1; 
  }
  battle() { 
    const {operationRoll, num1, num2}=this 
    if (operationRoll ===1 ){ 
      return (num1 + num2); 
    } else if (operationRoll ===2){ 
      return (num1-num2); 
    } else if (operationRoll ===3){ 
      return (num1 * num2); 
    } else if (operationRoll ===4){ 
      return (num1 / num2); 
    } 
  }
}


// export default Victor { 
//   constructor (playerOne, playerTwo, operatonRoll){
//     this.playerOne =playerOne; 
//     this.playerTwo =playerTwo; 
//     this.operationRoll =operationRoll; 
//     level =1; 
//   }
//   claimVictor (){ 
//     playerOne = operationRoll(); 
//     playerTwo = operationRoll(); 
//     if (playerOneTotal > playerTwoTotal ) { 
//     playerOneWins += level;   
//   } else if (playerTwoTotal <playerOneTotal) { 
//     playerTwoWins +=level; 
//   } else if (playerTwoTotal =playerOneTotal){ 
//     playerOneWins = level; 
//     playerTwoWins = level; 
//   }
//   }
// }







// // //we need a dice roll x 3 (two of the same and one with math operations)
// // //so constants are players 1 and 2 ,  diceRolltotal, currentRoll, comparingRolls, clearingRoll. 
// // function diceRoll {twoRolls, operationRoll, currentRoll, compareRoll, clearingRoll}
// // this.currentRoll =currentRoll; 
