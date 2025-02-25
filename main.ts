let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`BEARY`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`creepy bear`,
    500,
    false
    )
})
