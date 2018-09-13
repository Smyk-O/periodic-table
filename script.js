$(document).ready(function () {
    $('.femly *').click(function (event) {
        $('.chem_elem *').css('opacity', '1');
        var $target = $(event.target);
        var index = $target.attr('class');
        console.log(index)
        illum(index);
    });
    function illum(index) {
        $('.chem_elem *:not(.' + index + ' *, .' + index + ', .per)').css('opacity', '0.2');
    };
});