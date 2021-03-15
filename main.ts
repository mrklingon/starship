effects.starField.startScreenEffect()
scene.setBackgroundColor(15)
let vger = sprites.create(assets.image`Voyager`, SpriteKind.Player)
let kzon = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
kzon.setPosition(34, 4)
kzon.setBounceOnWall(true)
controller.moveSprite(vger)
vger.setBounceOnWall(true)
let missle = sprites.createProjectileFromSprite(assets.image`missle`, kzon, 50, 50)
forever(function () {
    kzon.x = vger.x
    pause(200)
    if (randint(0, 30) < 5) {
        missle = sprites.createProjectileFromSprite(assets.image`missle`, kzon, vger.x, vger.y)
    }
})
