'use strict';

var sliderImageWidth,
    sliderMoveSpeed,
    $slider,
    $sliderSlides,
    $sliderSlidesLength,
    currentSlide,
    sliderPrevControl,
    sliderNextControl;

// CONFIGS
sliderImageWidth = 980;
sliderMoveSpeed = 2000;

// SLIDER/SLIDES
$slider = $('#slides');
$sliderSlides = $slider.find('.slide');

// SLIDES LENGTH
$sliderSlidesLength = $sliderSlides.length;

// INIT SLIDE
currentSlide = 1;

// CONTROLS
sliderPrevControl = $('#slider-prev');
sliderNextControl = $('#slider-next');

// PREV CONTROL CLICK
sliderPrevControl.click(function() {
    if (currentSlide > 1) {
        $slider.animate({ 'margin-left': '+=' + sliderImageWidth }, sliderMoveSpeed);

        currentSlide--;
    }
});

// NEXT CONTROL CLICK
sliderNextControl.click(function() {
    if (currentSlide < $sliderSlidesLength) {
        $slider.animate({ 'margin-left': '-=' + sliderImageWidth }, sliderMoveSpeed);

        currentSlide++;
    }
});