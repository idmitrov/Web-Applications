'use strict';

$(document).ready(function () {
    // PROFILE MENU
    $('#profile').click(function () {
        $('#profile-sub-menu').fadeToggle();
    });

    // TOGGLE MENU
    $('#main-menu-toggle').click(function () {
        $('#main-menu').fadeToggle();
    });

    // FIND SOLUTIONS

    // #1 OPEN
    $('#first-solution').click(function() {
        $('#first-solution').toggleClass('solution-close');
        $('#first-solution-info').fadeToggle();
    });

    // #1 CLOSE
    $('#close-first-solution').click(function () {
        $('#first-solution').toggleClass('solution-close');
        $('#first-solution-info').fadeOut();
    });

    // #2 OPEN
    $('#second-solution').click(function() {
        $('#second-solution-info').fadeToggle();
        $('#second-solution').toggleClass('solution-close');
    });

    // #2 CLOSE
    $('#close-second-solution').click(function () {
        $('#second-solution').toggleClass('solution-close');
        $('#second-solution-info').fadeOut();
    });
});