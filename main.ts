controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Vmiss = sprites.createProjectileFromSprite(assets.image`missle0`, vger, 0, -100)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == missle) {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == kzon) {
        info.changeScoreBy(1)
    }
})
let missle: Sprite = null
let Vmiss: Sprite = null
let kzon: Sprite = null
let vger: Sprite = null
effects.starField.startScreenEffect()
game.splash("USS Voyager", "Lost in the Delta Quadrant - needs to avoid the Kazon!")
scene.setBackgroundColor(15)
vger = sprites.create(assets.image`Voyager`, SpriteKind.Player)
kzon = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
kzon.setPosition(34, 4)
kzon.setBounceOnWall(true)
controller.moveSprite(vger)
vger.setBounceOnWall(true)
info.setLife(5)
forever(function () {
    kzon.x = vger.x
    pause(200)
    if (randint(0, 30) < 5) {
        missle = sprites.createProjectileFromSprite(assets.image`missle`, kzon, 0, vger.y)
    }
})
