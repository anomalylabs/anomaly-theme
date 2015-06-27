$(function () {

    // Toggle modals.
    $('[data-toggle="modal"][href]').unbind().click(function (e) {

        e.preventDefault();

        $($(e.target).data('target')).appendTo('body').find('.modal-content').load(encodeURI($(e.target).attr('href')));
    });

    // Clear remote modals when closed.
    $('.modal.remote').on('hidden.bs.modal', function () {
        $(this).find('.modal-content').html('<div class="modal-loading"><div class="active loader"></div></div>');
    });
});
