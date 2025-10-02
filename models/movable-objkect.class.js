class MovableObject extends DrawableObject {
    speed = 0.05;
    otherDirection = false;
    isAttackPlaying = false;
    deadAnimation = false;
    hurtCharacter = false;
    deadCharacter = false;




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

    hitCharacter(character, enemy) {
        if (!this.deadAnimation) {               
            if (character.health > 0) {
                character.health -= enemy.damage;
                this.playHurtAnimation(this.IMAGES_HURT);
            } else {
                character.health = 0;
                clearInterval(this.collisionInterval);
                this.playDeadAnimation(this.IMAGES_DEAD);
            }
        }        
    }
    
    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }

    playHurtAnimation(images) {
        if (!this.hurtCharacter) {
            this.hurtCharacter = true;
            let i = 0;
            const interval = setInterval(() => {
                if (i < images.length) {
                    this.img = this.imageChache[images[i]];
                    i++;
                }
            }, 1000 / 15);
            this.hurtCharacter = false;
        }
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

    playDeadAnimation(images) {
        if (!this.deadAnimation) {
            this.deadAnimation = true;
            let i = 0;
            const interval = setInterval(() => {
                if (i < images.length) {
                    this.img = this.imageChache[images[i]];
                    i++;
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