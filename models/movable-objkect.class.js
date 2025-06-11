class MovableObject {
    x = 120;
    y = 250;
    speed = 0.01;
    img;
    imageChache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }

    moveRight() {
        setInterval(() => {
        this.x += this.speed;
        }, 1000 / 120);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 120);
        
    }
}