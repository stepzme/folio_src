// sidebar scrolling

if($('.projects__grid').length != 0){
    let sectCntr = 1;
    $('.projects__grid .grid__item').each(function(){
      let sect = $(this);
      sect.attr('id', sectCntr);
      sect.attr('idx',''+sectCntr);
      let head = sect.find('.project__cover').text();
    })
}


$(document).ready(function() {
    $('.linkNav').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior
  
        var target = $(this).attr("href"); // Set the target as variable
  
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1000, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });
  
        return false;
    });
  });
  
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.grid__item').each(function(i) {
        if ($(this).position().top <= scrollDistance+(window.screen.height/2)-400) {
            $('.categories li.active').removeClass('active');
            $('.categories li').eq(i).addClass('active');
            let elwi = 36;
            let otstup = 0;
            let x = i;
            $('.categories li:nth-child(-n+'+x+')').each(function(){
              otstup += $(this).innerHeight();
            })
            
            $('.indicator').css('max-height',elwi+'px');
            $('.indicator').css('top',otstup+'px');
  
            //console.log(elwi,otstup)
        } 
    });
  }).scroll();