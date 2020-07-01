function switchFontSize() {
    $('#text').css({
        fontSize: '50px'
    });
}

$(function() {
    $('button').click(switchFontSize);
})