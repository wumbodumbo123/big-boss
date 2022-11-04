let i: number;
let attack1: Sprite;
namespace SpriteKind {
    export const attack = SpriteKind.create()
}

//  variables
let num1 = 0
let tileCol = 88
let MC = sprites.create(img`
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
let moveset1 = Math.pickRandom([1])
//  tilemap
tiles.setCurrentTilemap(tilemap`level1`)
//  sprite
controller.moveSprite(MC)
MC.setStayInScreen(true)
scene.cameraFollowSprite(MC)
tiles.placeOnRandomTile(MC, assets.tile`
    start
`)
tiles.setTileAt(tiles.getTileLocation(16, 24), assets.tile`
        block
    `)
//  attacks
if (moveset1 == 1) {
    for (i = 0; i < 3; i++) {
        for (i = 0; i < 22; i++) {
            attack1 = sprites.create(img`
                c c c c c c c c c c c c c c c c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c
                c c c c c c c c c c c c c c c c
            `, SpriteKind.attack)
            attack1.setPosition(tileCol, 264)
            tileCol = tileCol + 16
        }
        tileCol = 80
        pause(100)
        for (i = 0; i < 22; i++) {
            tiles.setTileAt(tiles.getTileLocation(tileCol, 16), assets.tile`
                    attack2
                `)
            tileCol = tileCol + 1
        }
        tileCol = 5
        pause(100)
    }
}

if (moveset1 == 1) {
    
}

