window.onload = function (){

    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
    const burger = document.getElementById('burger');
    const menu = document.getElementsByClassName('menu')
    const menuItem = document.getElementsByClassName('menu__item')

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-open');
        menu[0].classList.toggle('open')
        })

    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            menu[0].classList.toggle('open')
            burger.classList.toggle('burger-open');
        }
     })


    document.addEventListener('click',(el) => {
        if(el.target !== burger){
            menu[0].classList.remove('open')
            burger.classList.remove('burger-open');
        }
        // else {
        //     // burger.addEventListener('click', () => {
        //         burger.classList.toggle('burger-open');
        //         menu[0].classList.toggle('open')
        //     // })
        // }
    })


}