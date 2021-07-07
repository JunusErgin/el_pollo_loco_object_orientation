const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new EndBoss()
    ],

    [
        new Cloud(300, 200),
        new Cloud(800, 400)
    ],

    [

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719, 0.7),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0.7),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719, 0.7),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2, 0.7),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3, 0.5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3, 0.7),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),
    ],

    getLevelCoins()

);

function getCoinsCollection(firstX, firstY) {
    return [
        new Coin(firstX + 0 * 100, firstY - 0 * 50),
        new Coin(firstX + 1 * 100, firstY - 1 * 50),
        new Coin(firstX + 2 * 100, firstY - 2 * 50),
        new Coin(firstX + 3 * 100, firstY - 1 * 50),
        new Coin(firstX + 4 * 100, firstY - 0 * 50)
    ];
}

function getLevelCoins(){
    let collection1 = getCoinsCollection(100, 300);
    let collection2 = getCoinsCollection(400, 300);
    let collection3 = getCoinsCollection(600, 300);
    let collection4 = getCoinsCollection(1000, 300);

    return collection1.concat(collection2, collection3, collection4);
}