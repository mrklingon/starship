namespace SpriteKind {
    export const kmss = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Vmiss = sprites.createProjectileFromSprite(assets.image`missle0`, vger, 0, -100)
    Vmiss.setFlag(SpriteFlag.AutoDestroy, true)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.kmss, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
    music.knock.play()
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == kzon) {
        info.changeScoreBy(1)
    }
})
let Kmiss: Sprite = null
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
        Kmiss = sprites.create(assets.image`missle`, SpriteKind.kmss)
        Kmiss.setVelocity(0, 120)
        Kmiss.setPosition(kzon.x, kzon.y)
        Kmiss.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
