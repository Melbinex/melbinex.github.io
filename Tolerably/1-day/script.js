const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


var curentActive = 1
next.addEventListener('click', () => {
    curentActive++
    console.log(curentActive)
    if (curentActive > circles.length) {
        curentActive = circles.length
    }
    update()
})

var curentActive = 1
prev.addEventListener('click', () => {
    curentActive--
    if (curentActive < 1) {
        curentActive = 1
    }
    update()
})





function update() {
    circles.forEach((circle, index) => {
        if (index < curentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    var activeCircle = document.querySelectorAll('.active')

    progress.style.width = (activeCircle.length - 1) / (circles.length - 1) * 100 + '%'
    length * 100 + '%'

    // progress.style.width = (activeCircle.length - 1) / (circles.length -1) * 100 + '%'   
    // length * 100  + '%'
    if (curentActive === 1) {
        prev.disabled = true;
    } else if (curentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false
    }

}