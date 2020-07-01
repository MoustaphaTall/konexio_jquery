function switchColor() {
    $('#square').css({
        backgroundColor: 'red'
    });
}

$(function() {
    $('button').click(switchColor);
});