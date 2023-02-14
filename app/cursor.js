// cursor
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var seeAllProject = document.querySelector('.see-all-project');; 

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});