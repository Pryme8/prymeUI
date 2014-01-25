/* 
MIT Licencing 2014 Andrew V Butt Sr. 
use are you see fit.
Pryme8@gmail.com - contact me with questions
 */


$.fn.prymeUI = function ( options ){
   var prymeString = "";
   var originalElement = $(this);
   
    
var settings = $.extend({
// These are the defaults.

}, options );

function createPrymeElement(t){
    $(t).css({display:'none'}).before(prymeString);
}
   
   //DROP DOWN MENU
   if($(this).is('select')){
       prymeString ="<div class='prymeSelectBox' id='"+$(this).attr('id')+"' name='"+$(this).attr('name')+"'>";
       prymeString+='<span class="prymeSelectBox_OptionArea">';

        $(this).children('option').each(function(){
     
           if($(this).attr('value')===$(this).parent('select').val()){
               prymeString+='<div class="selected" id="'+$(this).attr("value")+'">'+$(this).text()+'</div>';
           }else{
               prymeString+='<div id="'+$(this).attr("value")+'">'+$(this).text()+'</div>';
           }
           
            
       });
       
       prymeString+='</span>';
       prymeString +="</div>";
       
       $( document ).on( "click",".prymeSelectBox", function(  ) {
        if($(this).hasClass("focus")){
         $(this).removeClass("focus");
                }else{
         $(this).addClass("focus");
    }
  
});

$( document ).on( "click",".prymeSelectBox span div", function(  ) {
   
   $(this).parent().children("div").removeClass("selected");
   $(this).addClass("selected");
   originalElement.val($(this).attr('id'));

});
       
       createPrymeElement($(this));
   }
   
   //INPUT ELEMENT
    if($(this).is('input')){
       prymeString ="<input class='prymeInputBox' id='"+$(this).attr('id')+"' name='"+$(this).attr('name')+"' placeholder='"+$(this).attr('placeholder')+"' value='"+$(this).val()+"'>";
       $( document ).on( "change",".prymeInputBox", function(  ) {
               originalElement.val($(this).val());
        });
       prymeString +="</input>";      
       createPrymeElement($(this));
   }
   
    
    
};
