const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const luckyOne = document.querySelector('.sorte1')
const luckyTwo = document.querySelector('.sorte2')
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
//Eventos
btnTry.addEventListener('click',handleTryClick )
btnReset.addEventListener('click',toggleScreen)
//funções
function handleTryClick() {
    if(randomNumber >= 5) {
        luckyOne.classList.toggle("hide")
        luckyTwo.classList.toggle("hide")
        toggleScreen()
    }else {
        toggleScreen()
    }
    
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    randomNumber = Math.round(Math.random() * 10)
}
