'use strict';

const strip = require('rpi-ws281x-native');

const NUMBER_OF_LEDS = 32; // 32 leds in the Unicorn pHat

strip.init(NUMBER_OF_LEDS);
strip.setBrightness(50); // A value between 0 and 255

// The RGB colours of the LEDs. for instance 0xff0000 is red, 0x0000ff is blue, etc.
const leds = [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0    
];

// Loop every 0.1 sec: randomise an index and a colour and display it
strip.render(leds);
const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * NUMBER_OF_LEDS);
    const randomColour = Math.floor(Math.random() * 0xffffff);
    leds[randomIndex] = randomColour;
    console.log('Rendering colour ' + randomColour + ' at index ' + randomIndex);
    strip.render(leds);
}, 100);

// After 10 secondes, stop.
setTimeout(() => {
    console.log('Stop!');
    clearInterval(interval);
    strip.reset();
}, 10000);