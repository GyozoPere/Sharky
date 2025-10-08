class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'); 
        this.x = x;
        this.y = y;
        this.offset = {
            top: 3,
            bottom: 3,
            left: 3,
            right: 3
        }
        this.height = 50;
        this.width = (this.height * (204/202));
        this.throw();
    }

    throw() {
        setInterval(() => {
            this.x += 10;
        }, 50);
    }

    
}