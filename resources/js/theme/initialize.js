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
        $(this).find('.modal-content').html('<div class="modal-loading"><div class="active loader"></div></div>');
    });

    // Initialize confirm buttons.
    $('[data-toggle="confirm"]').click(function (e) {

        e.preventDefault();

        bootbox.confirm($(this).data('message') || DEFAULT_CONFIRM_MESSAGE, function (result) {
            if (result === true) {
                $(e.target).unbind('click')[0].click();
            }
        });
    });

    // Initialize prompt buttons.
    $('[data-toggle="prompt"]').click(function (e) {

        e.preventDefault();

        bootbox.prompt($(this).data('message') || DEFAULT_PROMPT_MESSAGE, function (result) {

            var match = $(e.target).data('match') || 'yes';

            if (result === match) {
                $(e.target).unbind('click')[0].click();
            } else if (typeof result == 'string') {
                $('.bootbox.modal')
                    .find('.modal-dialog')
                    .addClass('animate shake');

                setTimeout(function () {
                    $('.bootbox.modal')
                        .find('.modal-dialog')
                        .removeClass('shake')
                        .removeClass('animate')
                }, 1000);

                return false;
            }
        });
    });
});
