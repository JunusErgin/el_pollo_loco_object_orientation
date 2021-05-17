class Cloud extends MovableObject{
   y = 50;
   width = 500;
   height = 250;

    constructor(){
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.speed = 0.1;
        this.x = Math.random() * 500; //Zahl zwieschen 0 und 500
        this.animate();
    }

    animate(){
        setInterval(()=>{
            this.x -= this.speed;
        }, 1000/60);
    }
}