$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });


    $("#backToTop").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#topPage").offset().top
        }, 1000);
    });



$('*[data-image-src]').each(function() {
  var attr = $(this).attr('data-image-src');

  if (typeof attr !== typeof undefined && attr !== false) {
      $(this).css('background', 'url('+attr+') center center');
      
  }
});




    $(document).ready(function () {
        $(".open").click(function () {
            $(".hiddenList").toggle();
        });
    });

    $(document).ready(function () {
        $(".open-sec").click(function () {
            $(".hiddenListSec").toggle();
        });
    });
    $(document).ready(function () {
        $(".open-third").click(function () {
            $(".hiddenListThird").toggle();
        });
    });
    $(document).ready(function () {
        $('.carousel').carousel({
            interval: 5000 //changes the speed
        });


        $(document).ready(function () {
            $("#openDiv").click(function () {
                $(".hidden_events").toggle();
            });
        });


    });


////FANCY BOX
//
    $(document).ready(function () {
        /*
         *  Simple image gallery. Uses default settings
         */

        $('.fancybox').fancybox();

        /*
         *  Different effects
         */

        // Change title type, overlay closing speed
//        $(".fancybox-effects-a").fancybox({
//            helpers: {
//                title: {
//                    type: 'outside'
//                },
//                overlay: {
//                    speedOut: 0
//                }
//            }
//        });

        // Disable opening and closing animations, change title type
//        $(".fancybox-effects-b").fancybox({
//            openEffect: 'none',
//            closeEffect: 'none',
//            helpers: {
//                title: {
//                    type: 'over'
//                }
//            }
//        });

        // Set custom style, close if clicked, change title type and overlay color
//        $(".fancybox-effects-c").fancybox({
//            wrapCSS: 'fancybox-custom',
//            closeClick: true,
//            openEffect: 'none',
//            helpers: {
//                title: {
//                    type: 'inside'
//                },
//                overlay: {
//                    css: {
//                        'background': 'rgba(238,238,238,0.85)'
//                    }
//                }
//            }
//        });

        // Remove padding, set opening and closing animations, close if clicked and disable overlay
        $(".fancybox-effects-d").fancybox({
            padding: 0,
            helpers: {
                overlay: {
                    css: {
                        'background': 'rgba(0,0,0,.8)'
                    }
                }
            }
        });

        /*
         *  Button helper. Disable animations, hide close button, change title type and content
         */

//        $('.fancybox-buttons').fancybox({
//            openEffect: 'none',
//            closeEffect: 'none',
//            prevEffect: 'none',
//            nextEffect: 'none',
//            closeBtn: true,
//            helpers: {
//                title: {
//                    type: 'inside'
//                },
//                buttons: {}
//            },
//            afterLoad: function () {
//                this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
//            }
//        });


        /*
         *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
         */

//        $('.fancybox-thumbs').fancybox({
//            prevEffect: 'none',
//            nextEffect: 'none',
//            closeBtn: false,
//            arrows: false,
//            nextClick: true,
//            helpers: {
//                thumbs: {
//                    width: 50,
//                    height: 50
//                }
//            }
//        });

        /*
         *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
         */
//        $('.fancybox-media')
//                .attr('rel', 'media-gallery')
//                .fancybox({
//                    openEffect: 'none',
//                    closeEffect: 'none',
//                    prevEffect: 'none',
//                    nextEffect: 'none',
//                    arrows: false,
//                    helpers: {
//                        media: {},
//                        buttons: {}
//                    }
//                });

        /*
         *  Open manually
         */

//        $("#fancybox-manual-a").click(function () {
//            $.fancybox.open('1_b.jpg');
//        });

//        $("#fancybox-manual-b").click(function () {
//            $.fancybox.open({
//                href: 'iframe.html',
//                type: 'iframe',
//                padding: 5
//            });
//        });

//        $("#fancybox-manual-c").click(function () {
//            $.fancybox.open([
//                {
//                    href: '1_b.jpg',
//                    title: 'My title'
//                }, {
//                    href: '2_b.jpg',
//                    title: '2nd title'
//                }, {
//                    href: '3_b.jpg'
//                }
//            ], {
//                helpers: {
//                    thumbs: {
//                        width: 75,
//                        height: 50
//                    }
//                }
//            });
//        });


    });


});


