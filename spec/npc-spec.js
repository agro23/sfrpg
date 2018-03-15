//   constructor(id, type, desc, name, int, con, str, agl, lvl, hp, mp, inventory, special)

let NPC = require('./../src/npc.js').NPCModule;

describe('NPC', function() {
  it('should set npcs name', function() {
    let npc = new NPC(0, "", "", "", 0, 0, 0, 0, 0, 0, 0, "", "");
    expect(npc.name).toEqual("");
  });

  it('should set npcs name to "Captain Bob"', function() {
    let npc = new NPC(0, "", "", "Captain Bob", 0, 0, 0, 0, 0, 0, 0, "", "");
    expect(npc.name).toEqual("Captain Bob");
  });

  it('should set myNPC.name to "Captain Bob"', function() {
    let npc = new NPC(0, "", "", "", 0, 0, 0, 0, 0, 0, 0, "", "");
    npc.setName("Captain Bob");
    console.log(npc.name);
    expect(npc.name).toEqual("Captain Bob");
  });

  it('should set lvl to 11', function() {
    let npc = new NPC(0, "", "", "", 0, 0, 0, 0, 0, 0, 0, "", "");
    npc.setLvl(11);
    console.log("Get lvl:" + npc.getLvl());
    expect(npc.lvl).toEqual(11);
  });

  it('should get lvl', function() {
    let npc = new NPC(0, "", "", "", 0, 0, 0, 0, 11, 0, 0, "", "");
    let x = 0;
    x = npc.getLvl();
    expect(x).toEqual(11);
  });
});
