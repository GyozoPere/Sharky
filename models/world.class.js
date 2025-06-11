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

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.light);
        this.addObjectsToMap(this.enemis);
        this.addObjectsToMap([this.character]);

        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        });
    }
}