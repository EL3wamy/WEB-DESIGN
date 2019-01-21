$(function () {
   $(".position-relative").mouseover(function () {
        $(this).children(".position-absolute").show();
        $(this).children(".img-thumbnail").addClass("changBorderColor");
    });
    $(".position-relative").mouseout(function () {
        $(this).children(".position-absolute").hide()
        $(this).children(".img-thumbnail").removeClass("changBorderColor");

    })
    // $(".img-thumbnail").mouseover(function () { 
    //     $(this).next(".position-absolute").show();
    // });
    // $(".position-absolute ").mouseout(function () { 
    //     $(this).hide();
    // });
   /* $(".hoverDive").mouseenter(function () {

        $(this).prev(".img-thumbnail").addClass("changBorderColor");

    });*/
    // $(".hoverDive").mouseleave(function () {

    //     $(this).prev(".img-thumbnail").removeClass("changBorderColor");
    // }); 
    $("#defaultForm-email").focus(function (e) { 
        $(this).css()
    });
    $('.scrollleft').click(function() {
        event.preventDefault();
        $('.seriesSlider').animate({
          scrollLeft: "-=390px"
        }, "ease-in");
      });
      $('.scrollRight').click(function() {
        event.preventDefault();
        $('.seriesSlider').animate({
          scrollLeft: "+=390px"
        }, "ease-in");
      });
      
      
});
