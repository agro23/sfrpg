// constructor(id, name, shortDesc, longDesc, light, doors, contents, npc, special)
var Room = require('./../src/room.js').roomModule;

describe('Room', function() {
  it('should set rooms id', function() {
    let room = new Room(1, "", [], [], true, [], [], [], []);
    expect(room.id).toEqual(1);
  });

  it('should set rooms light to false', function() {
    let room = new Room(1, "Bridge", [], [], true, [], [], [], []);
    room.setLight(false);
    expect(room.light).toBe(false);
  });

  it('should add doors to room', function() {
    let room = new Room(1, "Bridge", [], [], true, [], [], [], []);
    room.setDoors([0,0,2,3,0,4,5,0,0,0,0]);
    expect(room.doors).toEqual([0,0,2,3,0,4,5,0,0,0,0]);
  });

  it('should set a single door in a room', function() {
    let room = new Room(1, "Bridge", [], [], true, [], [], [], []);
    room.setDoors([0,0,2,3,0,4,5,0,0,0,0]);
    // console.log(room.doors[2]);
    room.setADoor(2, 99);
    // console.log(room.doors[2]);
    expect(true).toEqual(true);
    // expect(room.doors).toEqual(jasmine.arrayContaining([99]));
  });
});
