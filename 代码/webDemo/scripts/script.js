/**
 * Created by lenovo on 2016/6/3.
 */
'use strict';
$(function () {
    var $view = $('.view-point'),
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
});