document.addEventListener('DOMContentLoaded', function () {
    const angleInput = document.getElementById('angleInput');
    const angleSlider = document.getElementById('angleSlider');
    const radioButtons = document.querySelectorAll('input[name="angle"]');

    // Update all elements when the input value changes
    function updateAngle(value) {
        const angle = value % 360;  // Clamp value between 0 and 360
        angleInput.value = angle;
        angleSlider.value = angle;

        radioButtons.forEach(radio => {
            radio.checked = parseInt(radio.value) === angle;
        });
    }

    // Input box event
    angleInput.addEventListener('input', function () {
        updateAngle(parseInt(angleInput.value));
    });

    // Slider event
    angleSlider.addEventListener('input', function () {
        updateAngle(parseInt(angleSlider.value));
    });

    // Radio button event
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            updateAngle(parseInt(radio.value));
        });
    });

    // Set initial state
    updateAngle(0);
});
