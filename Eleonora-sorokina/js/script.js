$('.arrow').click(function(){
    $('html').animate({scrollTop : 0},800);
   });




   $(function() {
    $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
        })
    });



    $( ".hamburger" ).click(function() {
        $( ".selector" ).slideToggle();
      });