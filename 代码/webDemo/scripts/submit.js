/**
 * Created by Parad0x on 2016/6/6.
 */
'use strict';
$(function () {
    var priceStart = -1,
        priceEnd = 0,
        timeStart = 0,
        timeEnd = 0;

    $(':checkbox').change(function () {
        if ($(this).is(':checked')) {
            $(this).next().addClass('select selected');
        }
        else {
            $(this).next().removeClass('selected');
        }
    });
    $('#no').change(function () {
        $('.url').prop('disabled', true);
    });
    $('#yes').change(function () {
        $('.url').prop('disabled', false);
    });
    $('.priceSlider li').click(function () {
        var $slider = $('.priceSlider li');

        function clear() {
            for (var i = 0; i < $slider.length; i++) {
                $($slider[i]).removeClass('priceSelect');
            }
        }

        // var $q = $($('.priceBubbles li')[($(this).index())]);
        priceStart = $(this).index();
        $(this).addClass('priceSelect');
        // if (priceEnd===0){
        if (priceStart > priceEnd) {
            priceEnd = priceStart;
            priceStart = 0;
            clear();
            for (var i = priceStart; i <= priceEnd; i++) {
                $($slider[i]).addClass('priceSelect');
            }
            console.log($($slider[priceEnd]).children());
        }
        else if (priceStart < priceEnd) {
            clear();
            for (var i = priceStart; i <= priceEnd; i++) {
                $($slider[i]).addClass('priceSelect');
            }
        }
        else if (priceStart === 0 && priceEnd === 0) {
            $($slider[0]).addClass('priceSelect');
        }
        else if (priceStart === priceEnd) {
            clear();
            priceEnd = 0;
            $('.priceSlider li span').hide();
        }

    }).mouseout(function () {
        var $slider = $('.priceSlider li');
        if (priceEnd !== 0) {
            $('.priceSlider li span').hide();
            $($slider[priceEnd + 1]).children().show();
            $($slider[priceStart]).children().show();
        }
        else if (priceStart === priceEnd) {
            $('.priceSlider li span').hide();
            $($slider[priceEnd + 1]).children().show();
            $($slider[priceStart]).children().show();
        }
    });

    $('.timeSlider li').click(function () {
        var $slider = $('.timeSlider li');

        function clear() {
            for (var i = 0; i < $slider.length; i++) {
                $($slider[i]).removeClass('priceSelect');
            }
        }

        // var $q = $($('.priceBubbles li')[($(this).index())]);
        priceStart = $(this).index();
        $(this).addClass('priceSelect');
        // if (priceEnd===0){
        if (priceStart > priceEnd) {
            priceEnd = priceStart;
            priceStart = 0;
            clear();
            for (var i = priceStart; i <= priceEnd; i++) {
                $($slider[i]).addClass('priceSelect');
            }
            console.log($($slider[priceEnd]).children());
        }
        else if (priceStart < priceEnd) {
            clear();
            for (var i = priceStart; i <= priceEnd; i++) {
                $($slider[i]).addClass('priceSelect');
            }
        }
        else if (priceStart === 0 && priceEnd === 0) {
            $($slider[0]).addClass('priceSelect');
        }
        else if (priceStart === priceEnd) {
            clear();
            priceEnd = 0;
            $('.timeSlider li span').hide();
        }

    }).mouseout(function () {
        var $slider = $('.timeSlider li');
        if (priceEnd !== 0) {
            $('.timeSlider li span').hide();
            $($slider[priceEnd + 1]).children().show();
            $($slider[priceStart]).children().show();
        }
        else if (priceStart === priceEnd) {
            $('.timeSlider li span').hide();
            $($slider[priceEnd + 1]).children().show();
            $($slider[priceStart]).children().show();
        }
    });
    $('.cancel').click(function () {
        $('.submit-success').hide();
    });
    $('.submit').click(function () {
        $('.submit-success').show();
    });
    $('.submit-ensure').click(function () {
        $('.submit-success').hide();
    });
});