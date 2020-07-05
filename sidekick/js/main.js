$(function () {
    $('.counter').counterUp({
        time: 1500
    });
    new WOW().init();

    var firstModal = $('#firstmodal');
    var rickroll = $('.rickroll');
    firstModal.on('hide.bs.modal', function () {
        rickroll.trigger('pause');
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 200
    });
});