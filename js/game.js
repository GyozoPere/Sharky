let Canvas;
let ctx;
let world = new World();

function init() {
    Canvas = document.getElementById('canvas');
    ctx = Canvas.getContext('2d');

    console.log('my Character is', world.character);
}