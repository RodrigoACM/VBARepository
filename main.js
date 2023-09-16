(function ($) {


    /*----------------------------------------
                        Preloader
    ------------------------------------------*/
    $('.js-preloader').preloadinator({
        minTime: 2000,
        scroll: false

    });
    /* ----------------------------------------
           datepicker
    ------------------------------------------- */
    $("#datepicker-from").datepicker({
        autoclose: true,
        todayHighlight: true
    });
    $("#datepicker-to").datepicker({
        autoclose: true,
        todayHighlight: true
    });

    /*----------------------------------------
          Scroll to top
  ----------------------------------------*/
    function BackToTop() {

        $('.scrolltotop').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.scrolltotop').fadeIn();
            } else {
                $('.scrolltotop').fadeOut();
            }
        });

    }
    BackToTop();

    /*-------------------------------------------------*/
    /*    scroll between sections
    /*-------------------------------------------------*/

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".list_menu",
        offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#list-menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.list-details-tab li').on('click', (function () {
        $('li').removeClass("active");
        $(this).addClass("active");
    }));


    /* ----------------------------------------
          Hide Show Header on Scroll
    ------------------------------------------ */
    function HideShowHeader() {

        var didScroll;
        var lastScrollTop = 0;
        var delta = 50;
        var navbarHeight = 75;
        var navbarHideAfter = navbarHeight

        $(window).scroll(function (event) {
            didScroll = true;
        });

        if ($('.scroll-hide').length > 0) {

            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 100);
        }
        return false;

        function hasScrolled() {
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            if (st > lastScrollTop && st > navbarHideAfter) {
                if ($('.scroll-hide').length > 0) {
                    $('header').addClass('hide');
                }
            } else {
                if ($('.scroll-hide').length > 0) {
                    if (st + $(window).height() < $(document).height()) {
                        $('header').removeClass('hide');
                        $('.header.transparent').addClass('scroll');
                    }
                }

                if ($(window).scrollTop() < 300) {
                    $('.header.transparent').removeClass('scroll');
                }
            }

            lastScrollTop = st;
        }
    }
    HideShowHeader();

    /*------------------------------------------
          sticky single listing menu
    -------------------------------------------*/
    $(window).on('load resize', function () {
        var containerWidth = $(".container").width();
        $('.fixed_nav').css('width', containerWidth);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            $('.list_menu').addClass('fixed-header');
        } else {
            $('.list_menu').removeClass('fixed-header');
        }
    });
    /* ----------------------------------------
           CounteUp
    ------------------------------------------*/
    $('.counter-value').countUp({
        'time': 2500,
        'delay': 10
    });
    /*-------------------------------------------
            Count Down Timer
    ---------------------------------------------*/
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>mins</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>secs</p></span>'));
        });
    });

    /*--------------------------------------------
                       Video Player
     --------------------------------------------*/
    $(".player").mb_YTPlayer({
        containment: '#video-wrapper',
        mute: true,
        autoplay: true,
        showControls: false,
        quality: 'hd720'
    });

    /* -----------------------------------------
                    Google Map
    -------------------------------------------*/
   /* if ($('#map').length > 0) {
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 15,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                scrollwheel: false,


                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "poi",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "transit",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        }]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            var image = 'images/others/marker.png';
            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                icon: image,
                draggable: true,
                animation: google.maps.Animation.DROP
            });
            marker.addListener('click', toggleBounce);

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
        }
    }*/
    // Intialize Map

    jQuery(document).ready(function ($) {
        "use strict";

        /*------------------------------------
                Color Switcher
        --------------------------------------*/

        // Show and hide color-switcher
        $(".color-switcher .switcher-button").on('click', function () {
            $(".color-switcher").toggleClass("show-color-switcher", "hide-color-switcher", 300);
        });

        // Color Skins
        $('a.color').on('click', function () {
            var title = $(this).attr('title');
            $('#style-colors').attr('href', 'css/switcher/skin-' + title + '.css');
            return false;
        });
        /* -------------------------------------
              Footer Accordion
        -------------------------------------- */
        $(".nav-folderized h2").on('click', (function () {
            $(this).parent(".nav").toggleClass("open");
            $('html, body').animate({
                scrollTop: $(this).offset().top - 170
            }, 1500);
        }));
        /* -------------------------------------
                Header tab
        -------------------------------------- */
        var listButton = $('.hero__list-item a');

        listButton.on('click', function (event) {
            event.preventDefault();

            listButton.removeClass('active-list');
            $(this).addClass('active-list');

            var $this = $(this);

            if (!$this.hasClass('place')) {
                $this.parents('.hero')
                    .addClass('hero-events')
                    .find('.places-tab')
                    .fadeOut(500, function () {
                        $this.parents('.hero')
                            .find('.events-tab')
                            .fadeIn(500);
                    });

            } else {
                $this.parents('.hero')
                    .removeClass('hero-events')
                    .find('.events-tab')
                    .fadeOut(500, function () {
                        $this.parents('.hero')
                            .find('.places-tab')
                            .fadeIn(500);
                    });
            }
        });

        /* -------------------------------------
                Responsive menu
        -------------------------------------- */
        var siteMenuClone = function () {

            $('.js-clone-nav').each(function () {
                var $this = $(this);
                $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
            });

            setTimeout(function () {

                var counter = 0;
                $('.site-mobile-menu .has-children').each(function () {
                    var $this = $(this);

                    $this.prepend('<span class="arrow-collapse collapsed">');

                    $this.find('.arrow-collapse').attr({
                        'data-toggle': 'collapse',
                        'data-target': '#collapseItem' + counter,
                    });

                    $this.find('> ul').attr({
                        'class': 'collapse',
                        'id': 'collapseItem' + counter,
                    });

                    counter++;

                });

            }, 1000);

            $('body').on('click', '.js-menu-toggle', function (e) {
                var $this = $(this);
                e.preventDefault();

                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                    $this.removeClass('active');
                } else {
                    $('body').addClass('offcanvas-menu');
                    $this.addClass('active');
                }
            })

        };
        siteMenuClone();

        /*-------------------------------------------------
                    rating stars in reviews 
        /*-------------------------------------------------*/

        var rateLine = $('.contact-form__rate-bx'),
            rateActual = $('.rate-actual');

        rateLine.find('i').on('hover', function () {
            var indexStar = $(this).index();
            for (var j = 0; j <= 9; j++) {
                rateLine.find('i:lt(' + indexStar + 1 + ')').addClass('active');
                rateLine.find('i:gt(' + indexStar + ')').removeClass('active');
            }
        });

        rateLine.find('i').on('click', function () {
            var indexStar = $(this).index();
            for (var j = 0; j <= 9; j++) {
                rateLine.find('i:lt(' + indexStar + 1 + ')').addClass('selected');
                rateLine.find('i:gt(' + indexStar + ')').removeClass('selected');
            }
            rateActual.text(indexStar + 1);
        });

        rateLine.on('mouseout', function () {
            rateLine.find('i').removeClass('active');
        });

        /* -------------------------------------
                price range slider
        -------------------------------------- */

        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 200,
            values: [0, 70],
            slide: function (event, ui) {
                $("#amount").val(ui.values[0] + "-" + ui.values[1] + " km");
            }
        });
        $(" #amount").val($("#slider-range").slider("values", 0) +
            " - " + $("#slider-range").slider("values", 1) + " km");
        /* -------------------------------------
                 Category menu Activation
        -------------------------------------- */
        $('.filter-sub-menu li.has-sub > a').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            } else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        });

        /* -------------------------------------
                   Slider
        -------------------------------------- */
        //Hero-slider
         var swiper_1 = new Swiper('.hero-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 1000,
             autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.hero-next',
                prevEl: '.hero-prev',
            },
            // Responsive breakpoints
            breakpoints: {

                767: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
            }
        });
        //Trending place slider
        var swiper_2 = new Swiper('.trending-place-wrap', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            speed: 1500,
            loop: true,
            pagination: {
                el: '.trending-pagination',
                clickable: true,
            },
            // Responsive breakpoints
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
        //Similar Listing Slider
        var swiper_3 = new Swiper('.similar-list-wrap', {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.similar-next',
                prevEl: '.similar-prev',
            },
            // Responsive breakpoints
            breakpoints: {

                767: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
            }
        });
        //Popular place slider one
        var swiper = new Swiper('.popular-place-wrap', {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.popular-next',
                prevEl: '.popular-prev',
            },
            // Responsive breakpoints
            breakpoints: {

                767: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
        //Popular place slider Two
        var swiper_4 = new Swiper('.popular-place-wrap.v2', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.popular-next.style2',
                prevEl: '.popular-prev.style2',
            },
            // Responsive breakpoints
            breakpoints: {

                767: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
        //Coupon Slider
        var swiper_5 = new Swiper('.coupon-wrap', {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: false,
            speed: 1000,
            navigation: {
                nextEl: '.coupon-next',
                prevEl: '.coupon-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                991: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 2,
                }
            }
        });
        //Partner slider
        var swiper_6 = new Swiper('.partner-wrap', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.partner-next',
                prevEl: '.partner-prev',
            },
            // Responsive breakpoints
            breakpoints: {

                575: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
        //Testimonial slider
        var swiper_7 = new Swiper('.testimonial-wrapper', {
            slidesPerView: 3,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            centeredSlides: true,
            pagination: {
                el: '.client-pagination',
                clickable: true,
            },
            // Responsive breakpoints
            breakpoints: {

                991: {
                    slidesPerView: 1,
                }
            }
        });

        //Team Slider
        var swiper_8 = new Swiper('.team-wrapper', {
            slidesPerView: 4,
            loop: true,
            speed: 1000,
            spaceBetween: 30,
            navigation: {
                nextEl: '.team-next',
                prevEl: '.team-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
        //Listing details carousel
        var swiper_9 = new Swiper('.listing-details-slider', {
            slidesPerView: 2,
            spaceBetween: 0,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.listing-details-next',
                prevEl: '.listing-details-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {

                767: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                }
            }
        });

        /*---------------------------------
                Date Picker
        ------------------------------------*/
        if ($("./*counter*/-widget").length > 0) {
            var countCurrent = $(".counter-widget").attr("data-countDate");
            $(".countdown").downCount({
                date: countCurrent,
                offset: 0
            });
        }

    });

    /*---------------------------------
               Nice select
    -----------------------------------*/
    $('select').niceSelect();

    /*-------------------------------------
              Quantity Slider
     -------------------------------------*/
    var quantitiy = 0;
    $('.quantity-right-plus').on("click", function (e) {
        e.preventDefault();
        var quantity = parseInt($(this).parent().siblings("input.input-number").val(),10);
        $(this).parent().siblings("input.input-number").val(quantity + 1);
    });
    $('.quantity-left-minus').on("click", function (e) {
        e.preventDefault();
        var quantity = parseInt($(this).parent().siblings("input.input-number").val(),10);
        if (quantity > 0) {
            $(this).parent().siblings("input.input-number").val(quantity - 1);
        }
    });

}(jQuery));
