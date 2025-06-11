let canvas;
let cWidth = 720;
let cHeight = 480;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = cWidth;
    canvas.height = cHeight;
    world = new World(canvas);

    console.log('my Character is', world.character);
    console.log('enemies', world.enemis);
}

window.addEventListener("keypressf", (event) => {
    console.log(event);
});