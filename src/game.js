import Battlesequence from "./battlesequence";

export default class Game {
  constructor(playerOne, playerTwo ) {
    this.playerOne=playerOne; 
    this.playerTwo=playerTwo; 
  } 
//comparing a score 
  leveling() {  
      if (this.playerOne.score > this.playerTwo.score ) {
        this.playerOne.levelUp(); 
        this.playerTwo.levelDown(); 
      } else if (this.playerTwo.score > this.playerOne.score) { 
        this.playerTwo.levelUp(); 
        this.playerOne.levelDown(); 
      } 
  }
  playGame () { 
    sequence1 = new Battlesequence (); 
    sequence2 = new Battlesequence (); 

    sequence1.reRollDice (); 
    this.playerOne.score = sequence1.battle(); 
    // this.playerOne.setScore (); 
    sequence2.reRollDice (); 
    this.playerTwo.score = sequence2.battle(); 
  }
}

// SetScore another option of what to do 
// add score per round 
// Changing to different levels 
// Changing perks at different levels 