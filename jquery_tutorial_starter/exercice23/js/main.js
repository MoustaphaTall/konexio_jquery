$(function() {
    $('button').click(function() {
        $('#exercise').css({
            position: 'relative'
        });

        $('#square').animate({
            position: 'absolute',
            right: '0px',
            bottom: '0px'           
        });
    });
});