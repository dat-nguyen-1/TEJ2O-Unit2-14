/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Apr 2026
 * This program will move a pixel around the perimeter.
*/

// initialize display
basic.showIcon(IconNames.Happy)

// initialize counters
let xCounter = 0
let yCounter = 0

// handle button A press
input.onButtonPressed(Button.A, function() {
    // create sprite
    let sprite = game.createSprite(0, 0)

    // reset counters
    xCounter = 0
    yCounter = 0

    // move right
    while (xCounter <= 4) {
        basic.pause(100)
        sprite.change(LedSpriteProperty.X, 1)
        xCounter += 1
    }

    // move down
    while (yCounter <= 4) {
        basic.pause(100)
        sprite.change(LedSpriteProperty.Y, 1)
        yCounter += 1
    }

    // move left
    while (xCounter >= 0) {
        basic.pause(100)
        sprite.change(LedSpriteProperty.X, -1)
        xCounter -= 1
    }

    // move up
    while (yCounter >= 0) {
        basic.pause(100)
        sprite.change(LedSpriteProperty.Y, -1)
        yCounter -= 1
    }

    // delete sprite
    sprite.delete()

    // reset display
    basic.showIcon(IconNames.Happy)
})

// handle button B press
input.onButtonPressed(Button.B, function () {
    // create sprite
    let sprite = game.createSprite(0, 0)

    // reset counters
    xCounter = 0
    yCounter = 0

    // move down
    while (yCounter <= 4) {
        basic.pause(100)
        sprite.change(LedSpriteProperty.Y, 1)
        yCounter += 1
    }

    // move right
    while (xCounter <= 4) {
        basic.pause(100)
        sprite.change(LedSpriteProperty.X, 1)
        xCounter += 1
    }

    // move up
    while (yCounter >= 0) {
        basic.pause(100)
        sprite.change(LedSpriteProperty.Y, -1)
        yCounter -= 1
    }

    // move left
    while (xCounter >= 0) {
        basic.pause(100)
        sprite.change(LedSpriteProperty.X, -1)
        xCounter -= 1
    }

    // delete sprite
    sprite.delete()

    // reset display
    basic.showIcon(IconNames.Happy)
})
