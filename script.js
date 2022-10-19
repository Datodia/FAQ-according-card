
// const item = document.querySelector('.item')
// const answer = document.querySelector('.answer')

// item.addEventListener('click', () => {
//     console.log('test')
//     answer.classList.toggle('active')
//     item.classList.toggle('active')
// })

const items = document.querySelectorAll('.questions')
const item = document.querySelectorAll('.item')
let answer = document.querySelectorAll('.answer')
console.log(answer)

item.forEach((el, id) => {
    let it = document.querySelectorAll('.answer')
    el.addEventListener('click', () => {
        el.classList.toggle('active')
        answer.forEach(e => {
            //e.classList.toggle('active')
            console.log(e)
        })
    })
})


// item.forEach((faq) => {
//     faq.addEventListener('click', (e) => {
//         let active = document.querySelectorAll('.item.active')
//         faq.classList.toggle('active')
//         active.forEach((e) => {
//             if (e.classList.contains('active')) {
//                 e.classList.remove('active')
//             }
//         })
//     })
// })

