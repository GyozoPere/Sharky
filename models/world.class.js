class World {
    character = new Character();
    enemis = [
        new PufferFishGreen(),
        new PufferFishGreen(),
        new PufferFishGreen(),
        //new PufferFishOrange(),
        //new PufferFishRed(),
        //new JellyFishLila(),
        //new JellyFishYellow(),
        //new JellyFishGreen(),
        //new JellyFishPink(),
        //new FinalEnemy(),
    ];
    light = [
        new Light()
    ];
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png' , 0, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 0),
    ];
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
        
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.light);
        this.addObjectsToMap(this.enemis);
        this.addObjectsToMap([this.character]);

        this.ctx.translate(-this.camera_x, 0);

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