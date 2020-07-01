function replaceAttr() {
    $('#text').attr('class', 'float-right');
}

$(function() {
    $('button').click(replaceAttr);
});