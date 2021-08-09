class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;
    constructor(imagePath, x, distance = 1) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;
        this.distance = distance;
    }
}