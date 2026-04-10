const canvas = document.querySelector("#canvas1")
const ctx = canvas.getContext("2d");

const documentWidth = window.innerWidth
const documentHeight = window.innerHeight

canvas.width = documentWidth
canvas.height = documentHeight

ctx.fillStyle = "black"
paintScreenBlack()


document.addEventListener("mousemove",(e)=>{
    CreatehoverEffect(e.x)
})

document.addEventListener("touchmove",(e)=>{
    CreatehoverEffect(e.touches[0].clientX)
})

function CreatehoverEffect(xCord){
    paintScreenBlack()
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillRect(xCord,0,400,documentHeight)
    ctx.fill()
    ctx.globalCompositeOperation = "source-over";
}

function paintScreenBlack(){
    ctx.fillRect(0, 0, documentWidth, documentHeight);
}


document.querySelector("#sketch").addEventListener("click",()=>{
    const mainDiv = document.querySelector(".main")
    const sketchContainer = document.querySelector(".sketchContainer")
    if (!mainDiv.classList.contains("none")){
        mainDiv.classList.add("none")
    }
    if(sketchContainer.classList.contains("none")){
        sketchContainer.classList.remove("none")
        createGrid(sketchContainer,16)
    }

})



function createGrid(sketchContainer,size){
    const gridSize = size

    const grid = sketchContainer.querySelector(".grid")

    const gridElement = document.createElement("div")
    
    let width = (documentWidth * 0.8)/size
    width = `${width}px`


    gridElement.style.width = width
    gridElement.style.height = width

    gridElement.classList.add("gridElement")

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (j == 0 && i == 0){
                grid.appendChild(gridElement)
            }
            else{
                grid.appendChild(gridElement.cloneNode())
            }
        }
    }
    
}


