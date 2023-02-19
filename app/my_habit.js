// menu event click
var description = document.querySelector('.description');
var goals = document.querySelector('.goals');
var features = document.querySelector('.features');
var descSection = document.querySelector('.container-desc-app')
var goalsSection = document.querySelector('.container-project-goals')
// var contactScrollSection = document.querySelector('.container-contact')


description.addEventListener('click', function(){
  window.scrollTo({
    top: descSection.getBoundingClientRect().top,
    behavior: 'smooth'
  });
});
goals.addEventListener('click', function(){
  window.scrollTo({
    top: goalsSection.getBoundingClientRect().top,
    behavior: 'smooth'
  });
});
// contact.addEventListener('click', function(){
//   window.scrollTo({
//     top: contactScrollSection.getBoundingClientRect().top,
//     behavior: 'smooth'
//   });
// });