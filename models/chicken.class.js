class Chicken extends MovableObject{
    height = 55;
    width = 70;
    y = 360;
    constructor(){
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        
        this.x = 200 + Math.random() * 500; //Zahl zwieschen 200 und 700
    }
}