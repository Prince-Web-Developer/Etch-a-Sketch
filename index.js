const canvas = document.querySelector("#canvas1")
const ctx = canvas.getContext("2d");

const documentWidth = screen.width
const documentHeight = screen.height

canvas.width = documentWidth
canvas.height = documentHeight

ctx.fillStyle = "black"
paintScreenBlack()


document.addEventListener("mousemove",(e)=>{
    paintScreenBlack()
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillRect(e.x,0,400,documentHeight)
    ctx.fill()
    ctx.globalCompositeOperation = "source-over";
})

function paintScreenBlack(){
    ctx.fillRect(0, 0, documentWidth, documentHeight);
}

