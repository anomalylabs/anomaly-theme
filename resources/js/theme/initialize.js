$(function () {

    // CSRF ajax requests
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // Radios and checkboxes
    $(':checkbox').radiocheck();
    $(':radio').radiocheck();

    // Nano sliders
    $('.nano').nanoScroller();

    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();
});
