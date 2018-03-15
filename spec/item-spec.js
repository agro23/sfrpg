//   constructor(id, name, type, desc, xp, special, broken, contained, containedBy, contains)


let Item = require('./../src/item.js').ItemModule;

describe('Item', function() {
  it('should set items id', function() {
    let item = new Item(1, "", "", [], 0, "", false, false, 0, []);
    expect(item.id).toEqual(1);
  });

  it('should set npcs name to "Captain Bob"', function() {
    let item = new Item(1, "", "", [], 0, "", false, false, 0, []);
    let item2 = new Item(2, "", "", [], 0, "", false, false, 0, []);
    item2.contains.push(item.id);
    item.setItemIn(2);
    expect(item.containedBy).toEqual(2);
  });

});
