


function addColumns(row){
    const sketchFrame= document.createElement('div',);
    sketchFrame.setAttribute('class', 'sketchColumn boxShadow');
    
    row.appendChild(sketchFrame);

}

function addRows(columns){
    const sketchFrame= document.createElement('div',);
    sketchFrame.setAttribute('class', 'sketchRow');
    const sketchBox= document.querySelector('#SketchContent');
    for(let i=0; i<columns; i++){
        addColumns(sketchFrame)
    }
    
    sketchBox.appendChild(sketchFrame);



}

function makeMatrix( rows, columns){
    for(let i=0; i<rows; i++){
        addRows(columns);
    }
}
const drawbox=document.querySelector('#SketchContent');



makeMatrix(100,100)

let color='blue'

drawbox.addEventListener('mouseover', function(e){
    switch(e.target.className){
        case 'sketchColumn boxShadow':
            e.target.style.background=color;

            let currOpacity= parseFloat(e.target.style.opacity) || 0;
            let newOpacity= Math.min(currOpacity+0.1, 1)
            e.target.style.opacity=newOpacity;
            




    }
})