//    jquery start******* ***************
//    menu dropdown
$(document).ready(function () {

  $(".cross").hide();
  $(".buttonHEAD").hide();
  $(".listone").hide();

  $(".hamburger").click(function () {
    $(".listone").fadeToggle("slow", function () {
      $(".buttonHEAD").fadeIn();
      $(".hamburger").hide();
      $(".cross").fadeIn(1000);
      $("#total").hide()
   
    });
  });

  $(".cross").click(function () {
    $(".listone").fadeToggle("slow", function () {
      $(".cross").hide();
      $(".buttonHEAD").hide(20);
      $(".hamburger").show();
      $("#total").show()
    
    });
  });

});
//

// carsoule for s1 there are 12 slide img


let slidePosition = 0;
const slides = document.querySelectorAll(".spliceitem");
const totalSlider = slides.length;
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

function updatePosition() {
  slides.forEach(slide => {
    slide.classList.remove("active");
    slide.classList.add("hidden");
  })
  slides[slidePosition].classList.add("active");
}

btnPrev.addEventListener('click', function () {
  PrevSlide();
});


btnNext.addEventListener('click', function () {
  NextSlide();
});

function PrevSlide() {
  if (slidePosition == 0) {
    slidePosition = totalSlider - 1;
  } else {
    slidePosition--;
  }
  updatePosition();

}

function NextSlide() {
  if (slidePosition == totalSlider - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updatePosition();

}

// function abc() {
//   updatePosition();
// }


// section2 slider by swiperjs




document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#thumbnail-carousel', {
        fixedWidth: 200,
        gap       : 100,
        rewind    : true,
        pagination: false,
        loop:true,
        type   : 'loop',
      } ).mount();
} );


// artical section adding date 
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date();
let month = months[date.getMonth()];

document.querySelector("#date1").innerHTML = date.getFullYear() + " " + month + " " + date.getDay()
document.querySelector("#date2").innerHTML = date.getFullYear() + " " + month + " " + date.getDay()
document.querySelector("#date3").innerHTML = date.getFullYear() + " " + month + " " + date.getDay()
document.querySelector("#date4").innerHTML = date.getFullYear() + " " + month + " " + date.getDay()
document.querySelector("#date5").innerHTML = date.getFullYear() + " " + month + " " + date.getDay()



// $ for artical 


$(document).ready(function () {
  $(".assassin").hide()
  $(".raibow").hide()
  $(".avatar").hide()
  $(".thedivision").hide()

  $("#all").click(function () {
    $(".pageone").show()
    $(".assassin").hide()
    $(".raibow").hide()
    $(".avatar").hide()
    $(".thedivision").hide()
  })

  $("#creed").click(function () {
    $(".pageone").hide()
    $(".assassin").show()
    $(".raibow").hide()
    $(".avatar").hide()
    $(".thedivision").hide()
  })
  $("#six").click(function () {
    $(".pageone").hide()
    $(".assassin").hide()
    $(".raibow").show()
    $(".avatar").hide()
    $(".thedivision").hide()
  })

  $("#pandora").click(function () {
    $(".pageone").hide()
    $(".assassin").hide()
    $(".raibow").hide()
    $(".avatar").show()
    $(".thedivision").hide()
  })

  $("#division").click(function () {
    $(".pageone").hide()
    $(".assassin").hide()
    $(".raibow").hide()
    $(".avatar").hide()
    $(".thedivision").show()
  })

})



