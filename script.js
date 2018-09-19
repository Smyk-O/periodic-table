$(document).ready(function () {
    var $chem_elem = $('.chem_elem *');

    $('body').click(function (event) {
        $chem_elem.css('opacity', '1');
        if ($(event.target).is('.femly div')) {
            illum(event.target);
        }
    });

    function illum(event) {
        var index = $(event).attr('class');
        $('.chem_elem *:not(.' + index + ' *, .' + index + ', .per)').css('opacity', '0.2');
    };
});