function makeGrids(){
    const gridContainer=document.querySelector('#grid-container')
    let gridSize=askGridSize()
    gridContainer.style['grid-template-columns']='repeat('+gridSize+',1fr)'
    const squareWidth=720/gridSize+'px'
    const squareHeight=720/gridSize+'px'
    for(let i=0; i<gridSize; i++){
        for(let k=0; k<gridSize; k++){
            let div=document.createElement('div')
            div.style.width=squareWidth
            div.style.height=squareHeight
            div.classList.add('squares')
            gridContainer.appendChild(div)
        }
    }
}
function changeColorModetoRainbow(){
    colorMode='rainbow'
}
function changeColorModetoBlack(){
    colorMode='b&w'
}
function askGridSize(){
    let gridSize = prompt('What size would you like your grid to be?')
    while (gridSize>100){
        gridSize=prompt('Grid size cannot be more than 100. Please enter a valid grid size.')
    }
    return gridSize
}
function cleanGrids(){
    for(let m=0;m<square.length;m++){
        square[m].style['background-color']='white'
    }
}
function changeColor(){
    if (colorMode=='rainbow'){
        this.style['background-color']=getRandomColor()
    }
    else if (colorMode='b&w'){
        this.style['background-color']='black'
    }
}
function getRandomColor(){
    let randomColor='#'
    const letters='0123456789ABCDEF'
    for (let n=0;n<6;n++){
        randomColor+=letters[Math.ceil(Math.random()*15)]
    }
    return randomColor
}
makeGrids()
const cleanButton = document.querySelector('#clean-button')
const square = document.querySelectorAll('.squares')
const rainbowButton=document.querySelector('#rainbow-button')
const bwButton=document.querySelector('#bw-button')
cleanButton.addEventListener('click', cleanGrids)
let colorMode='b&w'
rainbowButton.addEventListener('click',changeColorModetoRainbow)
bwButton.addEventListener('click',changeColorModetoBlack)
for(let i=0;i<square.length;i++){
    square[i].addEventListener('mouseover',changeColor)
}