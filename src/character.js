export class Character {
  constructor(name, int, con, str, agl, xp, lvl, hp, mp, inventory, special) {
  this.name = name;
  this.int = int;
  this.con = con;
  this.str = str;
  this.agl = agl;
  this.xp = xp;
  this.lvl = lvl;
  this.hp = hp;
  this.mp = mp;
  this.inventory = inventory;
  this.special = special;
}
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getInt() {
    return this.int;
  }
  setInt(int) {
    this.int = int;
  }

  getCon() {
    return this.con;
  }

  setCon(con) {
    this.con = con;
  }

  getStr() {
    return this.str;
  }
  setStr(str) {
    this.str = str;
  }

  getAgl() {
    return this.agl;
  }
  setAgl(agl) {
    this.agl = agl;
  }

  getXP() {
    return this.xp;
  }

  setXP(xp) {
    this.xp = xp;
  }

  getLvl() {
    return this.lvl;
  }

  setLvl(lvl) {
    this.lvl = lvl;
  }

  getHP() {
    return this.hp;
  }

  setHP(hp) {
    this.hp = hp;
  }

  getInventory() {
    return this.inventory;
  }

  setInventory(inventory) {
    this.inventory = inventory.slice(0);
  }
  getSpecial() {
    return this.special;
  }

  setSpecial(special) {
    this.special = special.slice(0);
  }
}

exports.characterModule = Character;
