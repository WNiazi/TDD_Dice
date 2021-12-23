import Battlesequence from "./../src/battlesequence.js"; 
import player from "./../src/player.js";
import Game from "./../src/game.js";

describe('Battlesequence', () => {
 let battle; 
 beforeEach(() => {
   battle = new Battlesequence (); 
  });
  test ("brings in num1, num2", () => {
    expect(battle.num1).toEqual(0);
    expect(battle.num2).toEqual(0);
  });
  test("carry out the operationRoll", ()=>{ 
    battle.num1 = 3; 
    battle.num2 = 2 ; 
    battle.operationRoll =1 ; 
    expect(battle.battle()).toEqual(5);
  });
  test("diceRoll should return 1-20", ()=>{
    expect(battle.diceRoll()).toBeLessThanOrEqual(20); 
  });
});
