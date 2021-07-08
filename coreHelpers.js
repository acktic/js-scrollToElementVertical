function getRelativePos(elm){
  var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
      cPos = elm.getBoundingClientRect(), // target pos
      pos = {};

  pos.top    = cPos.top    - pPos.top + elm.parentNode.scrollTop,
  pos.right  = cPos.right  - pPos.right,
  pos.bottom = cPos.bottom - pPos.bottom,
  pos.left   = elm.scrollLeft - elm.parentNode.scrollLeft + elm.parentNode.clientWidth;

  return pos;
}

function sideScrollToElm(
  touch,
  container,
  elm,
  duration
){
  var pos = getRelativePos(elm);
  sideScrollTo(
    touch,
    container,
    pos.left,
    50);  // duration in seconds
}

function sideScrollTo(
  touch,
  element,
  to,
  duration,
  onDone
) {
  if (touch == true) {
    var start = element.scrollLeft,
        change = to + start,
        startTime = performance.now(),
        val, now, elapsed, t;
    function animateScroll(){
        now = performance.now();
        elapsed = (now - startTime)/50;
        t = (elapsed/duration);
        element.scrollLeft = start + change * easeInOutQuad(t);
        if( t < 1 )
            window.requestAnimationFrame(animateScroll);
        else
            onDone && onDone();
    };
    animateScroll();
  }
}

function easeInOutQuad(t) {
  return t<.5 ? 2*t*t : -1+(4-2*t)*t
};
