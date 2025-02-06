let board;

class Ship {
  #length;
  #hits = 0;

  constructor(size) {
    this.#length = size;
  }

  hit(params) {
    this.#hits++;
  }

  sunk(e) {
    // Method implementation
  }
}

class Player {
  constructor() {
    turn = 0;
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
