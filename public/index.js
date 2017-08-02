document.onmousemove = mouseMoved;

var socket;

setup();

function setup(){
    socket = io.connect('http://localhost:3000');

    socket.on('mouseCoords', newDrawing);
}

function newDrawing(data){
    console.log(data);
}

function mouseMoved(event){
    setTimeout(console.log(event.pageX, event.pageY));

    var mouseMoveObject = {
        x: event.pageX,
        y: event.pageY
    }

    socket.emit('mouseCoords', mouseMoveObject);
}


function draw(){
    background(51);
    ellipse(mouseX, mouseY, 60, 60);
}



