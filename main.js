let sliders = document.querySelectorAll('.slider');

sliders.forEach(function (slider) {
  let sliderRange = slider.querySelector('.slider__range');
  let sliderBefore = slider.querySelector('.slider__before');
  let sliderSeparator = slider.querySelector('.slider__separator');

  function updateSliderPosition() {
    sliderBefore.style = `width:${sliderRange.value}%`;
    sliderSeparator.style = `left:${sliderRange.value}%`;
  }

  sliderRange.addEventListener('input', updateSliderPosition);

  let isDragging = false;

  sliderSeparator.addEventListener('mousedown', function() {
    isDragging = true;
  });

  sliderSeparator.addEventListener('touchstart', function() {
      isDragging = true;
  });
  document.addEventListener('mouseup', function() {
      isDragging = false;
  });
  document.addEventListener('touchend', function() {
      isDragging = false;
  });

  document.addEventListener('mousemove', function (e) {
    processMove(e.clientX);
  });

  document.addEventListener('touchmove', function (e) {
    processMove(e.touches[0].clientX);
  });

  function processMove(x) {
      if (isDragging) {
          let sliderRect = slider.getBoundingClientRect();
          let newWidth = (x - sliderRect.left) /
              sliderRect.width * 100;
          sliderRange.value = newWidth;
          updateSliderPosition();
      }
  }
});
