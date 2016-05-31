/**
 * Created by Parad0x on 2016/5/31.
 */
'use strict';

$(function () {
    /*begin*/
    /*改变主题 change theme*/
    $('#theme').children().each(function () {
        this.onclick = function () {
            $('#css').attr('href', '../styles/theme/theme_' + this.id + '.css');
            $(this).css('background-Position-Y', '-15px');
            $(this).siblings().css('background-Position-Y', '0');
        }
    });
    /*改变预览图 change product image*/
    $('.small').on('click', function () {
        var bg = $('.image').css('background'),
            src = $(this).children().attr('src');
        src = src.match(/\bpro_img.*.jpg/);
        src = src[0].substring(0, src[0].length - 4);
        src = src + '_small.jpg';
        // console.log(src);
        $('.image').css('background', bg.replace(/\bpro_img.*.jpg/, src));
    });
    /*切换描述 toggle description*/
    $('.tab li').on('click', function () {
        // console.log(this.className);
        $('.proDes div').removeClass('show');
        $('.proDes .'+this.className).addClass('show');
    });
    /*end*/
});