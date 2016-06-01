/**
 * Created by Parad0x on 2016/5/31.
 */
'use strict';

$(function () {
    /*begin*/
    var rate = 0;

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
        console.log(src);
        src = src[0].substring(0, src[0].length - 4);
        src = src + '_small.jpg';
        $('.image').css('background', bg.replace(/\bpro_img.*.jpg/, src));
    });
    /*切换描述 toggle description*/
    $('.tab li').on('click', function () {
        // console.log(this.className);
        $('.proDes div').removeClass('show');
        $('.proDes .' + this.className).addClass('show');
    });
    /*尺寸 change size*/
    $('.pro_size li').on('click', function () {
        var text = $(this).children(':first').text();
        $('.pro_size').children('strong').text(text);
    });
    /*计算总价 count price*/
    $('#num_sort').on('change', function () {
        $('#priceSum').text($('#num_sort').val() * 200);
    });
    //改变颜色 change color
    $('.color_change li img').on('click', function () {
        $('#color').text($(this).attr('alt'));
        var bg = $('.image').css('background'),
            url = $(this).attr('src').match(/\b\/.*\./);
        url = url[0].replace(/\./, '_');
        $('.smallList img').each(function () {
            var src = $(this).attr('src');
            src = src.replace(/\b\/pro_img.*?_/, url);
            $(this).attr('src', src);
            console.log();
        });
        $('.image').css('background', bg.replace(/\b\/pro_img.*?_/, url));
    });


    //打分 rating
    $('.rating li').on('mouseover', function () {
        console.log($(this));
        var index = $(this).attr('data-index');
        $('.rating').css('backgroundPositionY', index * -16 - 80);
    }).on('click', function () {
        rate = $(this).attr('data-index');
        alert('您给此商品的评分是： ' + rate + '分');
    });
    $('.rating').on('mouseout', function () {
        $('.rating').css('backgroundPositionY', rate * -16);
    });
    //购物车 cart
    $('#cart').on('click', function () {
        var str = '感谢您的购买。\n您购买的\n产品是：';
        str += $('#pro_name').text() + '；\n尺寸是：';
        str += $('#size').text() + '；\n颜色是：';
        str += $('#color').text() + '；\n数量是：';
        str += $('#num_sort').val() + '；\n总价是：';
        str += $('#priceSum').text() + '元。';
        window.confirm(str);
    });
    /*end*/
});