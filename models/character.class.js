class Character extends MovableObject{

    height = 250;
    y = 180;
    constructor(){
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages([
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
        ]);
    }

    jump(){
        
    }
}