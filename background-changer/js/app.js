const button = document.getElementById("btn")
const color = document.querySelector(".color")
const coppyhex = document.getElementById("coppy")
const colors = ["#ff0000", "#fbb034", "#ffdd00","#00a4e4","#8a7967"]
var hexColor = getRandomNumber()
button.addEventListener("click", () => {
    console.log("click")
    
    const hexColor = getRandomNumber()
    window.hexColor = hexColor
    color.style.color = hexColor
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor

})

function getRandomNumber(){
    return ('#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
}

coppyhex.addEventListener("click", () => {
    navigator.clipboard.writeText(window.hexColor);
    console.log(hexColor)
    color.textContent = hexColor
    new Toast({
        title: 'Цвет был скопирован',
        text: hexColor,
        
        autohide: true,
        interval: 4000
      });
})




