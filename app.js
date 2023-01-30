var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');

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

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
});



// menu event click
var expertise = document.querySelector('.expertise');
var project = document.querySelector('.project');
var expertiseSection = document.querySelector('.container-expertise')


expertise.addEventListener('click', function(){
  window.scrollTo({
    top: expertiseSection.getBoundingClientRect().top,
    behavior: 'smooth'
  });
});


// expertise
var arrowRight = document.querySelector('.arrow-right');
var contentAndroid = document.querySelector('.display-expertise-android');
var contentFlutter = document.querySelector('.display-expertise-flutter');
const isHidden = () => contentFlutter.classList.contains("box--hidden");
contentAndroid.style.display = "none";



arrowRight.addEventListener("click", function () {
  if (isHidden()) {
    contentAndroid.classList.add("box--hidden");
    contentAndroid.style.display = "none";
    contentFlutter.style.removeProperty("display");
    setTimeout(() => {
      contentFlutter.classList.remove("box--hidden");
    }, 100);
  } else {
    contentFlutter.classList.add("box--hidden");
    contentFlutter.style.display = "none";
    contentAndroid.style.removeProperty("display");
    setTimeout(() => {
      contentAndroid.classList.remove("box--hidden");
    }, 100);

  }
});