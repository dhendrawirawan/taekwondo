namespace SpriteKind {
    export const EnemyWeakspot = SpriteKind.create()
    export const SuperProjectile = SpriteKind.create()
    export const AttackingPlayer = SpriteKind.create()
    export const DefendingPlayer = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.SuperProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (CountWeakSpot == 0) {
        statusbar.value += -5
    }
    myEnemy.x += 5
    sprites.destroy(sprite, effects.trail, 100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 500, function () {
        controller.moveSprite(mySprite, 0, 0)
        if (controller.up.isPressed()) {
            mySprite.setKind(SpriteKind.DefendingPlayer)
            animation.runImageAnimation(
            mySprite,
            assets.animation`HighBlock`,
            150,
            false
            )
        } else if (controller.down.isPressed()) {
        	
        } else {
            mySprite.setKind(SpriteKind.AttackingPlayer)
            animation.runImageAnimation(
            mySprite,
            assets.animation`Punch`,
            150,
            false
            )
            mySprite.setPosition(mySprite.x + 3, mySprite.y)
        }
    })
    timer.after(1000, function () {
        controller.moveSprite(mySprite, 30, 20)
        mySprite.setKind(SpriteKind.Player)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 500, function () {
        controller.moveSprite(mySprite, 0, 0)
        mySprite.setKind(SpriteKind.AttackingPlayer)
        if (controller.up.isPressed()) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`HighBackKick`,
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
        timer.after(500, function () {
            controller.moveSprite(mySprite, 30, 20)
            mySprite.setKind(SpriteKind.Player)
        })
    })
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
sprites.onOverlap(SpriteKind.AttackingPlayer, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (CountWeakSpot == 0) {
        statusbar.value += -1
    }
    myEnemy.x += 5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    while (sprite.overlapsWith(otherSprite)) {
        otherSprite.x += 0.3
        sprite.x += -0.1
    }
    statusbar2.value += -1
})
let CountWeakSpot = 0
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
info.startCountdown(60)
music.play(music.createSong(assets.song`ImagineDragon1`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`AthleteBlue`, SpriteKind.Player)
mySprite.z = 1
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
assets.animation`BlueNeutral`,
150,
true
)
controller.moveSprite(mySprite, 30, 20)
myEnemy = sprites.create(assets.image`Godzillow`, SpriteKind.Enemy)
myEnemy.setStayInScreen(true)
myEnemy.setScale(0.8, ScaleAnchor.Middle)
animation.runImageAnimation(
myEnemy,
assets.animation`Godzilowanime`,
400,
true
)
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
game.onUpdateInterval(10, function () {
    myEnemy.x += -0.2
})
