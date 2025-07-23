// this is the "forever" block.
// It makes the code inside of it run in a loop, over and over again.
basic.forever(function on_forever() {
    // this is the "show leds" block. 
    // It reads the text (. # . ...) to figure out which LED is on.
    // '.' means off and '#' means on
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
// this is the second "show leds" block. 
// all LEDs are off so it only contains '.' characters.
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
// Every open bracket '{' or parenthesis '(' needs to be closed with a matching '}' or a ')'
})
