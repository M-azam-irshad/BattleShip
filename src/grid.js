let grid = document.getElementById("grid");
let grid2 = document.getElementById("grid2");
let fragment = document.createDocumentFragment();
let fragment2 = document.createDocumentFragment();
for (let i = 0; i < 100; i++) 
    {
        let child = document.createElement("div"); 
        child.className = "grid-child";
        // child.textContent = `child ${i + 1}`
        fragment.appendChild(child)
    }
    grid.appendChild(fragment);
for (let i = 0; i < 100; i++) 
    {
        let child = document.createElement("div"); 
        child.className = "grid-child";
        // child.textContent = `child ${i + 1}`
        fragment2.appendChild(child)
    }
    grid2.appendChild(fragment2);
    
