$(function () {

    // Clear remote modals when closed.
    $('.modal.remote').on('hidden.bs.modal', function () {

        $(this).removeData('bs.modal');

        $(this).find('.modal-content').html('<div class="modal-loading"><div class="active loader"></div></div>');
    });
});
