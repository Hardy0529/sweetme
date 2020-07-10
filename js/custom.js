$(document).ready(function() {

    // header color change
    $(window).on("scroll", function() {
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if (scrollDistance > 80) {
            $header.addClass("header--colored");
        } else {
            $header.removeClass("header--colored");
        }
    })

    //buttom

    $('.button').click(
        function() {
            $(this).addClass("buttonClick");
            $(this).css("color", "#fff");
        }
    );

    $(document).ready(init);

    function init() {

        var now = new Date();

        var str_NowDate = (now.getFullYear()) + "-" + (now.getMonth() + 1) + "-" + now.getDate();
        $("#div_date").html(str_NowDate);

    }

    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            navText: [],
            autoplay: true,
            autoplaySpeed: 1000,
            smartSpaeed: 500
        })
    });


})