window.scrollTo(0, 0);

$(function () {

    // Tabs
    $('[data-toggle="tab"]').click(function (e) {

        e.preventDefault();

        window.location.hash = $(this).attr('href');

        $(this).tab('show');
    });

    // Get the initial hash and open it's tab.
    var hash = window.location.hash;

    $('[href="' + hash + '"]').tab('show');

    window.scrollTo(0, 0);
});
