class PufferFishGreen extends MovableObject{
    
    height = 50;
    width = (this.height * (241/198));
    
    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 200 + Math.random() * 500;
    }
}

class PufferFishOrange extends MovableObject{
    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
    }
}

class PufferFishRed extends MovableObject{
    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
    }
}

class JellyFishLila extends MovableObject{
    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
    }
}

class JellyFishYellow extends MovableObject{
    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
    }
}

class JellyFishGreen extends MovableObject{
    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
    }
}

class JellyFishPink extends MovableObject{
    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
    }
}

class FinalEnemy extends MovableObject{
    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
    }
}
