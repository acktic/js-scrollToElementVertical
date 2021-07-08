# js-scrollToElementVertical

Scroll to an element vertically

# use

`      scrollToElm(`<br>
`        touchmove,`<br>
`        document.querySelector('.container'),`<br>
`        document.querySelector('.element'),`<br>
`        250`<br>
`      );`<br>

# touchmove

`document.addEventListener('touchend', (evt) => {`<br>
`  touchendX = evt.changedTouches[0].screenX;`<br>
`  handleSwipe();`<br>
`  let isScrolling;`<br>
`  // Clear our timeout throughout the scroll`<br>
`  window.clearTimeout( isScrolling );`<br>
`  // Set a timeout to run after scrolling ends`<br>
`  isScrolling = setTimeout(function() {`<br>
`    // Run the callback`<br>
`    touchmove = true;`<br>
`  }, 4000);`<br>
