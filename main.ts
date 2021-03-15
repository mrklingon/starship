let star = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 . 1 . 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(15)
star.setPosition(72, 8)
let vger = sprites.create(assets.image`Voyager`, SpriteKind.Player)
controller.moveSprite(vger)
star.startEffect(effects.blizzard, 500)
forever(function () {
	
})
