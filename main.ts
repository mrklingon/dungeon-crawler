function makeMonster (num: number) {
    monster = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(monster, sprites.dungeon.floorLight0)
    monster.follow(mySprite, 55)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireBall()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    game.over(true, effects.confetti)
})
function ChangeLevel (LevelNum: number) {
    makeMonster(1)
    if (LevelNum == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (LevelNum == 1) {
        tiles.setTilemap(tilemap`level2`)
    } else if (LevelNum == 2) {
        tiles.setTilemap(tilemap`level4`)
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    current_level += 1
    ChangeLevel(current_level)
    scene.cameraShake(2, 200)
})
function fireBall () {
    fball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 5 . 
        . . . . . . . . . . . . . 5 . . 
        . . . . . 5 . . . . . . . 5 . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . 2 . . . 2 7 2 . . 2 2 2 2 . 
        . . . . . . 2 2 2 5 . . . . . . 
        . . 2 . . . . . . . 5 . . . . . 
        . . . . . 5 . . . . . 5 . . . . 
        . . . . 5 . . . 2 . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    fball.startEffect(effects.fire, 1000)
    fball.setPosition(mySprite.x, mySprite.y)
    fball.follow(monster, 200)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    fball.destroy()
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(9, 4), sprites.dungeon.doorOpenEast)
    tiles.setWallAt(tiles.getTileLocation(9, 4), false)
    tiles.setTileAt(tiles.getTileLocation(5, 1), sprites.dungeon.buttonTeal)
})
let fball: Sprite = null
let monster: Sprite = null
let current_level = 0
let mySprite: Sprite = null
game.splash("Dungeon Crawl", "A gives a fireball - use on the monsters.")
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 88, 88)
current_level = 0
scene.cameraFollowSprite(mySprite)
ChangeLevel(0)
