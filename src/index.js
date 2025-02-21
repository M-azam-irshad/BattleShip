let turnCount = document.getElementById("turn")
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
    if (this.#coords.some(([x, y]) => x === input[0] && y === input[1])) {
      usedCell.push(input);
      console.log(usedCell);
      return true;
    }
    return false;
  }

  validation(input) {
    if (usedCell.some(([x, y]) => x === input[0] && y === input[1])) {
      console.log("Already attacked!");
      
    }
    return this.match(input);
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

// Initialize Boards
let B1 = new Board();
let B2 = new Board();
let player = new Player();
let computer = new Computer();

// Create Ships
let ships = [
  new Ship(5, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]),
  new Ship(3, [[2, 1], [2, 2], [2, 3]]),
  new Ship(3, [[4, 4], [4, 5], [4, 6]]),
  new Ship(2, [[6, 7], [6, 8]]),
  new Ship(1, [[8, 9]])
];
let Computerships = [
  new Ship(5, [[2, 2], [3, 2], [4, 2], [5, 2], [6, 2]]),
  new Ship(3, [[3, 1], [3, 2], [3, 3]]),
  new Ship(3, [[3, 7], [4, 7], [5, 7]]),
  new Ship(2, [[3, 7], [3, 8]]),
  new Ship(1, [[9, 9]])
];



// Function to check if a coordinate hits any ship

function checking(input) {
  for (let ship of ships) {
    if (ship.validation(input)) {
      ship.hit();
      console.log("Hit confirmed!");
      return true;
    }
  }
  console.log("Miss!");
  return false;
}



// Create Grids in the DOM
let grid1 = document.getElementById("grid");
let grid2 = document.getElementById("grid2");

// Create Both Player and Computer Grids

function createGrid(gridElement)
{
  let fragment = document.createDocumentFragment();
  for(let i=0; i < 10; i++)
  {
    for(let j=0; j< 10; j++)
    {
      let cell = document.createElement("div");
      cell.className = "grid-child";
      cell.dataset.coord = JSON.stringify([i,j]);
      cell.addEventListener("click", ()=>handleCellClick([i,j],cell)) 
      fragment.appendChild(cell)
    }
  }
  gridElement.appendChild(fragment);
}
function createComputerGrid(gridElement)
{
  let fragment = document.createDocumentFragment();
  for(let i=0; i < 10; i++)
  {
    for(let j=0; j< 10; j++)
    {
      let cell = document.createElement("div");
      cell.className = "grid-child";
      cell.dataset.coord = JSON.stringify([i,j]);
      fragment.appendChild(cell)
    }
  }
  gridElement.appendChild(fragment);
}

function handleCellClick(coord,cell)
{
  if(player.turn === 1){
  if(checking(coord))
  {
    cell.style.background = "red";
  }
  else
  {
    cell.style.background = "grey";
  }
  player.turn = 0;
  computer.turn = 1;
  turnCount.innerText = "Computer's turn";
  // setTimeout(()=> {ComputerTurn()},1000)
  ComputerTurn()


}}

createGrid(grid1, B1);
createComputerGrid(grid2, B2);
console.log(grid2.children[1])

function Computerchecking(input) {
  for (let ship of Computerships) {
    if (ship.validation(input)) {
      ship.hit();
      console.log("Computer Hit!");
      return true;
    }
  }
  console.log("Computer Miss!");
  return false;
}

function handleComputerClick(coords)
{
  console.log(JSON.parse(grid2.children[coords].dataset.coord));
  
  if(Computerchecking(JSON.parse(grid2.children[coords].dataset.coord)))
  {
    grid2.children[coords].style.background = "red";
  }
  else
  {
    grid2.children[coords].style.background = "grey";
  }
}


function ComputerTurn()
{ 
  if(computer.turn === 1)
  {
    let random = Math.floor(Math.random()*99);
    handleComputerClick(random);
    player.turn = 1;
    computer.turn = 0;
    turnCount.innerText = "Your turn";
  }

}