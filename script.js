// const title = document.querySelector('#test');
// const pg = document.querySelector('#pg')

const item = document.querySelector('.item')
const answer = document.querySelector('.answer')

item.addEventListener('click', () => {
    console.log('test')
    answer.classList.toggle('active')
})


// title.addEventListener('click', () => {
//     // if (pg.style.maxHeight) {
//     //     pg.style.maxHeight = "0px"
//     // } else {
//     //     pg.style.maxHeight = "100px"
//     // }
//     pg.classList.toggle('active')
//     console.log('test')
// })