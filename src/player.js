import Battlesequence from "./battlesequence";

export default class Player { 
  constructor ()  {
    this.score = 0; 
    this.level = 1;  
  }
  //level up and level down and set score 
  levelUp () { 
    this.level+=1; 
  }
  levelDown() {
    this.level-=1; 
  }
}
