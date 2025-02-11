let usedCell = [];

class Ship {
  #length;
  #coords;
  #hits = 0;

  constructor(size, coordinates) {
    if (!Array.isArray(coordinates) || coordinates.length !== size) {
      throw new Error("Coordinates must be an array of length equal to size");
    }
    
    this.#length = size;
    this.#coords = coordinates;
    this.#hits = 0;
  }

  hit() {
    this.#hits++;
    console.log(`Ship hit! Total hits: ${this.#hits}`);
  }

  sunk() {
    return this.#hits >= this.#length;
  }

  match(input) {
    
    if(usedCell.some(([x,y]) => x === input[0] && y === input[1]))
    {
      console.log("Alread selected");
      
      return false;
    }
    else
    {
      usedCell.push(input)
      console.log(usedCell);
      
      return this.#coords.some(([x, y]) => x === input[0] && y === input[1]);
    }
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
  constructor() {
    this.grid = Array.from({ length: 10 }, (_, i) =>
      Array.from({ length: 10 }, (_, j) => [i, j])
    );
  }
}

let B1 = new Board();
let B2 = new Board();

let ship1 = new Ship(5, [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
]);

// Fixing ship creation by providing coordinates
let ship2 = new Ship(3, [
  [2, 1],
  [2, 2],
  [2, 3],
]);

let ship3 = new Ship(3, [
  [4, 4],
  [4, 5],
  [4, 6],
]);

let ship4 = new Ship(2, [
  [6, 7],
  [6, 8],
]);

let ship5 = new Ship(1, [[8, 9]]);

// Function to check if a coordinate hits ship1
function checking(input) {
  if (ship1.match(input)) {
    ship1.hit();
    console.log("Hit confirmed!");
    return true;
  } else {
 
    console.log("Miss!");
    return false;
  }
}

 // Should log "Ship hit!" and "Hit confirmed!"
// Should log "Ship hit!" and "Hit confirmed!"
checking([0,1])
checking([0,1])
checking([0,5])
checking([0,5])


