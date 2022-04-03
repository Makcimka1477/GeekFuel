$(function() {
  // const slider = document.querySelector('.slider-items');
  // const slides = document.querySelectorAll('.slider-item');
  // const inputs = document.querySelectorAll('.compliment__nav-input')
  
  // console.log(inputs);
  
  
  // slider.addEventListener('click', (e) => {
  //   if (e.target) {
      
  //     e.target.classList.toggle('active');
  //   }
  // });
  
  
  $('.slick__slider').slick({
    centerMode: true,
    slidesToShow: 1,
    dots: true,
    // autoplaySpeed: 1500,
    autoplay: true,
    variableWidth: true,
  })

})