$(function () {

    // Detect ajax errors.
    $(document).ajaxError(function (event, xhr, settings, exception) {

        // We've been kicked out.
        if (xhr.status == '401') {

            // Close all modals.
            $('.modal').modal('hide');

            alert(exception);

            // If we're in the admin redirect to admin login.
            if (window.location.pathname.startsWith('/admin')) {
                alert(APP_URL + '/admin/login');
            } else {
                alert(APP_URL + '/login');
            }
        }

        // We're not authorized.
        if (xhr.status == '403') {

            // Close all modals.
            $('.modal').modal('hide');

            alert(exception);
        }

        // Something terrible happened.
        if (xhr.status == '500') {

            // Close all modals.
            $('.modal').modal('hide');

            alert(exception);
        }
    });
});
