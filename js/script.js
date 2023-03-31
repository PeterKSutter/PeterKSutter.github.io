$(document).ready(function(){

   $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
   });

   $(widow).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle'); 
   })
  
 

});

