document.getElementsByClassName('menutoggle')[0].onclick = function () {

  console.log('test');

  var menu = document.getElementById('menu');
    if(menu.className == "active"){
      menu.className = "inactive";
    } else {
      menu.className = "active";
    }
}

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  //TweenMax.from("#logo", 4, {x:-600, ease:Elastic.easeOut});
  //TweenMax.from(".menu", 4, {x:-600, ease:Elastic.easeOut});
  //TweenMax.from(".homePageBackground", 3, {opacity: 0, ease:Bounce.easeOut});

  TweenMax.from(".photography", 1.5, {opacity: 0, ease:Bounce.easeOut});
  TweenMax.from(".sim", 1.5, {opacity: 0, ease:Bounce.easeOut, delay: 0.5});
  TweenMax.from(".DutchStore", 1.5, {opacity: 0, ease:Bounce.easeOut, delay: 1});
  TweenMax.from(".responsiveWebsites", 1.5, {opacity: 0, ease:Bounce.easeOut, delay: 1.5});
  TweenMax.from(".middin", 1.5, {opacity: 0, ease:Bounce.easeOut, delay: 2});
  TweenMax.from(".felilo", 1.5, {opacity: 0, ease:Bounce.easeOut, delay: 2.5});

  //TweenMax.from("#streep", 2, {opacity: 0, ease:Bounce.easeOut, delay: 0});
  //TweenMax.from("#tekstContact", 2, {opacity: 0, ease:Bounce.easeOut, delay: 0.25});
  //TweenMax.from(".liefs", 2, {opacity: 0, ease:Bounce.easeOut, delay: 1});





  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
      showDivs(slideIndex += n);
  }

  function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length} ;
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      x[slideIndex-1].style.display = "block";
  }


  var section10OffsetTop = $('.section1').offset().top;
  var section20OffsetTop = $('.section2').offset().top;
  var section30OffsetTop = $('.section3').offset().top;
  var section40OffsetTop = $('.section4').offset().top;

  $(document).on('scroll',function(){
    var scrollTop = $(document).scrollTop;
    var activeLi;

    if(scrollTop < section20OffsetTop){

      if (scrollTop < section20OffsetTop){
        activeLi = $('.menu-items>Li:nth-child(1)');
      }else if(scrollTop < section30OffsetTop)
        activeLi = $('.menu-items>Li:nth-child(2)');
      }else{
        activeLi = $('.menu-items>Li:nth-child(3)');
    }
    activeLi.addClass('active');
    $('.menu-items>li').not(activeLi).removeClass('active')
  });
