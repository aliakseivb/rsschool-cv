window.onload = function () {

    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
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
        if(body.style.position !== 'fixed'){
            body.setAttribute('style',"position: fixed");
        }else {
            body.setAttribute('style',"position: unset");
        };
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