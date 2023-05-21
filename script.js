const containerElm = document.querySelector(".container")
const colorCodeElm = document.querySelector(".color_code")
const changeColorBtn = document.querySelector(".change_color")

// initial stage
colorCodeElm.textContent = "#F0F8FF"
colorCodeElm.style.color = "#F0F8FF"

// hexColor Code array
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

// add event
changeColorBtn.addEventListener('click', change_color)

// declare fun
function change_color() {
    let hexCode = '#'
    for (let limit = 0; limit <= 6; limit++) {
        hexCode += hex[randomColorCode()]
        colorCodeElm.textContent = hexCode
        colorCodeElm.style.color = hexCode
        containerElm.style.backgroundColor = hexCode
    }
}
// genarate random color code
function randomColorCode() {
  return Math.floor(Math.random() * hex.length)
}

// setInterval(() => {
//     change_color()
// }, 1000);