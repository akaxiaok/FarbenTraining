/**
 * Created by Parad0x on 2016/5/30.
 */
'use strict';
$(function () {
    /*改变主题 change theme*/
    $("#theme").children().each(function () {
        this.onclick = function () {
            $("#css").attr('href', 'styles/theme/theme_' + this.id + '.css');
        }
    });
    /*折叠 collapse*/
    $('.arrow').click(function () {
        // this.parent().parent().child(".collapseable").slideToggle();
        $('#' + $(this).attr('data-target')).slideToggle();
        rotateToggle($(this));
    });
    $('.m-expanded').click(function () {
        $(this).children('ul').slideToggle();
    });
    /*滚动 scroll*/
    setInterval(function () {
            $('#newsScroll').animate({top: '-20px'}, 1000).animate({top: '0'}, 0);
            setTimeout(function () {
                var li = $('.newsScroll li:first-child');
                $('#newsScroll').append('<li>' + li.html() + '</li>');
                li.remove();
            }, 1000);
        }
        , 3000);
});
function rotateToggle(target) {
    if (target.hasClass('rotate')) {
        target.removeClass('rotate');
    }
    else {
        target.addClass('rotate');
    }
}
