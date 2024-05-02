const gridContainer = document.querySelector(".grid-container");
const changeResolutionBtn = document.querySelector(".changeResolutionBtn");

function getRandomRGBColor(){
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);

    return `rgb(${redValue},${greenValue}, ${blueValue})`;

}

function createGrid(resolutionX, resolutionY){
    for (let i = 0; i < resolutionY; i++){
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < resolutionX; j++){
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridRow.appendChild(gridCell)
            gridCell.addEventListener("mouseover", function(hover) {
                hover.target.style.backgroundColor = getRandomRGBColor();
            })
        }
        gridContainer.appendChild(gridRow);
        
    }
}

createGrid(64,64);

changeResolutionBtn.addEventListener("click", () => {
    let resolution = Number(prompt("Enter Resolution"));

    if (!isNaN(resolution)){
        if (resolution <= 128){
            while (gridContainer.firstChild){
                gridContainer.firstChild.remove();
            }
            createGrid(resolution, resolution);
            console.log(typeof(resolution));
        }
        else{
            alert("Error: Max Resolution is 128")
        }
    }
    else{
        alert("Error: Resolution has to be a Number.")
    }
})