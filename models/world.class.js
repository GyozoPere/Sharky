class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    camera_x = 0;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemis);
        this.addObjectsToMap([this.character]);

        this.ctx.translate(-this.camera_x, 0);

        this.addObjectsToMap(this.level.light);

        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objects) {
        objects.forEach(mo => {
            if (mo.otherDirection) {
                this.ctx.save();
                this.ctx.translate(mo.width, 0);
                this.ctx.scale(-1, 1);
                mo.x = mo.x * -1;
            } 
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
            if (mo.otherDirection) {
                mo.x = mo.x * -1;
                this.ctx.restore(); 
            }
        });
    }    
}