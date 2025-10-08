class ThrowableObject extends MovableObject {

    constructor() {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'); 
        this.x = 100;
        this.y = 100;
        this.offset = {
            top: 3,
            bottom: 3,
            left: 3,
            right: 3
        }
        this.height = 50;
        this.width = (this.height * (204/202));
        this.throw(100,175)
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

    
}