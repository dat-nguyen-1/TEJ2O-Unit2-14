/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Apr 2026
 * This program will move a pixel around the perimeter.
*/

// create sprite
let sprite = game.createSprite(0, 0)

// handle button A press
input.onButtonPressed(Button.A, function() {
    // reset counters
    let xCounter = 0
    let yCounter = 0

    // move right
    while (xCounter <= 4) {
        sprite.change(LedSpriteProperty.X, 1)
        xCounter += 1
        basic.pause(100)
    }

    // move down
    while (yCounter <= 4) {
        sprite.change(LedSpriteProperty.Y, 1)
        yCounter += 1
        basic.pause(100)
    }

    // move left
    while (xCounter >= 0) {
        sprite.change(LedSpriteProperty.X, -1)
        xCounter -= 1
        basic.pause(100)
    }

    // move up
    while (yCounter >= 0) {
        sprite.change(LedSpriteProperty.Y, -1)
        yCounter -= 1
        basic.pause(100)
    }
})

// handle button B press
input.onButtonPressed(Button.B, function () {
    // reset counters
    let xCounter = 0
    let yCounter = 0

    // move down
    while (yCounter <= 4) {
        sprite.change(LedSpriteProperty.Y, 1)
        yCounter += 1
        basic.pause(100)
    }

    // move right
    while (xCounter <= 4) {
        sprite.change(LedSpriteProperty.X, 1)
        xCounter += 1
        basic.pause(100)
    }

    // move up
    while (yCounter >= 0) {
        sprite.change(LedSpriteProperty.Y, -1)
        yCounter -= 1
        basic.pause(100)
    }

    // move left
    while (xCounter >= 0) {
        sprite.change(LedSpriteProperty.X, -1)
        xCounter -= 1
        basic.pause(100)
    }
})
