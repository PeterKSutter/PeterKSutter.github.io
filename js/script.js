$(document).ready(function(){

   $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
    
   });

   $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle'); 

   });

   //Dynamic date and time
   dateHolder = document.getElementById("date")
   todaysYear = new Date().getFullYear()
   dateHolder.InnerHTML = todaysYear();
  
    //smooth scrolling

    $('a[href*="#"]').on('click',function(e){

     e.preventDefault();

     $('html, body').animate({

       scrollTop : $($(this).attr('href')).offset().top,

     },     
     500,
     'linear'     
     );

    });

});

