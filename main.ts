scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    game.over(true, effects.confetti)
})
function ChangeLevel (LevelNum: number) {
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(9, 4), sprites.dungeon.doorOpenEast)
    tiles.setWallAt(tiles.getTileLocation(9, 4), false)
    tiles.setTileAt(tiles.getTileLocation(5, 1), sprites.dungeon.buttonTeal)
})
let current_level = 0
let mySprite: Sprite = null
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
controller.moveSprite(mySprite, 60, 60)
current_level = 0
scene.cameraFollowSprite(mySprite)
ChangeLevel(0)