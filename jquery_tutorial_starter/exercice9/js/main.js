function showText() {
    $('#text').css({
        display: 'block'
    });
}

$(function() {
    $('button').click(showText);
});