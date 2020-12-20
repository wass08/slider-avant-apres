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

  sliderSeparator.addEventListener('mousedown', function () {
    isDragging = true;
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });

  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      let sliderRect = slider.getBoundingClientRect();
      let newWidth = (e.clientX - sliderRect.left) /
      sliderRect.width * 100;
      sliderRange.value = newWidth;
      updateSliderPosition();
    }
  });
});