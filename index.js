class Ship {
  #length;
  #coords;
  #hits = 0;

  constructor(size) {
    this.#length = size;
    this.#coords = [];
    this.#hits = 0;
  }

  place(cordinates) {
    this.#coords = cordinates;
    return this.#coords;
  }

  hit() {}

  sunk(e) {
    // Method implementation
  }
}

class Player {
  constructor() {
    turn = 1;
  }
}

class Computer {
  turn = 0;
}

class Board {
  newArr = Array.from({ length: 100 }, (_, index) => {
    const i = Math.floor(index / 10);
    const j = index % 10;
    return [i, j];
  });
}

let B1 = new Board();
let B2 = new Board();
let carrier = new Ship(5);
console.log(
  carrier.place([
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ])
);

module.exports = { B1, hit };
