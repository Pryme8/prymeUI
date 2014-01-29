/* 
MIT Licencing 2014 Andrew V Butt Sr. 
use are you see fit.
Pryme8@gmail.com - contact me with questions
 */

var prymeScreenLockCount = 0;
function prymeScreenLock(s){
     
    if(s==='lock'){
        prymeScreenLockCount++;
    }else if(s==='unlock'){
        prymeScreenLockCount-=1;
        
    }
    
    if(prymeScreenLockCount===0){
        $('.prymeScreenLock').fadeOut(350, function () {});
    }else{
        $('.prymeScreenLock').fadeIn(350, function () {});
    }
    
    if ($('.prymeScreenLock').is(':visible')) {
        // it's visible, fade out and Unlock keyboard
        document.onkeydown = function (e) {
            return e;
        };
    }
    else {
        // lock screen and disable keyboard
        document.onkeydown = function (e) {
            return false;
        };
        
    }
}

$.fn.prymeUI = function ( options ){
    

    
    if(!$('#prymeScreenLock').length){
        $('body').append('<div class="prymeScreenLock"></div>');
        
    }
    
   
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
       prymeString ="<span class='elementFix'><div class='prymeSelectBox";
       if($(this).is(':disabled')){
       prymeString+=" disable";    
       }
       if($(this).prop('autofocus')){
       prymeString+=" focus";    
       }
       
      
       if($(this).attr('size')){
       prymeString+=" sizeBox";    
       }
       
       prymeString+="' id='"+$(this).attr('id')+"' name='"+$(this).attr('name')+"'>";
       prymeString+='<span class="prymeSelectBox_OptionArea">';

        $(this).children('option').each(function(){
            
           if($(this).attr('value')===originalElement.val()){
               prymeString+='<div class="selected" id="'+$(this).attr("value")+'">'+$(this).text()+'</div>';
           }else{

               prymeString+='<div id="'+$(this).attr("value")+'">'+$(this).text()+'</div>';
           
         }
           
            
       });
       
       prymeString+='</span>';
       prymeString +="</div></span>";
   
       
       $( document ).on( "click",".prymeSelectBox#"+$(this).attr('id'), function(  ) {
        if($(this).hasClass("focus")){
         $(this).removeClass("focus");
                }else{
         $(this).addClass("focus");
    }
  
});

$( document ).on( "click",".prymeSelectBox#"+$(this).attr('id')+" span div", function(  ) {
   
   $(this).parent().children("div").removeClass("selected");
   $(this).addClass("selected");
   originalElement.val($(this).attr('id'));

});
       
       createPrymeElement($(this));
       if($(this).attr('size')){
           $('.prymeSelectBox#'+$(this).attr('id')).children('span').css({overflow_y:'auto',height:$(this).attr('size')*1.5+"em"});
           $('.prymeSelectBox.sizeBox#'+$(this).attr('id')).css("margin-bottom",$(this).attr('size')*1.5+"em");
       }
       
  
   }
   
   //INPUT ELEMENT
    if($(this).is('input')){
       prymeString ="<input class='prymeInputBox' id='"+$(this).attr('id')+"' name='"+$(this).attr('name')+"' placeholder='"+$(this).attr('placeholder')+"' value='"+$(this).val()+"'>";
       $( document ).on( "change",".prymeInputBox#"+$(this).attr('id'), function(  ) {
               originalElement.val($(this).val());
        });
       prymeString +="</input>";      
       createPrymeElement($(this));
   }
   
    
   
};
