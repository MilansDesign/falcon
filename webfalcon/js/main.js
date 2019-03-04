document.addEventListener('DOMContentLoaded', function() {

    // Window Width
    var windowWidth = $(window).width();

    // Window Height
    var windowHeight = $(window).height();

    // Window Scroll
    var scroll = $(window).scrollTop();

// Hide Window

    $(window).ready(function(){
        var page = $('.page');
        setTimeout(function() {
            page.addClass('unhide');
        }, 2800);
    });



// Smooth Scrolling

    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 750)
    })


    $(window).scroll(function() {

        var width = $(window).width();
        var height = $(window).height();
        var scrolled = $(window).scrollTop();

        if (scrolled > height - 80 ) {
            $("header").addClass("header-white");
        } else {
            $("header").removeClass("header-white");
        }

        if (width >= 768){
            if (scrolled > height - 300 && scrolled < height + 500) {
                $(".milan").addClass("milan-anim");
                $(".milan-text").addClass("milan-text-anim");
                $(".about-box-1").addClass("about-box-anim");
                $(".about-box-2").addClass("about-box-anim");
                $(".about-box-3").addClass("about-box-anim");
            }else if (scrolled < height / 5 || scrolled > height * 1.75){
                $(".milan").removeClass("milan-anim");
                $(".milan-text").removeClass("milan-text-anim");
                $(".about-box-1").removeClass("about-box-anim");
                $(".about-box-2").removeClass("about-box-anim");
                $(".about-box-3").removeClass("about-box-anim");
            } 
        }

    });

// Active Link Switch

    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top

            if ( sectionOffset <= scrollbarLocation) {
                $(this).addClass('active');
                $(this).parent().siblings().children().removeClass('active');
            }
        })

    })



// Burger Menu

    const navSlide = ()=>{
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-bar');

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    } 
    navSlide();



// Parallax
    
    if (windowWidth >= 768) {
        $(window).scroll(function() {
            parallax();
        })
    
        function parallax() {
    
            var wScroll = $(window).scrollTop();
            $('.parallax-bg').css('background-position', 'center '+(wScroll*0.6)+'px');
            $('.parallax-content').css('top', 10+(wScroll*0.06)+'%');
    
        } 

    }

}, false);
