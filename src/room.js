export class Room {
  constructor(id, name, shortDesc, longDesc, light, doors, contents, npc, special) {
  this.id = id;
  this.name = name;
  this.shortDesc = shortDesc;
  this.longDesc = longDesc;
  this.light = light;
  this.doors = doors;
  this.contents = contents;
  this.npc = npc;
  this.special = special;
}
  getId() {
    return this.name;
  }

  setId(id) {
    this.id = id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  shortDesc() {
    return this.shortDesc;
  }

  shortDesc(shortDesc) {
    this.shortDesc = shortDesc.slice(0);
  }

  longDesc() {
    return this.shortDesc;
  }

  longDesc(shortDesc) {
    this.shortDesc = shortDesc.slice(0);
  }

  getLight() {
    return this.light;
  }

  setLight(light) {
    this.light = light;
  }

  getDoors() {
    return this.doors;
  }

  setDoors(doors) {
    this.doors = doors.slice(0);
  }

  getADoor(element) {
    return this.doors[element];
  }

  setADoor(element, value) {
    this.doors[element] = value;
  }

  getContents() {
    return this.contents;
  }

  setContents(contents) {
    this.contents = contents.slice(0);
  }

  getNpc() {
    return this.npc;
  }

  setNpc(npc) {
    this.npc = npc.slice(0);
  }

  getSpecial() {
    return this.special;
  }

  setSpecial(special) {
    this.special = special.slice(0);
  }
}

exports.roomModule = Room;
