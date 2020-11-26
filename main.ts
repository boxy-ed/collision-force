input.onButtonPressed(Button.A, function () {
    collision_force = 0
    basic.showString("reset")
})
input.onGesture(Gesture.FreeFall, function () {
    collision_force = 0
    if (input.isGesture(Gesture.FreeFall)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
    collision_force = input.acceleration(Dimension.Strength)
})
let collision_force = 0
basic.showString("Collision force")
basic.forever(function () {
    basic.showNumber(collision_force * 1000)
})
