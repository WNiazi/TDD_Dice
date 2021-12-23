
export default class Battlesequence {
  constructor( ) {
    this.num1 = 0;  
    this.num2 = 0; 
    this.operationRoll = 0; 
   
  }
  operation() { 
    return Math.floor(Math.random ()* 4) +1; 
  }
  reRollDice () { 
    this.num1 = this.diceRoll(); 
    this.num2 = this.diceRoll();
    this.operationRoll = operation ();
  }
  diceRoll() { 
    return Math.floor(Math.random ()* 20) +1; 
  }
  //rollDice change name 
  battle() { 
    const {operationRoll, num1, num2} = this;
    if (operationRoll ===1 ){ 
      return (num1 + num2); 
    } else if (operationRoll ===2){ 
      return (num1 - num2); 
    } else if (operationRoll ===3){ 
      return (num1 * num2); 
    } else if (operationRoll ===4){ 
      return (num1 / num2); 
    } 
  }
}


