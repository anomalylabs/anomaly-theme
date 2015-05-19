$(function () {

    // Toggle navigation.
    $('[data-toggle="navigation"]').click(function (e) {

        e.preventDefault();

        $('#navigation').toggleClass('open');
    });
});
