

class Ship {
  #length;
  #coords;
  #hits = 0;

  constructor(size,cordinates) {
    this.#length = size;
    this.#coords = [];
    this.#hits = 0;
    this.#coords = cordinates;
  }


  hit() {
    this.#hits++;
    console.log("It worked");
    
  }

  sunk() {
    let sunk = this.#hits >= this.#length;
    return sunk;
    // Method implementation
  }

  match(input) {
    return this.#coords.some((arr) => {
      return JSON.stringify(arr) === JSON.stringify(input);
    });
  }
}

class Player {
  constructor() {
    this.turn = 1;
  }
}

class Computer {
  constructor() {
    this.turn = 0;
  }
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
let ship1 = new Ship(5, [[0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],]);
let ship2 = new Ship(3);
let ship3 = new Ship(3);
let ship4 = new Ship(2);
let ship5 = new Ship(1);




function checking(input) {
  return ship1.match(input);
}
checking([0,1]);


