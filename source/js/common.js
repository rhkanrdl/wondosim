$(document).ready(function () {

    $('body').css(
        "background",
        "url('" + $(this).find("img#background").attr("src") +
                "') no-repeat top / cover"
    );

    $('.news-ticker').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 300,
        direction: 'left',
        duplicated: false,
        duration: 8000,
        gap: 20,
        pauseOnCycle: false,
        pauseOnHover: false,
        startVisible: false

    });

    var $depth1Slick = $('nav#menu div.depth1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        touchMove: false,
        prevArrow: $(".depth1-prev"),
        nextArrow: $(".depth1-next")

    });


    var $depth2Slick1 = $('nav#menu div.depth2-outline.category03 .depth').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        touchMove: false,
        prevArrow: $(".depth201-prev"),
        nextArrow: $(".depth201-next")
    });


    var $depth3Slick1 = $('nav#menu div.depth3-outline.category0301 .depth').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        touchMove: false,
        prevArrow: $(".depth0301-prev"),
        nextArrow: $(".depth0301-next")
    });


    var $depth3Slick2 = $('nav#menu div.depth3-outline.category0302 .depth').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        touchMove: false,
        prevArrow: $(".depth0302-prev"),
        nextArrow: $(".depth0302-next")
    });



    $('nav#menu div.depth2-outline.category03 .depth a').on("click", function() {
        var slideno = $(this).data('slide');
        $depth2Slick1.slick('slickGoTo', slideno - 1);
        $('nav#menu div.depth2-outline.category03 .depth a').removeClass("on");
        $(this).addClass("on");

        $('nav#menu div.depth3-outline').removeClass("on");
        $('nav#menu div.depth3-outline.category030'+ slideno).addClass("on");
    });


    $('nav#menu div.depth3-outline.category0301 .depth a').on("click", function() {
        var slideno = $(this).data('slide');
        $depth2Slick1.slick('slickGoTo', slideno - 1);
        $('nav#menu div.depth3-outline.category0301 .depth a').removeClass("on");
        $(this).addClass("on");
    });


    $('nav#menu div.depth3-outline.category0302 .depth a').on("click", function() {
        var slideno = $(this).data('slide');
        $depth2Slick1.slick('slickGoTo', slideno - 1);
        $('nav#menu div.depth3-outline.category0302 .depth a').removeClass("on");
        $('#content').addClass("sub");
        $(this).addClass("on");

        
        $("div#content div.pop").removeClass("open");
        $("div#content div.content-category03").addClass("open");
    });








    $('nav#menu div.depth1 a[data="onePage"]').on("click", function () {
        var category = $(this).attr("id")
        $('nav#menu').removeClass();
        $('nav#menu').addClass(category);
        $('nav#menu').addClass("on");
        $('#header').addClass("sub");
        $('#content').addClass("sub");
        $(".depth2-outline").removeClass("on");
        $(".depth3-outline").removeClass("on");

        $('nav#menu div.depth1 a').removeClass("on");
        $(this).addClass("on");

        if (category == "category01") {
            $("div#content div.pop").removeClass("open");
            $("div#content div.content-category01").addClass("open");
        }

        if (category == "category02") {
            $("div#content div.pop").removeClass("open");
            $("div#content div.content-category02").addClass("open");
        }

        if (category == "category05") {
            $("div#content div.pop").removeClass("open");
            $("div#content div.content-category05").addClass("open");
        }

    });

    $('nav#menu div.depth1 a[data="multiPage"]').on("click", function () {
        var category = $(this).attr("id")
        $('nav#menu').removeClass();
        $('nav#menu').addClass(category);
        $('nav#menu').addClass("on");
        // $('#header').addClass("sub");
        // $('#content').addClass("sub");
        $(".depth2-outline").removeClass("on");
        $(".depth3-outline").removeClass("on");

        $('nav#menu div.depth1 a').removeClass("on");
        $(this).addClass("on");


        if (category == "category03") {
            $(".depth2-outline").removeClass("on");
            $(".depth2-outline.category03").addClass("on");
        }

    });


    function toMain() {
        $('nav#menu').removeClass();
        $('#header').removeClass();
        $('div#content').removeClass("sub");
        $('nav#menu div.depth a').removeClass("on");
        $(".depth2-outline").removeClass("on");
        $(".depth3-outline").removeClass("on");
        $("div#content div.pop").removeClass("open");
    }

    $('div#content button.close').on("click", function () {
        toMain();
    });




    $depth1Slick.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".depth2-outline").removeClass("on");
        $(".depth3-outline").removeClass("on");
        $('nav#menu div.depth1 a').removeClass("on");
});


$(window).on("resize")


$( window ).resize( function() {
    $depth1Slick.slick('refresh');

});

});
