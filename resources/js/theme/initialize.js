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

    // Tabs
    $('[data-toggle="tab"]').click(function (e) {

        e.preventDefault();

        $(this).tab('show');
    });

    // Nano sliders
    $('.nano').nanoScroller();

    // When hiding modals destroy them.
    $('.modal').on('hidden.bs.modal', function () {
        $(this).removeData('bs.modal');
    });

    // Toggle navigation.
    $('[data-toggle="navigation"]').click(function (e) {

        e.preventDefault();

        $('#navigation').toggleClass('open');
    });

    // Toggle modals.
    $('[data-toggle="modal"][href]').click(function (e) {

        e.preventDefault();

        $($(e.target).data('target')).appendTo('body').find('.model-content').load($(e.target).attr('href'));
    });

    // Clear remote modals when closed.
    $('.modal.remote').on('hidden.bs.modal', function () {
        $(this).find('.modal-content').html('');
    });
});
