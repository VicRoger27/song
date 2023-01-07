input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . #
        # # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    music.playMelody("C C5 E A G A B C5 ", 120)
    music.playMelody("F B A F G A F E ", 120)
    basic.clearScreen()
    basic.showString("WOW!")
    basic.showString("12345678901")
    basic.showString("life!")
})
for (let index = 0; index < 3; index++) {
    music.playTone(622, music.beat(BeatFraction.Whole))
}
loops.everyInterval(60000, function () {
    music.playTone(740, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
})
basic.forever(function () {
	
})
