$(function () {

    // Initialize confirm buttons.
    $('[data-toggle="confirm"]').click(function (e) {

        e.preventDefault();

        bootbox.confirm($(this).data('message') || DEFAULT_CONFIRM_MESSAGE, function (result) {
            if (result === true) {
                $(e.target).unbind('click')[0].click();
            }
        });
    });
});
