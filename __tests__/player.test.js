import Player from "./../src/player.js"; 
describe('player', () => {
   let player; 
   beforeEach(() => {
      player =new Player (); 
   });
   test ("setting up player with score/level", () => {
      expect(player.score).toEqual(0);
      expect(player.level).toEqual(1);
   });
   test("checking to see if level changes", () => { 
      player.levelUp(); 
      expect(player.level).toEqual (2);
   })
   test("checking to see if level changes", () => { 
      player.levelDown(); 
      expect(player.level).toEqual (0);
   })
}); 