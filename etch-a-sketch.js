function makeGrids(){
    const gridContainer=document.querySelector('#grid-container')
    let gridSize=askGridSize()
    if (gridSize=="") gridSize=10
    gridContainer.style['grid-template-columns']='repeat('+gridSize+',1fr)'
    let squareWidth=720/gridSize+'px'
    let squareHeight=720/gridSize+'px'
    let div
    for(let i=0; i<gridSize; i++){
        for(let k=0; k<gridSize; k++){
            div=document.createElement('div')
            div.style.width=squareWidth
            div.style.height=squareHeight
            div.classList.add('squares')
            gridContainer.appendChild(div)
        }
    }
    changeColorModetoBlack()
}
function changeColorModetoRainbow(){
    colorMode='rainbow'
}
function changeColorModetoBlack(){
    colorMode='b&w'
}
function askGridSize(){
    gridSize=prompt('Please enter a grid size between 1 and 100.')
    if (gridSize>100){
      alert('Grid size must be between 0 and 100. Please enter a valid grid size.')
      gridSize=askGridSize()
    }
    else if (isNaN(gridSize)){
      alert('Grid size should be a number. Please enter a valid grid size.')
      gridSize=askGridSize()
    }
    return gridSize
}
function cleanGrids(){
    const squares = document.getElementsByClassName('squares')
    for(let i=0;i<square.length;i++){
        squares[i].style['background-color']='white'
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
    for (let i=0;i<6;i++){
        randomColor+=letters[Math.ceil(Math.random()*15)]
    }
    return randomColor
}
makeGrids()
const cleanButton = document.querySelector('#clean-button')
const rainbowButton=document.querySelector('#rainbow-button')
const bwButton=document.querySelector('#bw-button')
const changeSizeButton=document.querySelector('#change-size-button')

cleanButton.addEventListener('click', cleanGrids)
rainbowButton.addEventListener('click',changeColorModetoRainbow)
bwButton.addEventListener('click',changeColorModetoBlack)
changeSizeButton.addEventListener('click',()=>{
  const gridContainer=document.querySelector('#grid-container')
  const squares = document.getElementsByClassName('squares')
  while (gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.lastChild)
  }
  makeGrids()
  for(let i=0;i<squares.length;i++){
    squares[i].addEventListener('mouseover',changeColor)
  }
})
for(let i=0;i<square.length;i++){
  squares[i].addEventListener('mouseover',changeColor)
}