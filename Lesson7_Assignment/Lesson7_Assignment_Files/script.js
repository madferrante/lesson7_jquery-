/*

Program Name: Recipe Display Application

Author: Madison Ferrante

Date: April 6, 2016

Filename: scritp.js

*/ 


//displays the next element after the current taget

function display (event) { 
    
     $(event.currentTarget).next().fadeIn ("slow");

}//end of display 

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display); 
 