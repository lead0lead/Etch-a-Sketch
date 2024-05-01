const gridContainer = document.querySelector(".grid-container");
const changeResolutionBtn = document.querySelector(".changeResolutionBtn");

function createGrid(resolutionX, resolutionY){
    for (let i = 0; i < resolutionY; i++){
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < resolutionX; j++){
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridRow.appendChild(gridCell)
            gridCell.addEventListener("mouseover", function(hover) {
                hover.target.classList.add("grid-cell-hover");
            })
        }
        gridContainer.appendChild(gridRow);
        
    }
}

createGrid(64,64);

changeResolutionBtn.addEventListener("click", () => {
    let resolution = Number(prompt("Enter Resolution"));

    if (resolution < 128){
    if (typeof(resolution) === "number"){
        while (gridContainer.firstChild){
            gridContainer.firstChild.remove();
        }
        createGrid(resolution, resolution);
        console.log(typeof(resolution));
    }
    else{
        alert("Please enter a number")
    }
    }
    else{
        alert("Max Resolution is 128")
    }
})