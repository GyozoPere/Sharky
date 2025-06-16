class Light extends MovableObject{
    x = 0;
    y = 0;
    width = 1440;
    height = 480;
    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/COMPLETO.png');
        this.moveLeft();
    }
}