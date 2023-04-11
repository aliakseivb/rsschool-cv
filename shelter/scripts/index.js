window.onload = function () {

    // const header = document.querySelector('.header');
    // window.onscroll = () => {
    //     if (window.scrollY > 50) {
    //         header.classList.add('header__active');
    //     } else {
    //         header.classList.remove('header__active');
    //     }
    // };


    const pets = []
    let petsArr = []

    // Promise.all([fetch('../source/pets.json'),]
    // )
    //     .then(async ([petsResponse]) => {
    //         const petsJson = await petsResponse.json();
    //         return [petsJson];
    //     })
    //     .then(res => {
    //         pets = res[0];
    //         console.log(pets);
    //     });
    async function getDAta() {
        const url = 'https://github.com/AlexBoronin/rsschool-cv/tree/shelter/shelter/source/pets.json';
        const res = await fetch(url);
        const data = await res.json();
        data.forEach((item) => pets.push(item));
        let i = 0;
        petsArr.push(pets)
        while (i < 6) {
            let num = [];
            let newArr = [];
            for (let j = 0; j < pets.length; j++) {
                let random = getRandomInt();
                if (!num.includes(random)) {
                    newArr.push(pets[random]);
                    num.push(random);
                }else {
                    j--
                }
                num = [];
            }
            petsArr.push(newArr);
            i++

        }
    }

    getDAta()

    /* БУРГЕР */
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
    });

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


    /* КАРУСЕЛЬ */

    const BTN_LEFT = document.querySelector('#slider__prev');
    const BTN_RIGHT = document.querySelector('#slider__next');
    const PETS_CARUSEL = document.querySelector('#pets-carusel');
    const CARD = document.getElementsByClassName('pets__item');
    const CARD_BUTTON = document.getElementsByClassName('pets__item-button');
    const ACTIVE_ELEM = document.querySelectorAll('#items-active .pets__item');
    // const ACTIVE_ITEM = document.querySelectorAll('#items-active');
    const LEFT_ELEM = document.querySelectorAll('#items-left .pets__item');
    const RIGHT_ELEM = document.querySelectorAll('#items-right .pets__item');
    let side = '';


    const moveLeft = () => {
        PETS_CARUSEL.classList.add('move-left');
        BTN_LEFT.removeEventListener('click', moveLeft);
        BTN_RIGHT.removeEventListener('click', moveRight);
        for (let i = 0; i < CARD.length; i++) {
            CARD[i].classList.remove('img-eff')
            CARD_BUTTON[i].classList.remove('button-eff')
        }
        side = 'left';
    };

    const moveRight = () => {
        PETS_CARUSEL.classList.add('move-right');
        BTN_LEFT.removeEventListener('click', moveLeft);
        BTN_RIGHT.removeEventListener('click', moveRight);
        for (let i = 0; i < CARD.length; i++) {
            CARD[i].classList.remove('img-eff')
            CARD_BUTTON[i].classList.remove('button-eff')
        }
        side = 'right';
    };

    function getRandomInt() {
        return Math.floor(Math.random() * 8);
    }

    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);

    PETS_CARUSEL.addEventListener('transitionend', (transitionEvent) => {
        if (transitionEvent.propertyName === 'transform' && side === 'left') {
            PETS_CARUSEL.classList.remove('move-left');
            document.querySelector('#items-active').innerHTML = document.querySelector('#items-left').innerHTML;
            createElements();
        }
        BTN_LEFT.addEventListener('click', moveLeft);
        if (transitionEvent.propertyName === 'transform' && side === 'right') {
            PETS_CARUSEL.classList.remove('move-right');
            document.querySelector('#items-active').innerHTML = document.querySelector('#items-right').innerHTML;
            createElements();
        }

        BTN_RIGHT.addEventListener('click', moveRight);
        for (let i = 0; i < CARD.length; i++) {
            CARD[i].classList.add('img-eff')
            CARD_BUTTON[i].classList.add('button-eff')
        }
    })

    function createElements() {
        let numero
        if (side === 'left') {
            for (let i = 0; i < ACTIVE_ELEM.length; i++) {
                numero = [];
                for (let j = 0; j < LEFT_ELEM.length; j++) {
                    let random = getRandomInt();
                    if (!pets[random].src.includes(ACTIVE_ELEM.item(i).children[0].getAttribute('src')) && !numero.includes(random)) {
                        LEFT_ELEM.item(j).children[0].setAttribute('src', `${pets[random].src.slice(1)}`);
                        LEFT_ELEM.item(j).children[1].textContent = pets[random].name;
                        numero.push(random);
                    } else {
                        j--
                    }
                }
            }
        }
        if (side === 'right') {
            for (let i = 0; i < ACTIVE_ELEM.length; i++) {
                numero = [];
                for (let j = 0; j < RIGHT_ELEM.length; j++) {
                    let random = getRandomInt();
                    if (!pets[random].src.includes(ACTIVE_ELEM.item(i).children[0].getAttribute('src')) && !numero.includes(random)) {
                        RIGHT_ELEM.item(j).children[0].setAttribute('src', `${pets[random].src.slice(1)}`);
                        RIGHT_ELEM.item(j).children[1].textContent = pets[random].name;
                        numero.push(random);
                    } else {
                        j--
                    }
                }
            }
        }
    }

    const ELEM = document.querySelectorAll('.pets__item');
    const ELEM_POPUP_OPACITY = document.querySelector('.pets_popup_opacity');
    const PETS_POPUP = document.querySelector('.popup_wrap');
    const PETS_DESC = document.querySelector('.pets_popup_desc');
    const POPUP_CLOSE = document.querySelector('.cross-close');
    let POPUP_IMG = document.querySelector('#popup_img');


    ELEM.forEach((el) => el.addEventListener('click', (ev) => {
        let elemText = ev.currentTarget.children[1].textContent.trim();
        for (let i = 0; i < pets.length; i++) {
            if (pets[i].name === elemText) {
                POPUP_IMG.setAttribute('src', `${pets[i].src}`)
                PETS_DESC.children[0].textContent = pets[i].name;
                PETS_DESC.children[1].textContent = pets[i].type + ' - ' + pets[i].breed;
                PETS_DESC.children[2].textContent = pets[i].description;
                PETS_DESC.children[3].innerHTML = `Age:&nbsp<span>${pets[i].age}</span>`;
                PETS_DESC.children[4].innerHTML = `Inoculations:&nbsp<span> ${pets[i].inoculations}</span>`;
                PETS_DESC.children[5].innerHTML = `Diseases:&nbsp<span>${pets[i].diseases}</span>`;
                PETS_DESC.children[6].innerHTML = `Parasites:&nbsp<span>${pets[i].parasites}</span>`;
                ELEM_POPUP_OPACITY.classList.add('visible');
                PETS_POPUP.classList.add('open');
            }
        }

    }))
    POPUP_CLOSE.addEventListener('click', () => {
            ELEM_POPUP_OPACITY.classList.remove('visible');
            PETS_POPUP.classList.remove('open');
    })
}






