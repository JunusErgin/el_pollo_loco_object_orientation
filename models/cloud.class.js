class Cloud extends MovableObject{
   y = 50;
   width = 500;
   height = 250;

    constructor(width, height){
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.width = width;
        this.height = height;
        this.x = Math.random() * 500; //Zahl zwieschen 0 und 500
        this.animate();
    }

    animate(){
        this.moveLeft();
    }
}