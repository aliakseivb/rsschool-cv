window.onload = function () {

    // ----- >>>> НЕ РЕАЛИЗОВАНО/НЕ ИСПОЛЬЗОВАЛОСЬ
    // const header = document.querySelector('.header');
    // window.onscroll = () => {
    //     if (window.scrollY > 50) {
    //         header.classList.add('header__active');
    //     } else {
    //         header.classList.remove('header__active');
    //     }
    // };

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
    const pets = []

    async function getDAta() {
        const url = 'https://github.com/AlexBoronin/rsschool-cv/tree/shelter/shelter/source/pets.json';
        const res = await fetch(url);
        const data = await res.json();
        data.forEach((item) => pets.push(item));
        makePetsArr(pets);
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

    function getRandomInt() {
        return Math.floor(Math.random() * 8);
    }

    /* ПАГИНАЦИЯ */
    const PAGIN = document.querySelector('.page-wrapper');
    const PREV_DOUBLE = document.querySelector('#prev-double');
    const PREV = document.querySelector('#prev');
    const NUM_PAGE = document.querySelector('.slider__item.slider-center');
    const NEXT_DOUBLE = document.querySelector('#next-double');
    const NEXT = document.querySelector('#next');
    const NAV = document.querySelector('#nav');
    const LEFT = document.querySelector('#left');
    const CENTER = document.querySelector('#center');
    const RIGHT = document.querySelector('#right');
    const PAGES = document.querySelector('#pages');
    const ELEM = document.querySelectorAll('.main__item')
    let count = 1;
    let petsArr = [];
    let petsArr300 = [];
    let petsArr708 = [];
    let side = '';

    const movePrevDouble = () => {
        PREV_DOUBLE.classList.remove('active');
        PREV.classList.remove('active');
        if (+NUM_PAGE.textContent === 1) {
            return false
        }
        count = 1;
        NUM_PAGE.textContent = count
        NEXT_DOUBLE.classList.remove('deactive');
        NEXT.classList.remove('deactive');
        for (let i = 0; i < petsArr[count - 1].length; i++) {
            let appendElem = document.createElement('div')
            appendElem.classList.add('main__item');
            appendElem.innerHTML = `<img src="${petsArr[count - 1][i].src}" alt="${petsArr[count - 1][i].name}" class="pets__item-image"><div class="pets__item--name">${petsArr[count - 1][i].name}</div><a href="#1" class="pets__item-button">Learn more</a>`
            LEFT.append(appendElem)
        }

        PAGES.classList.add('move-prev');
        NEXT.removeEventListener('click', moveNext);
        PREV.removeEventListener('click', movePrev);
        NEXT_DOUBLE.removeEventListener('click', moveNextDouble);
        PREV_DOUBLE.removeEventListener('click', movePrevDouble);
        side = 'prevMax';
    }
    const moveNextDouble = () => {
        PREV_DOUBLE.classList.add('active');
        PREV.classList.add('active');
        if (+NUM_PAGE.textContent === 6) {
            return false
        }
        count = 6;
        NUM_PAGE.textContent = count
        NEXT_DOUBLE.classList.add('deactive');
        NEXT.classList.add('deactive');
        for (let i = 0; i < petsArr[count - 1].length; i++) {
            let appendElem = document.createElement('div')
            appendElem.classList.add('main__item');
            appendElem.innerHTML = `<img src="${petsArr[count - 1][i].src}" alt="${petsArr[count - 1][i].name}" class="pets__item-image"><div class="pets__item--name">${petsArr[count - 1][i].name}</div><a href="#1" class="pets__item-button">Learn more</a>`
            RIGHT.append(appendElem)
        }
        PAGES.classList.add('move-next');
        NEXT.removeEventListener('click', moveNext);
        PREV.removeEventListener('click', movePrev);
        NEXT_DOUBLE.removeEventListener('click', moveNextDouble);
        side = 'nextMax';
    }
    const moveNext = () => {
        if (PAGIN.offsetWidth === 300) {
            if (+NUM_PAGE.textContent === 16) {
                count = 16
                return false
            }
            PREV_DOUBLE.classList.add('active');
            PREV.classList.add('active');
            NUM_PAGE.textContent = count + 1;
            if (+NUM_PAGE.textContent === 16) {
                NEXT_DOUBLE.classList.add('deactive');
                NEXT.classList.add('deactive');
            }
            makePetsArr(pets)
            for (let i = 0; i < 3; i++) {
                let appendElem = document.createElement('div')
                appendElem.classList.add('main__item');
                appendElem.innerHTML = `<img src="${petsArr300[count - 1][i].src}" alt="${petsArr300[count - 1][i].name}" class="pets__item-image"><div class="pets__item--name">${petsArr300[count - 1][i].name}</div><a href="#1" class="pets__item-button">Learn more</a>`
                RIGHT.append(appendElem)
            }
        } else if (PAGIN.offsetWidth === 708) {
            if (+NUM_PAGE.textContent === 8) {
                count = 8
                return false
            }
            PREV_DOUBLE.classList.add('active');
            PREV.classList.add('active');
            NUM_PAGE.textContent = count + 1;
            if (+NUM_PAGE.textContent === 8) {
                NEXT_DOUBLE.classList.add('deactive');
                NEXT.classList.add('deactive');
            }
            makePetsArr(pets)
            for (let i = 0; i < 7; i++) {
                let appendElem = document.createElement('div')
                appendElem.classList.add('main__item');
                appendElem.innerHTML = `<img src="${petsArr708[count - 1][i].src}" alt="${petsArr708[count - 1][i].name}" class="pets__item-image"><div class="pets__item--name">${petsArr708[count - 1][i].name}</div><a href="#1" class="pets__item-button">Learn more</a>`
                RIGHT.append(appendElem)
            }
        } else {
            if (+NUM_PAGE.textContent === 6) {
                count = 6
                return false
            }
            PREV_DOUBLE.classList.add('active');
            PREV.classList.add('active');
            NUM_PAGE.textContent = count + 1;
            if (+NUM_PAGE.textContent === 6) {
                NEXT_DOUBLE.classList.add('deactive');
                NEXT.classList.add('deactive');
            }
            for (let i = 0; i < petsArr[count].length; i++) {
                let appendElem = document.createElement('div')
                appendElem.classList.add('main__item');
                appendElem.innerHTML = `<img src="${petsArr[count][i].src}" alt="${petsArr[count][i].name}" class="pets__item-image"><div class="pets__item--name">${petsArr[count][i].name}</div><a href="#1" class="pets__item-button">Learn more</a>`
                RIGHT.append(appendElem)
            }
            PAGES.classList.add('move-next');
        }
        count += 1;
        NEXT.removeEventListener('click', moveNext);
        PREV.removeEventListener('click', movePrev);
        NEXT_DOUBLE.removeEventListener('click', moveNextDouble);
        side = 'next';
    }

    const movePrev = () => {
        if (+NUM_PAGE.textContent === 1) {
            return false
        }
        NEXT_DOUBLE.classList.remove('deactive');
        NEXT.classList.remove('deactive');
        count -= 1;
        NUM_PAGE.textContent = count;
        if (+NUM_PAGE.textContent === 1) {
            PREV_DOUBLE.classList.remove('active');
            PREV.classList.remove('active');
        }
        if (PAGIN.offsetWidth === 300) {
            makePetsArr(pets)
            for (let i = 0; i < 3; i++) {
                let appendElem = document.createElement('div')
                appendElem.classList.add('main__item');
                appendElem.innerHTML = `<img src="${petsArr300[count - 1][i].src}" alt="${petsArr300[count - 1][i].name}" class="pets__item-image"><div class="pets__item--name">${petsArr300[count - 1][i].name}</div><a href="#1" class="pets__item-button">Learn more</a>`
                LEFT.append(appendElem)
            }
            PAGES.classList.add('move-prev-min')
        } else if (PAGIN.offsetWidth === 708) {
            makePetsArr(pets)
            for (let i = 0; i < 7; i++) {
                let appendElem = document.createElement('div')
                appendElem.classList.add('main__item');
                appendElem.innerHTML = `<img src="${petsArr708[count - 1][i].src}" alt="${petsArr708[count - 1][i].name}" class="pets__item-image"><div class="pets__item--name">${petsArr708[count - 1][i].name}</div><a href="#1" class="pets__item-button">Learn more</a>`
                LEFT.append(appendElem)
            }
            PAGES.classList.add('move-prev-larg')
        } else {
            for (let i = 0; i < petsArr[count].length; i++) {
                let appendElem = document.createElement('div')
                appendElem.classList.add('main__item');
                appendElem.innerHTML = `<img src="${petsArr[count - 1][i].src}" alt="${petsArr[count - 1][i].name}" class="pets__item-image"><div class="pets__item--name">${petsArr[count - 1][i].name}</div><a href="#1" class="pets__item-button">Learn more</a>`
                LEFT.append(appendElem)
            }
            PAGES.classList.add('move-prev')
        }

        NEXT.removeEventListener('click', moveNext);
        PREV.removeEventListener('click', movePrev);
        NEXT_DOUBLE.removeEventListener('click', moveNextDouble);
        side = 'prev';
    }

    NEXT.addEventListener('click', moveNext);
    PREV.addEventListener('click', movePrev);
    NEXT_DOUBLE.addEventListener('click', moveNextDouble);
    PREV_DOUBLE.addEventListener('click', movePrevDouble);

    PAGES.addEventListener('transitionend', (transitionEvent) => {
        if (transitionEvent.propertyName === 'transform' && side === 'next') {
            PAGES.classList.remove('move-next-larg');
            PAGES.classList.remove('move-next-min');
            PAGES.classList.remove('move-next');
            CENTER.innerHTML = '';
            CENTER.innerHTML = RIGHT.innerHTML;
            RIGHT.innerHTML = '';
        }
        if (transitionEvent.propertyName === 'transform' && side === 'prev') {
            PAGES.classList.remove('move-prev');
            PAGES.classList.remove('move-prev-larg');
            PAGES.classList.remove('move-prev-min');
            CENTER.innerHTML = '';
            CENTER.innerHTML = LEFT.innerHTML;
            LEFT.innerHTML = '';
        }
        if (transitionEvent.propertyName === 'transform' && side === 'nextMax') {
            PAGES.classList.remove('move-next');
            PAGES.classList.remove('move-next-larg');
            PAGES.classList.remove('move-next-min');
            CENTER.innerHTML = '';
            CENTER.innerHTML = RIGHT.innerHTML;
            RIGHT.innerHTML = '';
        }
        if (transitionEvent.propertyName === 'transform' && side === 'prevMax') {
            PAGES.classList.remove('move-prev');
            PAGES.classList.remove('move-prev-larg');
            PAGES.classList.remove('move-prev-min');
            CENTER.innerHTML = '';
            CENTER.innerHTML = LEFT.innerHTML;
            LEFT.innerHTML = '';
        }
        NEXT.addEventListener('click', moveNext);
        PREV.addEventListener('click', movePrev);
        NEXT_DOUBLE.addEventListener('click', moveNextDouble);
        PREV_DOUBLE.addEventListener('click', movePrevDouble);
    });

    function makePetsArr() {
        let i = 0;
        if (document.documentElement.clientWidth >= 760 && document.documentElement.clientWidth < 1280) {
            petsArr708.push(pets.slice(0, 6));
            while (i < 7) {
                let num = [];
                let tmpArr = [];
                for (let j = 0; j < 6; j++) {
                    let random = getRandomInt();
                    if (!num.includes(random)) {
                        tmpArr.push(pets[random]);
                        num.push(random);
                    } else {
                        j--
                    }
                }
                petsArr708.push(tmpArr);
                i++
            }
            console.log(petsArr)
        } else if (document.documentElement.clientWidth < 760) {
            petsArr300.push(pets.slice(0, 3));
            while (i < 16) {
                let num = [];
                let tmpArr = [];
                for (let j = 0; j < 3; j++) {
                    let random = getRandomInt();
                    if (!num.includes(random)) {
                        tmpArr.push(pets[random]);
                        num.push(random);
                    } else {
                        j--
                    }
                }
                petsArr.push(tmpArr);
                i++
            }
            console.log(petsArr)
        } else {
            petsArr.push(pets)
            while (i < 5) {
                let num = [];
                let tmpArr = [];
                for (let j = 0; j < pets.length; j++) {
                    let random = getRandomInt();
                    if (!num.includes(random)) {
                        tmpArr.push(pets[random]);
                        num.push(random);
                    } else {
                        j--
                    }
                }
                petsArr.push(tmpArr);
                i++
            }
            console.log(petsArr)
        }
    }

    // const ELEM_POPUP_OPACITY = document.querySelector('.pets_popup_opacity');
    // const PETS_POPUP = document.querySelector('.popup_wrap');
    // const PETS_DESC = document.querySelector('.pets_popup_desc');
    // const POPUP_CLOSE = document.querySelector('.cross-close')
    //
    // ELEM.forEach((el) => el.addEventListener('click', (ev) => {
    //     let elemText = ev.currentTarget.children[1].textContent.trim()
    //     for (let i = 0; i < pets.length; i++) {
    //         if (pets[i].name === elemText) {
    //             PETS_DESC.children[0] = pets[i].name;
    //             PETS_DESC.children[1] = pets[i].type + ' - ' + pets[i].breed;
    //             PETS_DESC.children[2] = pets[i].description;
    //             PETS_DESC.children[3].innerHTML = `Age: <span>${pets[i].age}</span>`;
    //             PETS_DESC.children[4].innerHTML = `Inoculations: <span>${pets[i].inoculations}</span>`;
    //             PETS_DESC.children[5].innerHTML = `Diseases: <span>${pets[i].diseases}</span>`;
    //             PETS_DESC.children[6].innerHTML = `Parasites: <span>${pets[i].parasites}</span>`;
    //             ELEM_POPUP_OPACITY.classList.add('visible');
    //             PETS_POPUP.classList.add('open');
    //         }
    //     }
    //
    // }))
    // POPUP_CLOSE.addEventListener('click', () => {
    //     ELEM_POPUP_OPACITY.classList.remove('visible');
    //     PETS_POPUP.classList.remove('open');
    // })
}






