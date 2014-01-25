$(document).ready(function(){
  
    
});

function slideFold(direction){
    if(direction ==='up'){
        $('.aboveFold').animate({
                top: "-96%"
                }, 350, "linear", function () {
                //Complete Animation
            });
    }else if(direction==='down'){
        $('.aboveFold').animate({
                top: "0"
                }, 350, "linear", function () {
                //Complete Animation
            });
    }else if(direction==='left'){
        
    }else if(direction==='right'){
        
    }
    
    return this;
}; 

