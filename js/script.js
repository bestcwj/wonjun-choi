$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
});
})


$(document).ready(function() {
    
    $('#slides').superslides({
        animation:'fade',
        play:5000,
       /* pagination:false,*/
    });
    
    
    
    
var typed = new Typed(".typed", {
    strings: ["Avid Learner", "Software Developer", "Spirituality Seeker", "Self-Improvement","Dreamer"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
});
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});
       
$('.chart').easyPieChart({
    easing:'easeInOut',
    barColor: '#fff',
    trackColor: false,
        scaleColor: false,
        lineWidth:4,
        sixe:152,
        onStep: function(from, to, percent){
        $(this.el).find('.percent').text(Math.round(percent));
    }
    
        });
    /*$("#navigation li a").click(function(e){
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html,body").animate({scrollTop.targetPosition - 50}, "slow");
    });*/
    
const nav = $("#navigation");
    const navTop = nav.offset().top;
    
    $(window).on("scroll", stickyNavigation);
    
    function stickyNavigation(){
       var body = $("body");
        if($(window).scrollTop() >= navTop){
            body.css("padding-top",nav.outerHeight()+ "px");
            body.addClass("fixedNav");
        }
        else{
          body.css("padding-top",0);
            body.navClass("fixedNav");
        }
        
        
        
        
    }
    
    /*
   $('#hideshow').toggle(function() {
     $('#hideshow').text('Show');
       $('#message').hide();
       $('#message'.hide();
         },function(){
        $('#hideshow').text('Hide');
           $('#message').show();
       
   });
    */
    
    
    

document.getElementById("date").innerHTML = Date();

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            });


    
    

    
