"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.show(Image.HAPPY)

while True:
    if button_a.was_pressed():
        # reset display
        display.clear()

        # reset counters
        x_counter = 0
        y_counter = 0
        
        # move right
        while x_counter < 4:
            display.set_pixel(x_counter, y_counter, 9)
            x_counter += 1
            sleep(100)
            display.clear()

        # move down
        while y_counter < 4:
            display.set_pixel(x_counter, y_counter, 9)
            y_counter += 1
            sleep(100)
            display.clear()

        # move left
        while x_counter > 0:
            display.set_pixel(x_counter, y_counter, 9)
            x_counter -= 1
            sleep(100)
            display.clear()

        # move up
        while y_counter >= 0:
            display.set_pixel(x_counter, y_counter, 9)
            y_counter -= 1
            sleep(100)
            display.clear()

        display.show(Image.HAPPY)

    if button_b.was_pressed():
        # reset display
        display.clear()

        # reset counters
        x_counter = 0
        y_counter = 0

        # move down
        while y_counter < 4:
            display.set_pixel(x_counter, y_counter, 9)
            y_counter += 1
            sleep(100)
            display.clear()
        
        # move right
        while x_counter < 4:
            display.set_pixel(x_counter, y_counter, 9)
            x_counter += 1
            sleep(100)
            display.clear()

        # move up
        while y_counter > 0:
            display.set_pixel(x_counter, y_counter, 9)
            y_counter -= 1
            sleep(100)
            display.clear()

        # move left
        while x_counter >= 0:
            display.set_pixel(x_counter, y_counter, 9)
            x_counter -= 1
            sleep(100)
            display.clear()

        display.show(Image.HAPPY)
        
