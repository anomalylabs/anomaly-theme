$(function () {

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
