function makeGrids(){
    const gridContainer=document.querySelector('#grid-container')
    let gridSize=askGridSize()
    if (gridSize=="" || gridSize==null) gridSize=10
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
    let playMode='hover'
    changePlayMode(playMode)
    const clickModeButton=document.querySelector('#click-mode')
    const hoverModeButton=document.querySelector('#hover-mode')
    clickModeButton.addEventListener('click',()=>{
      playMode='click'
      changePlayMode(playMode)
    })
    hoverModeButton.addEventListener('click',()=>{
      playMode='hover'
      changePlayMode(playMode)
    })
    const cleanButton = document.querySelector('#clean-button')
    cleanButton.addEventListener('click', cleanGrids)

    const rainbowButton=document.querySelector('#rainbow-button')
    rainbowButton.addEventListener('click',()=>{colorMode='rainbow'})

    const bwButton=document.querySelector('#bw-button')
    bwButton.addEventListener('click',()=>{colorMode='b&w'})

    const eraserButton=document.querySelector('#eraser-button')
    eraserButton.addEventListener('click',()=>{colorMode='white'})

    const changeSizeButton=document.querySelector('#change-size-button')
    changeSizeButton.addEventListener('click',()=>{
        while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild)
      }
      makeGrids()
    })
}
function changePlayMode(playMode){
  const squares = document.getElementsByClassName('squares')
  if (playMode=='click'){
  for(let i=0;i<squares.length;i++){
    squares[i].removeEventListener('mouseover',changeColor)
    squares[i].addEventListener('mousedown',()=>{
      for(let k=0;k<squares.length;k++){
        squares[k].addEventListener('mouseover',changeColor)
      }
    })   
    squares[i].addEventListener('mouseup',()=>{
      for(let k=0;k<squares.length;k++){
        squares[k].removeEventListener('mouseover',changeColor)
      }
    })
  }
  }
  else{
  for(let i=0;i<squares.length;i++){
    squares[i].removeEventListener('mousedown',changeColor)
    squares[i].addEventListener('mouseover',changeColor)
  }
  }
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
    for(let i=0;i<squares.length;i++){
        squares[i].style['background-color']='white'
    }
}
function changeColor(){
    if (colorMode=='rainbow'){
        this.style['background-color']=getRandomColor()
    }
    else if (colorMode=='b&w'){
        this.style['background-color']='black'
    }
    else if (colorMode=='white'){
      this.style['background-color']='white'
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
let colorMode='b&w'
makeGrids()