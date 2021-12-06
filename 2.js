$(document).ready(function(){
    $(window).scroll(function(){
        
        if($(window).scrollTop()>300){
            $('#pointer').fadeOut(800)
        }else{
            $('#pointer').fadeIn(800)
        }
        
    });
});