$(document).ready(function(e) {
        
        var fade = function(){
                $(".mask").fadeToggle(500,function(){
                        $(this).parent().on("click",function(){
                                $(this).off("click");
                                fade();
                        });
                });
        };
        
        $(".wrapper").on("click",function(){
                $(this).off("click");
                fade();
        });
        
});
