class Coin extends MovableObject {
    width = 100;
    height = 100;
    IMAGES = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];
    constructor(x, y) {
        console.log(y);
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }
}