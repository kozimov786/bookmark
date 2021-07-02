
document.querySelector(".burger").addEventListener("click",()=>{
  document.querySelector(".sitenav").classList.toggle("active");
  document.querySelector('.burger').classList.toggle('is-open');
  document.querySelector(".sitenav__social-media").classList.toggle("active");
});

let elTabsFeatures = document.querySelector(".tabs-features");
let elTabsFeaturesItem = document.querySelectorAll(".tabs-features__item");
let elTabsFeaturesLink = document.querySelectorAll(".tabs-features__link");
let elsPanel = document.querySelectorAll('.features__panel');


if(elTabsFeaturesLink.length > 0){
  elTabsFeaturesLink.forEach(function(link){
    link.addEventListener('click',function(evt){
      evt.preventDefault();

      elTabsFeaturesItem.forEach(item =>{
        item.classList.remove('tabs-features__item--active');
      });
      
      link.parentElement.classList.add('tabs-features__item--active');

      elsPanel.forEach(function(panel) {
        panel.classList.remove('features__panel--active');
      });

      document.querySelector(link.getAttribute('href')).classList.add('features__panel--active');
    })
  })
}
var acc = document.getElementsByClassName("accordion__panel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}