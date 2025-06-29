class Character extends MovableObject {
    height = 250;
    width = (this.height * (815/1000));
    x = 0;
    y = 50;
    speed = 5;
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];
    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png',
    ];
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    IMAGES_ATTACK = [
        'img/1.Sharkie/4.Attack/1.png',
        'img/1.Sharkie/4.Attack/2.png',
        'img/1.Sharkie/4.Attack/3.png',
        'img/1.Sharkie/4.Attack/4.png',
        'img/1.Sharkie/4.Attack/5.png',
        'img/1.Sharkie/4.Attack/6.png',
    ];

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (keyboard.LEFT || keyboard.RIGHT || keyboard.UP || keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 120);

        setInterval(() => {
            if (keyboard.RIGHT && this.x < world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            if (keyboard.UP && this.y > -100) {
                this.y -= this.speed;
            }
            if (keyboard.DOWN && this.y < 520 - this.height) {
                this.y += this.speed;
            }
            world.camera_x = -this.x + 100;
        }, 1000 / 120);
    }
}
