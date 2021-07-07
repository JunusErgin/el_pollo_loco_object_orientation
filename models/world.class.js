class World {
    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    coins = level1.coins;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];
    clearRect =  new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0);

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        console.log(this);
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });

        this.checkCollisionsWihtCollectibles(this.coins);
        //this.checkCollisionsWihtCollectibles(this.bottles);
    }

    checkCollisionsWihtCollectibles(array){
        array.forEach((element, index)=>{
            if(this.character.isColliding(element)){
               array.splice(index, 1);
            }
        });
    }

    //Draw() wird immer wieder aufgerufen
    draw() {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.clearRect);
        this.addObjectsToMap(this.clouds);

        // this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        // this.ctx.translate(-this.camera_x, 0); //Back

        this.ctx.translate(this.camera_x, 0); //Forwards
       
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        // --------- Space for fixed Objects ---------
        this.addToMap(this.statusBar);
        // --------- Space for fixed Objects End ---------

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        if(mo instanceof BackgroundObject){
            this.ctx.translate(this.camera_x * mo.distance, 0);
        }
        
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo instanceof BackgroundObject){
            this.ctx.translate(-this.camera_x * mo.distance, 0);
        }

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}