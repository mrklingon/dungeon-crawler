// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a00080004050505050505050501080909090909090909070a0b09090909090909070809090909090909090708090909090909090907080909090909090c09070809090909090909090702060606060606060603`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDark2,sprites.dungeon.doorClosedWest,sprites.dungeon.floorLight0,sprites.dungeon.hazardHole], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a00080004050505050505050502080909090909090909070809090c0f09090a0907080909070809090909070809090d0e0909090907080909090909090909070809090b09090909090701060606060606060603`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . 2 2 . . . . 2 
2 . . 2 2 . . . . 2 
2 . . 2 2 . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.hazardHole,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`0a00080004050505050505050501080909090910090909060809090d07070b090906080909060f0f08090906080909060f0f080909110809090e05050c090906080a090909090909090603070707070707070702`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . 2 2 2 2 . . 2 
2 . . 2 2 2 2 . . 2 
2 . . 2 2 2 2 . . 2 
2 . . 2 2 2 2 . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.buttonTeal,sprites.dungeon.doorClosedEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
