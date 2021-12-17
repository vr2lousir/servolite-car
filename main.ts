input.onButtonPressed(Button.A, function () {
    pixel.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    pixel.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    pixel.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    pixel.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    pixel.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
})
input.onButtonPressed(Button.B, function () {
    pixel.clear()
    pixel.show()
})
radio.onReceivedValue(function (name, value) {
    if (name == "roll") {
        rawRoll = value
        mappedRoll = pins.map(
        rawRoll,
        -90,
        90,
        0,
        180
        )
        rollLeft = mappedRoll
        rollRight = mappedRoll
    }
    if (name == "pitch") {
        rawPitch = value
        mappedPitch = pins.map(
        rawPitch,
        -90,
        90,
        0,
        180
        )
        pitchLeft = mappedPitch
        pitchRight = 180 - mappedPitch
    }
    leftOutput = (rollLeft + pitchLeft) / 2
    rightOutput = (rollRight + pitchRight) / 2
    if (rawPitch == 0 && rawRoll == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.servoWritePin(AnalogPin.P1, leftOutput)
        pins.servoWritePin(AnalogPin.P2, rightOutput)
    }
    if (name == "B") {
        if (value == 1) {
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_B,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            )
        } else {
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            )
        }
    }
})
let rightOutput = 0
let leftOutput = 0
let pitchRight = 0
let pitchLeft = 0
let mappedPitch = 0
let rawPitch = 0
let rollRight = 0
let rollLeft = 0
let mappedRoll = 0
let rawRoll = 0
let pixel: neopixel.Strip = null
radio.setGroup(1)
pixel = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
	
})
basic.forever(function () {
    pixel.rotate(1)
    pixel.show()
    basic.pause(100)
})
