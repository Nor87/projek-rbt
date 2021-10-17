basic.forever(function () {
    images.createImage(`
        . # . # .
        . # # . .
        . # # # #
        . # # . .
        . # . # .
        `).showImage(0)
    basic.pause(3)
    images.createImage(`
        . # # # #
        . . . # #
        # # . . #
        . # # # #
        . . . . #
        `).showImage(0)
    basic.pause(3)
})
basic.forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
