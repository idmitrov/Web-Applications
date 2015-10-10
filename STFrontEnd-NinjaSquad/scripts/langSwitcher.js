'use strict';

// TOGGLE ENG LANG
$('#lang-eng').click(function() {
    var langFR;

    langFR = $('#lang-fr');

    if (langFR.hasClass('lang-active')) {
        langFR.removeClass('lang-active');
    }

    $('#lang-eng').addClass('lang-active');
});

// TOGGLE FR LANG
$('#lang-fr').click(function () {
    var langENG;

    langENG = $('#lang-eng');

    if (langENG.hasClass('lang-active')) {
        langENG.removeClass('lang-active');
    }

    $('#lang-fr').addClass('lang-active');
});