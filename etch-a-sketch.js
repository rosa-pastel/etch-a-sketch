function makeGrids(){
  let gridSize=10
  let squareWidth=0
  let squareHeight=0
  let div
  let gridContainer=document.querySelector('#grid-container')
  gridSize=askGridSize()
    gridContainer.style['grid-template-columns']='repeat('+gridSize+',1fr)'
    squareWidth=720/gridSize+'px'
    squareHeight=720/gridSize+'px'
    for(i=0; i<gridSize; i++){
        for(k=0; k<gridSize; k++){
            div=document.createElement('div')
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
    gridSize=prompt('Please enter a grid size between 1 and 100.')
    while (gridSize>100){
      alert('Grid size cannot be more than 100. Please enter a valid grid size.')
      gridSize=askGridSize()
    }
    while (isNaN(gridSize)){
      alert('Grid size should be a number. Please enter a valid grid size.')
      gridSize=askGridSize()
    }
    return gridSize
}
function cleanGrids(){
    for(m=0;m<square.length;m++){
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
    for (n=0;n<6;n++){
        randomColor+=letters[Math.ceil(Math.random()*15)]
    }
    return randomColor
}
let m,n,i,k
makeGrids()
const cleanButton = document.querySelector('#clean-button')
let square = document.querySelectorAll('.squares')
const rainbowButton=document.querySelector('#rainbow-button')
const bwButton=document.querySelector('#bw-button')
cleanButton.addEventListener('click', cleanGrids)
let colorMode='b&w'
rainbowButton.addEventListener('click',changeColorModetoRainbow)
bwButton.addEventListener('click',changeColorModetoBlack)
const changeSizeButton=document.querySelector('#change-size-button')
changeSizeButton.addEventListener('click',()=>{
  gridContainer=document.querySelector('#grid-container')
  square = document.getElementsByClassName('squares')
  while (gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.lastChild)
  }
  makeGrids()
  for(let i=0;i<square.length;i++){
    square[i].addEventListener('mouseover',changeColor)
  }
})
for(let i=0;i<square.length;i++){
  square[i].addEventListener('mouseover',changeColor)
}