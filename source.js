radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 50) {
        lux = receivedNumber
    } else {
        temp = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    serial.writeLine("T:" + temp)
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("L:" + lux)
})
let temp = 0
let lux = 0
radio.setGroup(69)
let flagScreen = 0
