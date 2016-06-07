/**
 * Created by Parad0x on 2016/6/3.
 */
'use strict';
$(function () {
    var base = $('.scroll ul li').length - 6,
        left = base,
        $view = $('.view-point'),
        int = setInterval(function () {
            $view.animate({left: '20%', top: '80%'}, 8000)
                .animate({left: '20%', top: '20%'}, 8000)
                .animate({left: '60%', top: '80%'}, 8000)
                .animate({left: '60%', top: '20%'}, 8000);
        }, 0);
    $('.close').click(function () {
        $view.hide();
        clearInterval(int);
    });
    $('.turn-left').click(function () {
        if (left === 0) {
        }
        else {
            $('.scroll ul').animate({left: '-=170px'}, {speed: 1000, queue: true});
            left--;
        }
    });
    $('.turn-right').click(function () {
        if (left === base) {
        }
        else {
            $('.scroll ul').animate({left: '+=170px'}, {speed: 1000, queue: true});
            left++;
        }
    });
});