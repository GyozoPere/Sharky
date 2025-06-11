class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = 0;
        this.y = 0;
    }
}