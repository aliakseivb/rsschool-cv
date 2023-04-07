window.onload = function () {

    // const header = document.querySelector('.header');
    // window.onscroll = () => {
    //     if (window.scrollY > 50) {
    //         header.classList.add('header__active');
    //     } else {
    //         header.classList.remove('header__active');
    //     }
    // };
    const burger = document.getElementById('burger');
    const menu = document.getElementsByClassName('menu');
    const popup = document.querySelector('.popup');
    const body = document.querySelector('body')
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);


    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-open');
        menu[0].classList.toggle('open');
        popup.classList.toggle('popup-active');
        if (body.style.position !== 'fixed') {
            body.setAttribute('style', "position: fixed");
        } else {
            body.setAttribute('style', "position: unset");
        }
        ;
    })

    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            menu[0].classList.toggle('open')
            burger.classList.toggle('burger-open');
            popup.classList.toggle('popup-active')
            body.style.position = 'unset';
        }
    })


    popup.addEventListener('click', () => {
        menu[0].classList.remove('open')
        burger.classList.remove('burger-open');
        popup.classList.toggle('popup-active')
        body.style.position = 'unset';
    })

}


let pets = [];
Promise.all([fetch('../src/pets.json'),]
)
    .then(async ([petsResponse]) => {
        const petsJson = await petsResponse.json();
        return [petsJson];
    })
    .then(res => {
        pets = res[0];
        console.log(pets);
    });
// let url = '../src/pets.json'

// const getData = function (url) {
//     new Promise((resolve, reject) =>
//     fetch(url)
//         .then(response => console.log(response.json()))
//         .then(json => console.log(resolve(json)))
//         .catch(error => reject(error))
//     )
//
// }
// getData(fetch(url))
// import data from "../src/pets.json"
// let data
// let pets = []
//
// async function getDAta() {
//     const url = '../src/pets.json';
//     const res = await fetch(url);
//     data = await res.json();
//     console.log(data)
//     data.forEach((item) => pets.push(item));
//     return pets
// }
// console.log(getDAta())
// import pets from '../src/pets.json'
// console.log(pets[0].name)
// const my = JSON.parse(pets)
// console.log(my)

// async function getData (){
//     res = await fetch('../src/pets.json');
//     console.log(res)
//     data = await JSON.parse(res);
//     console.log(data)
//     // data.forEach((item) => pets.push(item));
//     // console.log(pets)
//     // console.log(pets.length)
//     // return pets
// }
// console.log(getData());

// function parseJSON(jsonString) {
//     return new Promise((resolve, reject) => {
//         try {
//             const jsonObject = JSON.parse(jsonString);
//             resolve(jsonObject);
//         } catch (error) {
//             reject(error);
//         }
//     });
// }
// async function run() {
//     const jsonString = pets[0];
//     try {
//         // let res = await fetch(jsonString);
//         const jsonObject = await parseJSON(data);
//         console.log(jsonObject.name); // выводит "John"
//         console.log(jsonObject.type); // выводит 30
//         // console.log(jsonObject.city); // выводит "New York"
//     } catch (error) {
//         console.error(error);
//     }
// }
// console.log(run());
