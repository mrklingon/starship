controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    missle = sprites.createProjectileFromSprite(assets.image`missle0`, vger, 0, -100)
})
let missle: Sprite = null
let vger: Sprite = null
effects.starField.startScreenEffect()
game.splash("USS Voyager", "Lost in the Delta Quadrant - needs to avoid the Kazon!")
scene.setBackgroundColor(15)
vger = sprites.create(assets.image`Voyager`, SpriteKind.Player)
let kzon = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
kzon.setPosition(34, 4)
kzon.setBounceOnWall(true)
controller.moveSprite(vger)
vger.setBounceOnWall(true)
forever(function () {
    kzon.x = vger.x
    pause(200)
    if (randint(0, 30) < 5) {
        missle = sprites.createProjectileFromSprite(assets.image`missle`, kzon, 0, vger.y)
    }
})
