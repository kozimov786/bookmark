
document.querySelector(".burger").addEventListener("click",()=>{
  document.querySelector(".sitenav").classList.toggle("active");
  document.querySelector('.burger').classList.toggle('is-open');
  document.querySelector(".sitenav__social-media").classList.toggle("active");
});