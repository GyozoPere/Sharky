class World {
    character = new Character();
    enemis = [
        new PufferFishGreen(),
        new PufferFishOrange(),
        new PufferFishRed(),
        new JellyFishLila(),
        new JellyFishYellow(),
        new JellyFishGreen(),
        new JellyFishPink(),
        new FinalEnemy(),
    ];

    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemis.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });
        requestAnimationFrame(() => this.draw());
    }
}