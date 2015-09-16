/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Ändrar lite design */
$(document).ready(function (){
   
    $("header ul a,h1 small,h1 a").css("color","#F0FF21");
    
});



$('#slider').slideReveal({
  trigger: $("#trigger"),
  position:("right"),
  booleans:("true"),
  top: 100,
  width: 300,
  push: false   
});
