class StatusBar extends DrawableObject {
    height = 50;
    width = (this.height * (595/158));
    x = 120;
    y = 0;

    IMAGES_HEALTHS = [
        'img/4. Marcadores/green/Life/0_copia2.png',
        'img/4. Marcadores/green/Life/20_copia2.png',
        'img/4. Marcadores/green/Life/40_copia2.png',
        'img/4. Marcadores/green/Life/60_copia2.png',
        'img/4. Marcadores/green/Life/80_copia2.png',
        'img/4. Marcadores/green/Life/100_copia2.png'
    ];

    IMAGES_COINS = [
        'img/4. Marcadores/green/Coin/0_  copia 4.png',
        'img/4. Marcadores/green/Coin/20_  copia 4.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_  copia 4.png'
    ];

    IMAGES_PISONS = [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 2.png'
    ];
    
    percentage = 100;

    constructor () {
        super();
        this.loadImages(this.IMAGES_HEALTHS);
        
        this.setHealthBarPercentage(100);
    }

    setHealthBarPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTHS[this.resolveImageIndex()];
        this.img = this.imageChache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        }   else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}