$(document).ready(function () {

    // -----------------------------------------------------------------
    $(window).load(function () {
        $("#navigation li a").mPageScroll2id({
            scrollSpeed: 900
        });
        $("#navigations").mPageScroll2id({
            scrollSpeed: 900
        });
    });
    var breakpoint = 840;
    // -----------------------------------------------------------------
    $("body").toTopButton({

        // path to icons
        // imagePath: '../images/portfolio-img1.jpg',

        // arrow, arrow-circle, caret, caret-circle, circle, circle-o, arrow-l, drop, rise, top
        // or your own SVG icon
        arrowType: 'circle',

        // 'w' = white
        // 'b' = black
        iconColor: 'w',

        // icon shadow
        // from 1 to 16
        iconShadow: 4,

        // opacity from 0 to 20
        opacity: 20,

        // border radious from 0-10 (0-50%)
        shape: 10,

        // from 0-10 (0-100px)
        margin: 2,


        // background color
        backgroundColor: '#09c',

        // border options
        border: {
            width: 0,
            color: ''
        },

        // 'tl': top-left
        // 'tr': top-right
        // 'bl': bottom-left
        // 'br': bottom-right.
        position: 'br',

        // button size from 1-6 (30-80px)
        size: 4,

        // button shadow from 1-5
        btnShadow: 2,

        // uses CSS filter
        filter: true,

        // classes for the link
        linkClasses: [],

        // classes for the image
        // imgClasses: ['imges'],


        // scroll position to show the button
        scrollTrigger: 200,

        // animation speed for smooth scroll
        animationTime: 700,

        // fade in/out speed
        fadeInSpeed: 'fast',
        fadeOutSpeed: 'fast',

        // auto hides when the screen size is smaller than this value
        mobileHide: 100,

        // auto hides when reaching the top
        autoHide: true,

    });
    // -----------------------------------------------------------------
    AOS.init();
    // -----------------------------------------------------------------
    $('#team .row .card').hover(function () {
        $(this).css({ 'opacity': '0.5', 'transform': 'translateY(-10px)', 'transition': 'all ease 1s' })
    }, function () {
        $(this).css({ 'opacity': '1', 'top': '0', 'transform': 'translateY(0)' })
    })
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
});