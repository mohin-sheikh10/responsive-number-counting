const displayValues = document.querySelectorAll('.num');
const initialValue = 5000;
displayValues.forEach(value => {
    let startValue = 0;
    let endValue = parseInt(value.getAttribute('data-val'));
    console.log(endValue)
    let duration = Math.floor(initialValue / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        value.innerHTML = startValue;
        if(startValue === endValue) {
            clearInterval(counter)
        }
    }, duration)
})