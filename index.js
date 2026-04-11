// whole start screen logic

const canvas = document.querySelector("#canvas1")
const ctx = canvas.getContext("2d");

const documentWidth = window.innerWidth
const documentHeight = window.innerHeight

canvas.width = documentWidth
canvas.height = documentHeight

ctx.fillStyle = "black"
paintScreenBlack()


document.addEventListener("mousemove", (e) => {
    CreatehoverEffect(e.x)
})

document.addEventListener("touchmove", (e) => {
    CreatehoverEffect(e.touches[0].clientX)
})

function CreatehoverEffect(xCord) {
    paintScreenBlack()
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillRect(xCord, 0, 400, documentHeight)
    ctx.fill()
    ctx.globalCompositeOperation = "source-over";
}

function paintScreenBlack() {
    ctx.fillRect(0, 0, documentWidth, documentHeight);
}


// --------------------------------------------------------------------------------------














document.querySelector("#sketch").addEventListener("click", () => {
    changeDisplay(false)
    createGrid(16)
})

document.querySelector("#back").addEventListener("click", () => {
    changeDisplay(true)
})


function changeDisplay(showMain) {
    const mainDiv = document.querySelector(".main")
    const sketchContainer = document.querySelector(".sketchContainer")

    if (showMain) {
        mainDiv.classList.remove("none")
        sketchContainer.classList.add("none")
    }
    else {
        mainDiv.classList.add("none")
        sketchContainer.classList.remove("none")
    }
}






function createGrid(size) {
    const gridSize = size

    const grid = document.querySelector(".grid")
    grid.innerHTML = ""

    const gridElement = document.createElement("div")

    let width = (documentWidth * 0.8) / size
    width = `${width}px`


    gridElement.style.width = width
    gridElement.style.height = width

    gridElement.classList.add("gridElement")

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (j == 0 && i == 0) {
                grid.appendChild(gridElement)
            }
            else {
                grid.appendChild(gridElement.cloneNode())
            }
        }
    }
}






document.querySelector(".grid").addEventListener("mouseover", (e) => {
    const elementWhichWasBeenHovered = e.target
    sketch(elementWhichWasBeenHovered)
})

document.querySelector(".grid").addEventListener("touchmove",(e)=>{
    const elementWhichWasBeenHovered = e.target
    sketch(elementWhichWasBeenHovered)
})




// logic to add random color to gridElement with fadding effect
function sketch(elementWhichWasBeenHovered) {
    let alphaValue = 0.1; // intizal alpha value


    // get background style if any which was been applied by this function..  so we can get opacity value from it 
    const backgroundColorAlreadyBeenApplied = elementWhichWasBeenHovered.style["backgroundColor"]

    // checking if background color was been applied
    if (backgroundColorAlreadyBeenApplied) {
        let temp = backgroundColorAlreadyBeenApplied.split(", ")[3]

        // rgba is converted to rgb when alpha value is 1. so if color has reached alpha value of 1..
        // then there will be no alpha value so we just setting it to 1 otherwise we are adding 0.1 to it
        alphaValue = temp != undefined ? +(temp.replace(")", "")) + 0.1 : 1
    }


    const backgroundColor = `rgba(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${alphaValue})`
    elementWhichWasBeenHovered.style["backgroundColor"] = backgroundColor
}






// logic to change grid size via popup
document.querySelector("#changeGrid").addEventListener("click", () => {
    const gridSize = prompt("Enter New Grid Size ")

    if (!isNaN(gridSize) && gridSize > 0) {
        if (gridSize > 100) {
            alert("Can't create that large grid")
        }
        else {
            createGrid(gridSize)
        }

    }
})