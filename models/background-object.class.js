class BackgroundObject extends MovableObject{

    width = 720;
    height = 400;
    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}