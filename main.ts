let CHEESE = 0
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (CHEESE))
})
input.onGesture(Gesture.Shake, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("CHEESE")
    } else {
        CHEESE += 1
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    CHEESE = 0
})
