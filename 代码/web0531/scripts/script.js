/**
 * Created by Parad0x on 2016/5/30.
 */
'use strict';
var ads = 0,
    adPosition = 0,
    listPosition = 0;
$(function () {
    /*改变主题 change theme*/
    $("#theme").children().each(function () {
        this.onclick = function () {
            $("#css").attr('href', 'styles/theme/theme_' + this.id + '.css');
            $(this).css('background-Position-Y', '-15px');
            $(this).siblings().css('background-Position-Y', '0');
        }
    });
    /*折叠 collapse*/
    $('.arrow').click(function () {
        // this.parent().parent().child(".collapseable").slideToggle();
        $('#' + $(this).attr('data-target')).slideToggle();
        rotateToggle($(this));
    });
    $('.m-expanded span').click(function () {
        $(this).siblings('ul').slideToggle();
        bgToggle($(this).parent('.m-expanded'));
    });
    /*新闻滚动 news scroll*/
    setInterval(function () {
            $('#newsScroll').animate({top: '-20px'}, 1000).animate({top: '0'}, 0);
            setTimeout(function () {
                var li = $('.newsScroll li:first-child');
                $('#newsScroll').append('<li>' + li.html() + '</li>');
                li.remove();
            }, 1000);
        }
        , 3000);
    /*划过 hover*/
    $('.num li').on('mouseover', function () {
        hover($(this));
        // setTimeout(function () {
        //         $('.slider img').animate({top: ($('.hover').html() - 1) * -150 + 'px'}, 500);
        // }, 1000);
        // $('.slider img').animate({top: ($('.hover').html() - 1) * -150 + 'px'}, {speed: 500, queue: false});
        adPosition = (this.innerHTML - 1) * -150
        $('.slider img').animate({top: adPosition + 'px'}, {speed: 500, queue: false});
    });
    $('.ad').on('mouseleave', function () {
        adScroll();
    }).on('mouseover', function () {
        adScrollStop();
    });
    /*广告滚动 ads scroll*/
    adScroll();

    /*新品列表翻页 product list page*/
    $('.goLeft').on('click', function () {
        var list = $('.prolist');
        if (listPosition >= 0) {
            listPosition = -1232;
            list.animate({left: listPosition + 'px'}, 1000);
        }
        else {
            listPosition += 616;
            list.animate({left: listPosition + 'px'}, 1000);
        }
    });
    $('.goRight').on('click', function () {
        var list = $('.prolist');
        if (listPosition <= -1232) {
            listPosition = 0;
            list.animate({left: listPosition + 'px'}, 1000);
        }
        else {
            listPosition -= 616;
            list.animate({left: listPosition + 'px'}, 1000);
        }
    });
    /*新品指向 product pointed*/
    $('.container').on('mouseover',function () {
        $(this).children('div').addClass('zoom');
    });
    $('.container').on('mouseleave',function () {
        $(this).children('div').removeClass('zoom');
    });
});

function bgToggle(target) {
    if (target.css('background').includes('expanded')) {
        var url = target.css('background').replace(/expanded/, 'collapsed');
        target.css({background: url});
    }
    else {
        var url = target.css('background').replace(/collapsed/, 'expanded');
        target.css({background: url});
    }
}

function rotateToggle(target) {
    if (target.hasClass('rotate')) {
        target.removeClass('rotate');
    }
    else {
        target.addClass('rotate');
    }
}
function hover(target) {
    target.addClass('hover');
    target.siblings().removeClass('hover');
}
function adScroll() {
    ads = setInterval(function () {
        if (adPosition <= -600) {
            adPosition = 0;
        }
        else {
            adPosition -= 150;
        }
        hover($($('.num').children()[adPosition / -150]));
        $('.slider img').animate({top: adPosition + 'px'}, 1000);
    }, 3000);
}
function adScrollStop() {
    clearInterval(ads);
}
