const items = document.querySelectorAll('.questions')
const item = document.querySelectorAll('.item')
let answer = document.querySelectorAll('.answer')
console.log(answer)

item.forEach((el, id) => {
    el.addEventListener('click', () => {
        answer[id].classList.toggle('active')
        item[id].classList.toggle('active')
    })
})





