let Canvas;
let ctx;
let character = new MovableObject();

function init() {
    Canvas = document.getElementById('canvas');
    ctx = Canvas.getContext('2d');

    console.log('my Character is', character);
}