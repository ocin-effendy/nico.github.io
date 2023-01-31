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
var projectScrollSection = document.querySelector('.container-scroll-project')


expertise.addEventListener('click', function(){
  window.scrollTo({
    top: expertiseSection.getBoundingClientRect().top,
    behavior: 'smooth'
  });
});
project.addEventListener('click', function(){
  window.scrollTo({
    top: projectScrollSection.getBoundingClientRect().top,
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
    }, 200);
  } else {
    contentFlutter.classList.add("box--hidden");
    contentFlutter.style.display = "none";
    contentAndroid.style.removeProperty("display");
    setTimeout(() => {
      contentAndroid.classList.remove("box--hidden");
    }, 200);

  }
});



// project scroll
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 12;

const currentFrame = (index) => `./project-scroll/${(index + 1).toString()}.jpg`;

const images = [];
let phone = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(phone, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "80%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".text-project-todolist",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".text-project-todolist", { opacity: 1 });
    },
  }
);



images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[phone.frame], 0, 0);
}
