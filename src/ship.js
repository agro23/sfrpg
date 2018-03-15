export class Ship {
  constructor(name, shortDesc, longDesc, map, xp, damageLog, orbit, special) {
  // this.name = "U.N.S.S. Santa Fe";
  this.name = name;

  this.shortDesc = shortDesc;
  this.longDesc = longDesc;
  this.map = map;
  this.xp = xp;
  this.damageLog = damageLog;
  this.orbit = true;
  this.special = special;
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

  getMap() {
    return this.map;
  }

  setMap(map) {
    this.map = map;
  }

  getXp() {
    return this.xp;
  }

  setXp(xp) {
    this.xp = xp;
  }

  getDamageLog() {
    return this.damageLog;
  }

  setDamageLog(value) {
    this.setDamageLog = value;
  }

  getOrbit() {
    return this.orbit;
  }

  setOrbit(orbit) {
    this.orbit = orbit;
  }

  getSpecial() {
    return this.special;
  }

  setSpecial(special) {
    this.special = special.slice(0);
  }
}

exports.shipModule = Ship;
