namespace SpriteKind {
    export const kmss = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (quantum <= 0) {
        Vmiss = sprites.createProjectileFromSprite(assets.image`missle1`, vger, 0, -301)
        Vmiss.setFlag(SpriteFlag.AutoDestroy, true)
        music.baDing.play()
        quantum = 20
    }
})
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
        music.knock.play()
        scene.cameraShake(4, 500)
        info.changeScoreBy(1)
    }
})
let Kmiss: Sprite = null
let Vmiss: Sprite = null
let kzon: Sprite = null
let vger: Sprite = null
let quantum = 0
effects.starField.startScreenEffect()
game.splash("USS Voyager", "Lost in the Delta Quadrant - needs to avoid the Kazon!")
scene.setBackgroundColor(15)
quantum = 0
vger = sprites.create(assets.image`Voyager`, SpriteKind.Player)
kzon = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
kzon.setPosition(34, 4)
kzon.setBounceOnWall(true)
controller.moveSprite(vger)
vger.setBounceOnWall(true)
info.setLife(5)
game.onUpdate(function () {
    kzon.x = vger.x
})
game.onUpdateInterval(200, function () {
    if (randint(0, 30) < 5) {
        Kmiss = sprites.create(assets.image`missle`, SpriteKind.kmss)
        Kmiss.setVelocity(0, 120)
        Kmiss.setPosition(kzon.x, kzon.y)
        Kmiss.setFlag(SpriteFlag.AutoDestroy, true)
    }
    quantum += -1
})
