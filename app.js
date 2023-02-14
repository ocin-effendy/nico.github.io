
// loader 
var loader = document.querySelector('.loader');
onload = () =>{
  document.body.style.overflow = "hidden";
  let load = document.createElement('div');
  load.textContent = "Loading";

  loader.appendChild(load);

  let loaded = setInterval(() => {
    load.textContent += ".";
    if(load.textContent.length > 10) load.textContent = "Loading.";

  },1000);
  
  setTimeout(() => {
    clearInterval(loaded);
    loader.style.transform = "translateY(-100%)";
    // loader.style.display = "none";
    document.body.style.overflow = "auto";
  }, 7000);


}

// document.addEventListener('mousedown', function(){
//   cursor.classList.add('click');
//   cursorinner.classList.add('cursorinnerhover')
// });

// document.addEventListener('mouseup', function(){
//   cursor.classList.remove('click')
// });



// menu event click
var expertise = document.querySelector('.expertise');
var project = document.querySelector('.project');
var contact = document.querySelector('.contact');
var expertiseSection = document.querySelector('.container-expertise')
var projectScrollSection = document.querySelector('.container-scroll-project')
var contactScrollSection = document.querySelector('.container-contact')


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
contact.addEventListener('click', function(){
  window.scrollTo({
    top: contactScrollSection.getBoundingClientRect().top,
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
// const frameCount = 17;
const frameCount = 70;

// const currentFrame = (index) => `./project-scroll/${(index + 1).toString()}.jpg`;
const currentFrame = (index) => `./animation project/${(index + 1).toString()}.jpg`;

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
    end: "100%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".text-project-habit",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      start: "0%",
      end: "10%",
    },
    onComplete: () => {
      gsap.to(".text-project-habit", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".text-project-habit",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      scrub: 1,
      start: "40%",
      end: "0%",
    },
    onComplete: () => {
      gsap.to(".text-project-habit", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".text-project-movie",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      start: "40%",
      end: "46%",
    },
    onComplete: () => {
      gsap.to(".text-project-movie", { opacity: 0 });
    },
  }
);



gsap.fromTo(
  ".text-project-todolist",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      start: "45%",
      end: "50%",
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


// animation all project

var listProject1 = document.querySelector('.content-all-project1');
var listProject2 = document.querySelector('.content-all-project2');
var buttonOne = document.querySelector('.button-one');
var buttonTwo = document.querySelector('.button-two');
var buttonThree = document.querySelector('.button-three');

buttonTwo.addEventListener('click', function(){
  listProject1.classList.add('project-hidden');
  listProject2.classList.remove('project-hidden');
 
});
buttonOne.addEventListener('click', function(){
  listProject2.classList.add('project-hidden');
  listProject1.classList.remove('project-hidden');
  
});