'use strict';

$(document).ready(function () {
    var sliderImageWidth,
        sliderMoveSpeed,
        sliderPauseTime,
        $slider,
        $sliderSlides,
        $sliderSlidesLength,
        currentSlide,
        sliderPrevControl,
        sliderNextControl,
        slidePos;


// CONFIGS
    sliderImageWidth = 980;
    sliderMoveSpeed = 2000;
    sliderPauseTime = 10000;

// SLIDER/SLIDES DOM
    $slider = $('#slides');
    $sliderSlides = $slider.find('.slide');

// SLIDES LENGTH
    $sliderSlidesLength = $sliderSlides.length;

// INIT SLIDE
    currentSlide = 1;

// CONTROLS
    sliderPrevControl = $('#control-prev');
    sliderNextControl = $('#control-next');

    // AUTO PLAY SLIDE
    setInterval(function () {
       if ($(window).width() > 963) {
           if (currentSlide === 1) {
               slidePos = 'up';
           }

           if (currentSlide === $sliderSlidesLength) {
               slidePos = 'down';
           }

           switch (slidePos) {
               case 'up':
                   $slider.animate({'margin-left': '-=' + sliderImageWidth}, sliderMoveSpeed);
                   currentSlide++;
                   break;
               case 'down':
                   $slider.animate({'margin-left': '+=' + sliderImageWidth}, sliderMoveSpeed);
                   currentSlide--;
                   break;
           }
       } else {
           currentSlide = 1;
           $slider.css('margin', '0');
       }
    }, sliderPauseTime);

// PREV CONTROL CLICK
    sliderPrevControl.click(function () {
        if (currentSlide > 1) {
            $slider.animate({'margin-left': '+=' + sliderImageWidth}, sliderMoveSpeed);

            currentSlide--;
        }
    });

// NEXT CONTROL CLICK
    sliderNextControl.click(function () {
        if (currentSlide < $sliderSlidesLength) {
            $slider.animate({'margin-left': '-=' + sliderImageWidth}, sliderMoveSpeed);

            currentSlide++;
        }
    });
});