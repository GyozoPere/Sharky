class Light extends MovableObject{
    x = 0;
    y = 0;
    width = 720;
    height = 480;
    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/1.png');
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -=0.01
        }, 1000 / 120);
    }
}