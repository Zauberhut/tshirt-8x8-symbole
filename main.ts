input.onButtonPressed(Button.A, function () {
    informatiktheater.setPwmServo(informatiktheater.ServoIndex.S1, 90, 100)
    radio.sendString("zu")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "zu") {
        informatiktheater.setPwmServo(informatiktheater.ServoIndex.S1, 90, 100)
    } else if (receivedString == "auf") {
        informatiktheater.setPwmServo(informatiktheater.ServoIndex.S1, 140, 100)
    }
})
input.onButtonPressed(Button.B, function () {
    informatiktheater.setPwmServo(informatiktheater.ServoIndex.S1, 140, 100)
    radio.sendString("auf")
})
