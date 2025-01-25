
function addBox(){
    const sketchFrame= document.createElement('div',);
    sketchFrame.setAttribute('class', 'sketchFrame box');
    const sketchBox= document.querySelector('#SketchContent');
    sketchBox.appendChild(sketchFrame);
    console.log('?')
}



function makeMatrix(columns, rows){
    for(let i=0; i<rows; i++){
        for(let c=0; c<columns; c++){
            addBox();
        }
    }
}

makeMatrix(16,16)

