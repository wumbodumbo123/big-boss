@namespace
class SpriteKind:
    attack = SpriteKind.create()
# variables
num1 = 0
tileCol = 88
MC = sprites.create(img("""
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
    """),
    SpriteKind.player)
moveset1 = Math.pick_random([1])
# tilemap
tiles.set_current_tilemap(tilemap("""level1"""))
# sprite
controller.move_sprite(MC)
MC.set_stay_in_screen(True)
scene.camera_follow_sprite(MC)
tiles.place_on_random_tile(MC, assets.tile("""
    start
"""))
tiles.set_tile_at(tiles.get_tile_location(16, 24),
    assets.tile("""
        block
    """))
# attacks
if moveset1 == 1:
    for i in range(3):
        for i in range(22):
            attack1 = sprites.create(img("""
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
            """),
                SpriteKind.attack)
            attack1.set_position(tileCol, 264)
            tileCol = tileCol + 16
        tileCol = 80
        pause(100)
        for i in range(22):
            tiles.set_tile_at(tiles.get_tile_location(tileCol, 16),
                assets.tile("""
                    attack2
                """))
            tileCol = tileCol + 1
        tileCol = 5
        pause(100)
if moveset1 == 1:
    pass