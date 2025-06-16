class MovableObject {
    x = 120;
    y = 250;
    speed = 0.05;
    img;
    imageChache = {};
    currentImage = 0;
    otherDirection = false;

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

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;
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

    moveUp() {
        setInterval(() => {
            this.y -= this.speed;
        }, 1000 / 120);
    }

    moveDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 120);
    }
}