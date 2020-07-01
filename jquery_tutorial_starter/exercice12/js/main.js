function switchWidth() {
    $('#square').css({
        width: '500px'
    });
}

$(function() {
    $('button').click(switchWidth);
});