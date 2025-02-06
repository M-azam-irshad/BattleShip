class Ship
{
    #length = 0;
    
    constructor(size)
    {
        this.#length = size;
    }
    
    hit(params)
    {
        // Method implementation
    }
    
    sunk(e)
    {
        // Method implementation
    }
}

class Player
{
    turn = 0;
}

class Computer
{
    turn = 0;
}

class Board
{
     array = new Array(10).fill().map(  ()=>
    {
        Array(10).fill("Array")
    })
}