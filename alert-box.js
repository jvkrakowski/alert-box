window.onload = function () {
    $('.close').click(function () { // select menu-button
        $('.alert').hide(); // expands menu
    });

    $('.show-alert').click(function () { // select menu-button
        $('.alert').toggle(); // expands menu
    });
};