export class Item {
  constructor(id, name, type, desc, xp, special, broken, contained, containedBy, contains) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.desc = desc;
  this.xp = xp;
  this.special = special;
  this.broken = broken;
  this.contained = contained;
  this.containedBy = containedBy;
  this.contains = contains;
}
  getId() {
    return this.id;
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

  getDesc() {
    return this.id;
  }

  setDesc(desc) {
    this.desc = desc;
  }

  getXP() {
    return this.xp;
  }

  setXP(xp) {
    this.xp = xp;
  }

  getSpecial() {
    return this.special;
  }

  setSpecial(special) {
    this.special = special.slice(0);
  }

  getBroken() {
    return this.broken;
  }

  setBroken(broken) {
    this.broken = broken;
  }

  getContained() {
    return this.contained;
  }

  setContained(contained) {
    this.contained = contained;
  }

  getContainedBy() {
    return this.containedBy;
  }

  setContainedBy(containedBy) {
    this.containedBy = containedBy;
  }

  getContains() {
    return this.contains;
  }

  setContains(contains) {
    this.contains = contains;
  }

  setItemIn(container) {
    this.contained = true;
    this.containedBy = container;
  }

  getItemIn() {
    return this.containedBy;
  }


}

exports.ItemModule = Item;
