import Battlesequence from "./../src/battlesequence.js"; 
import diceRoll from "./../src/battlesequence.js"

describe ('Battlesequence', () => {
  const battle = new Battlesequence(2, 2);
  test ("adds 2+2 to equal 4", () => {
    expect(battle.num1).toEqual(2);
    expect(battle.num2).toEqual(2);
  });
  describe ('Battlesequence', () => {
  const battle = new Battlesequence(2, 2, 1);
  test("add num1+num2", ()=>{
    expect (battle.battle()).toEqual(4);
  });
  });
});
describe ('Battlesequence', () => {
  const battle = new Battlesequence();
  test("diceRoll should return 1-20", ()=>{
    expect (battle.diceRoll()).toBeLessThanOrEqual(20); 
  });
  });

//import {Player} from "../src/battlesequence.js"; 
// //diceRoll, //operationRoll}

// describe ("player", () => { 
//   //  let Player; 
//   //  beforeEach (() => { 
//   // //  rollDice =new Rolldice; 
//   // // currentRoll =new currentRoll 
//   //  let player = new Player ("playerOne"); 
//   //  //playerTwo = new Player ('playerTwo');

//   //  }); 
//    test("should create a player object", () => { 
//     player = new Player ('playerOne'); 
//      expect (player).toBe("playerOne");
//      //expect (player).toEqual("playerTwo"); 
//    }); 
//   //  test ("should put them in first level", () => {
//   //    expect(player.level).toBe (1); 
//   //  });

// });

// // //attaching three dice roll with operation 
// //  describe ("generateDiceRoll", ()=> {
// //    test ("should generate first die roll", () =>{
// //      expect (player.diceRoll.first).toBeGreaterThanEqual (1); 
// //      expect (player.diceRoll.first).toBeLessThan (21); 
// //    })
// //    test ("should generate second die roll", () =>{
// //     expect (player.diceRoll.second).toBeGreaterThanEqual (1); 
// //     expect (player.diceRoll.second).toBeLessThan (21); 
// //   })
// //   test ("should generate third die roll to be an operation and give currentRoll", () =>{
// //     expect (player.diceRoll.third).toBeGreaterThanEqual (1); 
// //     expect (player.diceRoll/third).toBeLessThan (5); 
// //   })
// //  })
// //   describe ("operationRoll", () => { 
// //      test ("it should record one of the four signs," ()=> {
// //        let operationRoll = 4; 
// //         expect (operationRoll.toEqual (%);
// //   }); 
// //      test('two plus two is four', () => {
// //        expect(2 + 2).toBe(4); 
// //   }); 
// //     test('two - two is four', () => {
// //       expect(2 - 2).toBe(0);
// //   });
// //   test('two * two is four', () => {
// //     expect(2 * 2).toBe(4);
// //   });
// //   test('two % two is four', () => {
// //     expect(2 % 2).toBe(1);
// //   });
// // });