/*

$(window).bind('mousewheel', function(event) {
  setTimeout(() => {
    
  
  if (event.originalEvent.wheelDelta >= 0) {
      console.log('Scroll up');
          window.scrollTo({
          top: 0,
          behavior: 'smooth'
          });
          window.onscroll=function(){};
  }
  else {
      console.log('Scroll down');
      window.scrollTo({
          top: pos,
          behavior: 'smooth'
          });
          window.onscroll=function(){};
  }
}, 100);
  });

var x=window.scrollX;
var y=window.scrollY;
window.onscroll=function(){window.scrollTo(x, y);};

setTimeout(() => {
  console.log("this is the first message");
}, 5000);
*/
