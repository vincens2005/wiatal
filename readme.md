# WIATAL - Wiatal Is A Typing Animation Library

> inspired by [iTyped](https://github.com/luisvinicius167/ityped), but 1/2 the size

## Features:
  - extra tiny: 1kb minified, 0.5kb gzipped
  - no dependencies
  - just works
  - drop-in replacement for iTyped
  - Placeholder input support

## Installation

  ### NPM
    not yet
  
  ### Yarn
    also not yet
  
  ### browser
    https://cdn.jsdelivr.net/gh/vincens2005/wiatal/index.min.js
  
## CSS
  uses the same `.ityped-cursor` class as ityped for maximum compatibility
  you can style it to blink, etc.
  
### Note: has not been tested with react or anything so just use iTyped if you use react since it'll be bloat anyway

## All settings:
  ```javascript
   wiatal("#element", {
  
    /**
     * @param {Array} strings An array with the strings that will be animated 
     */
     strings: ['Put your strings here...', 'and Enjoy!']
    
    /**
     * @param {Number} typeSpeed Type speed in milliseconds
     */
     typeSpeed:  100,
   
    /**
     * @param {Number} backSpeed Type back speed in milliseconds
     */
     backSpeed:  50,
    
    /**
     * @param {Number} startDelay Time before typing starts
     */
     startDelay: 500,
    
    /**
     * @param {Number} backDelay Time before backspacing
     */
     backDelay:  500,
     
     /**
     * @param {Number} loopDelay Time before looping
     */
     loopDelay:  0,
    
    /**
     * @param {Boolean} loop The animation loop
     */
     loop:       false,
    
    /**
     * @param {Boolean} showCursor Show the cursor element
     */
     showCursor: true,
    
    /**
     * @param {Boolean} placeholder Write the string in the placeholder content
     */
     placeholder: false,
    
    /**
     * @param {Boolean} disableBackTyping Disable back typing for the last string sentence 
     */
     disableBackTyping: false,
    
    /**
     * @property {String} cursorChar character for cursor
     */
     cursorChar: "|",
    
    
    // optional: The callback called (if `loop` is false) 
    // once the last string was typed
    /**
     * @property {Function} onFinished The callback called , if `loop` is false,
     * once the last string was typed
     */
    onFinished: () => {},
  });
  ```
lmk if use use it, that'd be pretty epick
