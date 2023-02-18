controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`HighKick`,
        100,
        false
        )
        mySprite.setPosition(mySprite.x + 3, mySprite.y)
    } else if (controller.down.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`AxeKick`,
        100,
        false
        )
        mySprite.setPosition(mySprite.x + 3, mySprite.y)
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`LowKick`,
        80,
        false
        )
        mySprite.setPosition(mySprite.x + 5, mySprite.y)
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`BlueNeutral`,
    150,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`BlueNeutral`,
    150,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundImage(assets.image`InfinityTKD`)
music.play(music.createSong(assets.song`ImagineDragon1`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`AthleteBlue`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 3))
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
assets.animation`BlueNeutral`,
150,
true
)
controller.moveSprite(mySprite, 50, 0)
let myEnemy = sprites.create(assets.image`Godzillow`, SpriteKind.Enemy)
tiles.placeOnTile(myEnemy, tiles.getTileLocation(4, 2))
animation.runImageAnimation(
myEnemy,
assets.animation`Godzilowanime`,
400,
true
)
