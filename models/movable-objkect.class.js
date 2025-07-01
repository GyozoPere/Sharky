class MovableObject {
    x = 120;
    y = 250;
    speed = 0.05;
    img;
    imageChache = {};
    currentImage = 0;
    otherDirection = false;
    isAttackPlaying = false;

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof PufferFishGreen || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawCollisionBox(ctx) {
        if (this instanceof Character || this instanceof PufferFishGreen || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    isColliding(mo) {
        return ((this.x + this.width)-this.offset.right) > (mo.x + mo.offset.left) &&
            (this.y + this.height)-this.offset.bottom > (mo.y + mo.offset.top) &&
            (this.x + this.offset.left) < ((mo.x + mo.width)-mo.offset.right) &&
            (this.y + this.offset.top) < ((mo.y + mo.height)-mo.offset.bottom);
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }
    
    playAtackAnimation(images) {
        if (!this.isAttackPlaying) {
            this.isAttackPlaying = true;
            let i = 0;
            const interval = setInterval(() => {
                if (i < images.length) {
                    this.img = this.imageChache[images[i]];
                    i++;
                } else {
                    clearInterval(interval);
                    this.isAttackPlaying = false;
                }
            }, 1000 / 15);
        }
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