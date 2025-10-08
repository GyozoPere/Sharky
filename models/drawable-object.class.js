class DrawableObject {
    img;
    imageChache = {};
    currentImage = 0;
    x = 120;
    y = 250;

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
        if (this instanceof Character || this instanceof PufferFishGreen || this instanceof Endboss || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawCollisionBox(ctx) {
        if (this instanceof Character || this instanceof PufferFishGreen || this instanceof Endboss || this instanceof ThrowableObject) {
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


}