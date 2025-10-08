class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObject = [];
    throw = false;
    cooldown = 500;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.swim();
    }

    setWorld() {
        this.character.world = this;
    }

    swim() {
        this.collisionInterval = setInterval(() => {
            this.checkCollisions();
            this.throwBubble();
        }, 200);
    }

    checkCollisions() {
        this.level.enemis.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hitCharacter(this.character, enemy);
                }
                this.statusBar.setHealthBarPercentage(this.character.health / this.character.startHealth * 100);
            });
    }

    throwBubble() {
        if(this.keyboard.D && !this.canThrow){
            this.throw = true;
            setTimeout(() => {
                let bubble = new ThrowableObject(this.character.x + 180, this.character.y + this.character.height / 2);
                this.throwableObject.push(bubble);
            }, 500);
        }
        setTimeout(() => {
            this.canThrow = false;
        }, this.cooldown);
    }
        
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemis);
        this.addObjectsToMap([this.character]);
        this.addObjectsToMap(this.throwableObject);
        this.ctx.translate(-this.camera_x, 0);

        this.addObjectsToMap(this.level.light);
        this.addToMap(this.statusBar);

        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objects) {
        objects.forEach(mo => {
            this.addToMap(mo);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
                this.flipImage(mo);
            }
            mo.draw(this.ctx);
            mo.drawFrame(this.ctx);
            mo.drawCollisionBox(this.ctx);
            if (mo.otherDirection) {
                 this.flipImageBack(mo);
            }
    }
    
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


}