let Canvas;
let Width = 720;
let Height = 480;
let world;

function init() {
    Canvas = document.getElementById('canvas');
    Canvas.width = Width;
    Canvas.height = Height;
    world = new World(Canvas);

    console.log('my Character is', world.character);
    console.log('enemies', world.enemis);
}