/**
 * Created by goba on 04.04.15.
 */

$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: 'true',
        autoControls: false,
        pager:'true'
    });
    $('.bxslider1').bxSlider({
        auto: 'true',
        autoControls: false,
        pager:'true',
        adaptiveHeight:true
    });



    $('.side-menu li').hover(function(){
        $(this).find('.dropdown-inside').show();
    });
    $('.side-menu li').mouseleave(function(){
        $(this).find('.dropdown-inside').hide();
    });

    $('.f-text,.facebook-logo').hover(function(){
        $('.facebook-logo').css('background','url("images/facebook_icon_active.png") no-repeat scroll 0% 0% transparent');
    });
    $('.f-text,.facebook-logo').mouseleave(function(){
        $('.facebook-logo').css('background','url("images/facebook_icon_normal.png") no-repeat scroll 0% 0% transparent');
    });

    $('.t-text,.twitter-logo').hover(function(){
        $('.twitter-logo').css('background','url("images/twitter_icon_active.png") no-repeat scroll 0% 0% transparent');
    });
    $('.t-text,.twitter-logo').mouseleave(function(){
        $('.twitter-logo').css('background','url("images/twitter_icon_normal.png") no-repeat scroll 0% 0% transparent');
    });

    $('.g-text,.google-logo').hover(function(){
        $('.google-logo').css('background','url("images/g+_icon_active.png") no-repeat scroll 0% 0% transparent');
    });
    $('.g-text,.google-logo').mouseleave(function(){
        $('.google-logo').css('background','url("images/g+_icon_normal.png") no-repeat scroll 0% 0% transparent');
    });

    $('.rss-text,.feeds-logo').hover(function(){
        $('.feeds-logo').css('background','url("images/rss_icon_active.png") no-repeat scroll 0% 0% transparent');
    });
    $('.rss-text,.feeds-logo').mouseleave(function(){
        $('.feeds-logo').css('background','url("images/rss_icon_normal.png") no-repeat scroll 0% 0% transparent');
    });

    $('.p-text,.pinterest-logo').hover(function(){
        $('.pinterest-logo').css('background','url("images/pinterest_icon_active.png") no-repeat scroll 0% 0% transparent');
    });
    $('.p-text,.pinterest-logo').mouseleave(function(){
        $('.pinterest-logo').css('background','url("images/pinterest_icon_normal.png") no-repeat scroll 0% 0% transparent');
    });

    $('.tsocial').hover(function(){
         $('.tsocial').css('color','yellow');
        });
    $('.tsocial').mouseleave(function(){
        $('.tsocial').css('color','white');
    });
    $('.fbg').hover(function(){
        $('.fbg').animate({ opacity: '0.5'});
    });
    $('.fbg').mouseleave(function(){
        $('.fbg').animate({ opacity: '1'});
    });

    var cutfulltext = $('.cuttext').text()
    var cutfulltext1 = $('.cuttext1').text()
    var cutfulltext2 = $('.cuttext2').text()
    function cutfunk(b){
        var fulltext = b.text()
        var newtext =fulltext.substr(0,155);
        b.text(newtext+ '...');
    }

    cutfunk($('.cuttext'));
    cutfunk($('.cuttext1'));
    cutfunk($('.cuttext2'));



    $('.click').click(function() {
        $('#popupWrapper').show();
        $('.popupTitle').text($('.cutTitle').text());
        $('.popupdata').text($('.cutdata').text());
        $('.fulltext').text( cutfulltext);

    });
    $('.click1').click(function() {
        $('#popupWrapper').show();
        $('.fulltext').text($('.cuttext1').text());
        $('.popupTitle').text($('.cutTitle1').text());
        $('.popupdata').text($('.cutdata1').text());
        $('.fulltext').text(cutfulltext1);
    });
    $('.click2').click(function() {
        $('#popupWrapper').show();
        $('.fulltext').text($('.cuttext2').text());
        $('.popupTitle').text($('.cutTitle2').text());
        $('.popupdata').text($('.cutdata2').text());
        $('.fulltext').text(cutfulltext2);
    });
    $('#closeMe').click(function () {
        $('#popupWrapper').hide();

    });

    $('.video,.leftvideo').hover(function(){
        $('.leftvideo').show();
    });
    $('.video').mouseleave(function(){
        $('.leftvideo').hide();
    });

    $('.menu').click(function(){
        $('.dropdown-menu').toggle();
    });
    $( "#datepicker" ).datepicker({
        inline: true
    });
    $( "#tabs" ).tabs();

    $('#loginclick').click(function(){
        $('.loginblock').show();
    });
    $('#loginclick').mouseleave(function(){
        $('.loginblock').hide();
    });
});
