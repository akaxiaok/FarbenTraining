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
});


function rotateToggle(target) {
    if (target.hasClass('rotate')) {
        target.removeClass('rotate');
    }
    else {
        target.addClass('rotate');
    }
}