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
       
       if($(this).prop('multiple')){
       prymeString+=" multiselect";    
       }
      
       if($(this).attr('size')){
       prymeString+=" sizeBox";    
       }
       
       prymeString+="' id='"+$(this).attr('id')+"' name='"+$(this).attr('name')+"'>";
       prymeString+='<span class="prymeSelectBox_OptionArea">';

       if($(this).prop('multiple')){
            
            $(this).children('option').each(function(){
             if($.inArray($(this).attr("value"),originalElement.val())>>>-1){
                prymeString+='<div id="'+$(this).attr("value")+'">'+$(this).text()+'</div>';
                 
             }else{
                prymeString+='<div class="selected" id="'+$(this).attr("value")+'">'+$(this).text()+'</div>';
                  
             }
       });
       }else{
        $(this).children('option').each(function(){
        
        
           if($(this).attr('value')===originalElement.val()){
               prymeString+='<div class="selected" id="'+$(this).attr("value")+'">'+$(this).text()+'</div>';
           }else{

               prymeString+='<div id="'+$(this).attr("value")+'">'+$(this).text()+'</div>';
           
         }

       });
   }
       
       prymeString+='</span>';
       prymeString +="</div></span>";
   

       $( document ).on( "click",".prymeSelectBox#"+$(this).attr('id'), function(  ) {
        if($(this).hasClass("focus")){
         $(this).removeClass("focus");
                }else{
         $(this).addClass("focus");
    }
  
});

       if($(this).prop('multiple')){
     
       $( document ).on( "click",".prymeSelectBox#"+$(this).attr('id')+" span div", function(e) {
           
            
            
           if(e.ctrlKey||e.metaKey){
                if(e.shiftKey){
                    if($(this).hasClass("selected")){
                            $(this).removeClass('selected');
                    if(!$(this).nextUntil('select').filter('.lastSelected').length){
                        $(this).parent().find('.lastSelected').nextUntil($(this)).toggleClass('selected');
                    }else{
                        $(this).parent().find('.lastSelected').prevUntil($(this)).toggleClass('selected'); 
                    } 
                   
                   }else{
                    $(this).addClass('selected');
                    if(!$(this).nextUntil('select').filter('.lastSelected').length){
                        $(this).parent().find('.lastSelected').nextUntil($(this)).toggleClass('selected');
                    }else{
                        $(this).parent().find('.lastSelected').prevUntil($(this)).toggleClass('selected'); 
                    }
                }
                
                 $(this).parent().children("div").removeClass("lastSelected");
                   $(this).addClass("lastSelected");
                
                }else{
              if($(this).hasClass("selected")){
                   $(this).removeClass("selected");
                   $(this).parent().children("div").removeClass("lastSelected");
                    $(this).addClass("lastSelected");
              }else{
                   $(this).addClass("selected");
                   $(this).parent().children("div").removeClass("lastSelected");
                   $(this).addClass("lastSelected");
              }
          }
          }else{
           
            $(this).parent().children("div").removeClass("selected");
            $(this).addClass("selected");
            $(this).parent().children("div").removeClass("lastSelected");
            $(this).addClass("lastSelected");
            
               
              
          }
          var prymeArray = new Array();
          var prymeIndex = 0;
           $(this).parent().children("div").each(function(){
               if($(this).hasClass("selected")){
               prymeArray[prymeIndex]=$(this).attr('id');
               prymeIndex++;
           }
           });
           
           
                  originalElement.val(prymeArray);
           
        });    
       }else{
          $( document ).on( "click",".prymeSelectBox#"+$(this).attr('id')+" span div", function(  ) {
          $(this).parent().children("div").removeClass("selected");
          $(this).parent().children("div").removeClass("lastSelected");
            $(this).addClass("selected");
            $(this).addClass("lastSelected");
            originalElement.val($(this).attr('id'));
        }); 
       }


       
       createPrymeElement($(this));
       if($(this).prop('multiple')){
           
           $('.prymeSelectBox#'+$(this).attr('id')).children('span').css({overflow_y:'auto',height:Math.ceil(($('.prymeSelectBox#'+$(this).attr('id')+' span').children('div').length/2)*1.5)+"em"});
           $('.prymeSelectBox.multiselect#'+$(this).attr('id')).css("margin-bottom",Math.ceil(($('.prymeSelectBox#'+$(this).attr('id')+' span').children('div').length/2)*1.5)+"em");
       }
       
       if($(this).attr('size')){
           $('.prymeSelectBox#'+$(this).attr('id')).children('span').css({overflow_y:'auto',height:$(this).attr('size')*1.5+"em"});
           $('.prymeSelectBox.sizeBox#'+$(this).attr('id')).css("margin-bottom",$(this).attr('size')*1.5+"em");
       }
       
  
   }
   
   //INPUT ELEMENT
    if($(this).is('input')){
       prymeString ="<input class='prymeInputBox";
       if($(this).is(':disabled')){
       prymeString+=" disable";    
       }
       prymeString +="' id='"+$(this).attr('id')+"' name='"+$(this).attr('name')+"' placeholder='"+$(this).attr('placeholder')+"' value='"+$(this).val()+"' maxlength='"+$(this).attr('maxlength')+"' autofocus='"+$(this).attr('autofocus')+"'"; 
       if($(this).prop('readonly')){
        prymeString += " readonly";   
       }
       
           
       
       prymeString += " >";
       $( document ).on( "change",".prymeInputBox#"+$(this).attr('id'), function(  ) {
               originalElement.val($(this).val());
        });
       prymeString +="</input>";      
       createPrymeElement($(this));
       
        if($(this).prop('size')){
        $('.prymeInputBox#'+$(this).attr('id')).css({width:$(this).attr('size')+'em'});
        }
        if($(this).prop('width')){
        $('.prymeInputBox#'+$(this).attr('id')).css({width:$(this).attr('width')});
        } 
      
   }
   
    
   
};
