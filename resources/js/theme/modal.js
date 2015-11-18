$(function () {

    // Clear remote modals when closed.
    $('.modal.remote').on('hidden.bs.modal', function () {

        $(this).removeData('bs.modal');

        $(this).find('.modal-content').html('<div class="modal-loading"><div class="active loader"></div></div>');
    });

    // Handle ajax links in modals.
    $('.modal').on('click', 'a.ajax', function (e) {

        e.preventDefault();

        var wrapper = $(this).closest('.modal-content');

        wrapper.html('<div class="modal-loading"><div class="active loader"></div></div>');

        $.get($(this).attr('href'), function (html) {
            wrapper.html(html);
        });
    });
});
