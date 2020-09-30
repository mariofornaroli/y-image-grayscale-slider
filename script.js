window.addEventListener('load', () => {

    const slider = document.getElementById('mySlider');

    const setGrayScale = function(sliderValue) {
        const imgEl = document.getElementById('myImg');
        imgEl.style.filter = `grayscale(${sliderValue}%)`
    }

    slider.oninput = function() {
        setGrayScale(this.value);
    }

    /* Set grayscale value on app loaded */
    setGrayScale(slider.value)

})