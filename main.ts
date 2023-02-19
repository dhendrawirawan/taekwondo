namespace SpriteKind {
    export const EnemyWeakspot = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`HighKick`,
    100,
    false
    )
    Projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 25, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`HighKick`,
        100,
        false
        )
        mySprite.setPosition(mySprite.x + 3, mySprite.y)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, -25)
    } else if (controller.down.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`AxeKick`,
        100,
        false
        )
        mySprite.setPosition(mySprite.x + 3, mySprite.y)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 25)
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`LowKick`,
        80,
        false
        )
        mySprite.setPosition(mySprite.x + 5, mySprite.y)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.EnemyWeakspot, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    CountWeakSpot += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.x += 3
    sprites.destroy(sprite, effects.halo, 100)
    if (CountWeakSpot == 0) {
        statusbar.value += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    while (sprite.overlapsWith(otherSprite)) {
        otherSprite.x += 0.3
        sprite.x += -0.1
    }
    statusbar2.value += -1
})
let projectile: Sprite = null
let Projectile2: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let CountWeakSpot = 0
let myEnemy: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundImage(assets.image`InfinityTKD`)
game.splash("Don't touch the enemy. Use the projectile from your three different kicks to hit all three of enemy's weak spots (the fire horn, crystal ball, and tri-fork tail) then you can damage the enemy.", "")
music.play(music.createSong(assets.song`ImagineDragon1`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`AthleteBlue`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 3))
mySprite.z = 1
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
assets.animation`BlueNeutral`,
150,
true
)
controller.moveSprite(mySprite, 30, 0)
myEnemy = sprites.create(assets.image`Godzillow`, SpriteKind.Enemy)
tiles.placeOnTile(myEnemy, tiles.getTileLocation(5, 3))
myEnemy.setStayInScreen(true)
myEnemy.setScale(0.8, ScaleAnchor.Middle)
animation.runImageAnimation(
myEnemy,
assets.animation`Godzilowanime`,
400,
true
)
let WeakSpotTop = sprites.create(img`
    4 . . . . . . . . . . . 
    4 4 4 4 . . . . . . . . 
    4 4 2 4 4 . . . . . . . 
    . 4 2 2 4 4 . . . . . . 
    . 4 2 2 2 4 4 . . . . . 
    . . 4 2 2 2 2 4 4 . . . 
    . . 4 4 2 2 2 4 4 4 . . 
    . . . 4 2 4 4 4 4 4 4 . 
    . . . 4 4 4 4 4 4 4 4 2 
    . . . . 4 4 4 4 4 4 4 4 
    . . . . 4 4 4 4 4 4 4 . 
    . . . . . 4 4 4 2 . . . 
    `, SpriteKind.EnemyWeakspot)
let WeakspotMiddle = sprites.create(img`
    . . . 9 9 9 9 9 9 . . . 
    . . 9 9 9 8 9 9 9 9 . . 
    . 9 9 8 8 8 9 9 9 9 9 . 
    9 9 8 8 8 6 9 9 9 9 9 9 
    9 8 8 6 6 9 9 9 9 9 9 9 
    9 6 6 6 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 
    . 9 9 9 9 9 9 9 9 9 9 . 
    . . 9 9 9 9 9 9 9 9 . . 
    . . . 9 9 9 9 9 9 . . . 
    `, SpriteKind.EnemyWeakspot)
let WeakSpotBottom = sprites.create(img`
    . . . . . . . e . . . . . . . 
    . . . . . . e e e . . . . . . 
    . . . . . . e e e . . . . . . 
    . . . . . . e e e . . . . . . 
    e . . . . e e b e e . . . . e 
    e e . . . e c b e e . . . e e 
    . e e . e e c e b e e . e e . 
    . e e e e e c e b e e e e e . 
    . . e e e c c e b e e e e . . 
    . . e e e c c e b b e e e . . 
    . . . e e c e e b b e e . . . 
    . . . . . c e e e b . . . . . 
    `, SpriteKind.EnemyWeakspot)
CountWeakSpot = 3
statusbar = statusbars.create(4, 20, StatusBarKind.Health)
statusbar.attachToSprite(myEnemy, -10, -5)
statusbar.positionDirection(CollisionDirection.Right)
statusbar.value = 100
statusbar2 = statusbars.create(4, 20, StatusBarKind.Health)
statusbar2.attachToSprite(mySprite, -10, 0)
statusbar2.value = 100
game.onUpdate(function () {
    if (statusbar2.value == 0) {
        game.gameOver(false)
    }
    if (statusbar.value == 0 && CountWeakSpot == 0) {
        game.gameOver(true)
    }
})
game.onUpdateInterval(5000, function () {
    if (CountWeakSpot == 0) {
        WeakSpotTop = sprites.create(img`
            4 . . . . . . . . . . . 
            4 4 4 4 . . . . . . . . 
            4 4 2 4 4 . . . . . . . 
            . 4 2 2 4 4 . . . . . . 
            . 4 2 2 2 4 4 . . . . . 
            . . 4 2 2 2 2 4 4 . . . 
            . . 4 4 2 2 2 4 4 4 . . 
            . . . 4 2 4 4 4 4 4 4 . 
            . . . 4 4 4 4 4 4 4 4 2 
            . . . . 4 4 4 4 4 4 4 4 
            . . . . 4 4 4 4 4 4 4 . 
            . . . . . 4 4 4 2 . . . 
            `, SpriteKind.EnemyWeakspot)
        WeakspotMiddle = sprites.create(img`
            . . . 9 9 9 9 9 9 . . . 
            . . 9 9 9 8 9 9 9 9 . . 
            . 9 9 8 8 8 9 9 9 9 9 . 
            9 9 8 8 8 6 9 9 9 9 9 9 
            9 8 8 6 6 9 9 9 9 9 9 9 
            9 6 6 6 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 9 9 9 9 . . . 
            `, SpriteKind.EnemyWeakspot)
        WeakSpotBottom = sprites.create(img`
            . . . . . . . e . . . . . . . 
            . . . . . . e e e . . . . . . 
            . . . . . . e e e . . . . . . 
            . . . . . . e e e . . . . . . 
            e . . . . e e b e e . . . . e 
            e e . . . e c b e e . . . e e 
            . e e . e e c e b e e . e e . 
            . e e e e e c e b e e e e e . 
            . . e e e c c e b e e e e . . 
            . . e e e c c e b b e e e . . 
            . . . e e c e e b b e e . . . 
            . . . . . c e e e b . . . . . 
            `, SpriteKind.EnemyWeakspot)
        CountWeakSpot = 3
    }
})
game.onUpdateInterval(10, function () {
    myEnemy.x += -0.2
    WeakSpotTop.setPosition(myEnemy.x + -15, myEnemy.y + -28)
    WeakspotMiddle.setPosition(myEnemy.x + -16, myEnemy.y + 4)
    WeakSpotBottom.setPosition(myEnemy.x + -24, myEnemy.y + 16)
})
