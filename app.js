// nav mobile burger 
let navBurger = document.querySelector('.header-burger');
let burgerText = document.querySelector('#burgerText');
let burgerLines = Array.from(document.querySelectorAll('.header-burger__line')) ;
let heroText = document.querySelector('.hero-text__container-mini');
let headerBurger = document.querySelector('.header-burger__lines')
let closeIcon = document.querySelector('.header-burger__close')

console.log(burgerLines)
console.log(headerBurger)

navBurger.addEventListener('click', ()=> {
    console.log('gee')
    burgerText.classList.toggle('hero-burger__text--clicked');
    heroText.classList.toggle('hero-text__container-mini--clicked')
    // headerBurger.removeChild(burgerLines)
    headerBurger.classList.toggle('.header-burger--cross');
    headerBurger.classList.toggle('header-burger__lines--clicked')
    closeIcon.classList.toggle('header-burger__close--clicked')

})
// iphone draggable carousel
$('.owl-carousel').owlCarousel({   
    loop: false,   
    autoWidth:true, 
    margin:10,
    nav:true,
    responsive:{
     0:{
      items:1,
      autoWidth: true 
     },
     768:{
      items:2,
      autoWidth: true,
     }
    } 
  }); 

//on scroll function
let lastScrollTop = 0;
let header = document.querySelector('#head');

if (screen.width > 1023) {
    window.addEventListener('scroll', (() => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop>lastScrollTop){
            header.style.top = '-91px'
        } else {
            header.style.top = '0'
        }
        lastScrollTop = scrollTop
    }))
} else {
    console.log('hello')
}
//parallax effect
let layer1 = document.querySelector('#layer1')
let layer2 = document.querySelector('#layer2')
let layer3 = document.querySelector('#layer3')
let text = document.querySelector('#text')


window.addEventListener('scroll', (() => {
    if (screen.width > 1023) {
        let value = window.scrollY;
        layer1.style.top = value * 0.5 + 'px'
        layer2.style.top = value * 0.7 + 'px'
        layer3.style.top = value * 0.2 + 'px'
    }
}))

console.log(screen.width)


//slider function with animation
let currentSlide = 0;
let totalSlides = 3

let nextBtn = document.querySelector('#next')
let prevBtn = document.querySelector('#prev')
let holder = document.querySelector('.holder')

// photo containers ids
let container2 = document.querySelector('#imgDivTwo')
let container3 = document.querySelector('#imgDivThree')
let container4 = document.querySelector('#imgDivFour')
// holders container ids
let holder2 = document.querySelector('#holderDivTwo')
let holder3 = document.querySelector('#holderDivThree')
let holder4 = document.querySelector('#holderDivFour')
// text color
let textTwo = document.querySelector('#textTwo')
let textThree = document.querySelector('#textThree')
let textFour = document.querySelector('#textFour')
// border div animation div
let slideImageHeadingTwo = document.querySelector('#slideImageHeadingTwo')
let slideImageHeadingThree = document.querySelector('#slideImageHeadingThree')
let slideImageHeadingFour = document.querySelector('#slideImageHeadingFour')
// slide buttons
let slideBtn2 = document.querySelector('#slideBtn2')
let slideBtn3 = document.querySelector('#slideBtn3')
let slideBtn4 = document.querySelector('#slideBtn4')
//slideBtn2

// for desktop
let previousSlide = () => {
    currentSlide = currentSlide - 1;
    nextBtn.disabled= false
    if (currentSlide <= 3){
        if (currentSlide === 0){
            container2.classList.remove('slide--next')
            holder2.classList.add('holder--prev')
            textTwo.classList.remove('slide__text--next')
            slideImageHeadingTwo.classList.remove('slide__image-heading--next')
            slideBtn2.classList.remove('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 1){
            container3.classList.remove('slide--next')
            holder3.classList.add('holder--prev')
            textThree.classList.remove('slide__text--next')
            slideImageHeadingThree.classList.remove('slide__image-heading--next')
            slideBtn3.classList.remove('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide ===2) {
            container4.classList.remove('slide--next')
            holder4.classList.add('holder--prev')
            textFour.classList.remove('slide__text--next')
            slideImageHeadingFour.classList.remove('slide__image-heading--next')
            slideBtn4.classList.remove('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition

        } else {
            console.log('its done')
        }

    }
}
let nextSlide = () => {
    currentSlide = currentSlide + 1;
    if(currentSlide <= 3){
        if(currentSlide === 1){
            nextBtn.disabled= false
            slideImageHeadingTwo.classList.add('slide__image-heading--next')
            container2.classList.add('slide--next')
            holder2.classList.remove('holder--prev')
            textTwo.classList.add('slide__text--next')
            slideBtn2.classList.add('slide__button--next')

            let unit = -currentSlide*1405 
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            console.log('it worked')
        }  else if (currentSlide === 2) {
            console.log('two')
            slideImageHeadingThree.classList.add('slide__image-heading--next')
            container3.classList.add('slide--next')
            holder3.classList.remove('holder--prev')
            textThree.classList.add('slide__text--next')
            slideBtn3.classList.add('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 3){
            console.log('three')
            slideImageHeadingFour.classList.add('slide__image-heading--next')
            container4.classList.add('slide--next')
            holder4.classList.remove('holder--prev')
            textFour.classList.add('slide__text--next')
            slideBtn4.classList.add('slide__button--next')
            let unit = -currentSlide*1405
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            nextBtn.disabled= true
        }
    } else {
        console.log('other')
    }
}
// for large laptop 
let previousSlideLaptop = () => {
    currentSlide = currentSlide - 1;
    nextBtn.disabled= false
    if (currentSlide <= 3){
        if (currentSlide === 0){
            container2.classList.remove('slide--next')
            holder2.classList.add('holder--prev')
            textTwo.classList.remove('slide__text--next')
            slideImageHeadingTwo.classList.remove('slide__image-heading--next')
            slideBtn2.classList.remove('slide__button--next')
            let unit = -currentSlide*1057
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 1){
            container3.classList.remove('slide--next')
            holder3.classList.add('holder--prev')
            textThree.classList.remove('slide__text--next')
            slideImageHeadingThree.classList.remove('slide__image-heading--next')
            slideBtn3.classList.remove('slide__button--next')
            let unit = -currentSlide*1057
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide ===2) {
            container4.classList.remove('slide--next')
            holder4.classList.add('holder--prev')
            textFour.classList.remove('slide__text--next')
            slideImageHeadingFour.classList.remove('slide__image-heading--next')
            slideBtn4.classList.remove('slide__button--next')
            let unit = -currentSlide*1057
            let leftPosition = unit+'px'
            holder.style.left = leftPosition

        } else {
            console.log('its done')
        }

    }
}
let nextSlideLaptop = () => {
    currentSlide = currentSlide + 1;
    if(currentSlide <= 3){
        if(currentSlide === 1){
            nextBtn.disabled= false
            slideImageHeadingTwo.classList.add('slide__image-heading--next')
            container2.classList.add('slide--next')
            holder2.classList.remove('holder--prev')
            textTwo.classList.add('slide__text--next')
            slideBtn2.classList.add('slide__button--next')

            let unit = -currentSlide*1058
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            console.log('it worked')
        }  else if (currentSlide === 2) {
            console.log('two')
            slideImageHeadingThree.classList.add('slide__image-heading--next')
            container3.classList.add('slide--next')
            holder3.classList.remove('holder--prev')
            textThree.classList.add('slide__text--next')
            slideBtn3.classList.add('slide__button--next')
            let unit = -currentSlide*1058
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
        } else if (currentSlide === 3){
            console.log('three')
            slideImageHeadingFour.classList.add('slide__image-heading--next')
            container4.classList.add('slide--next')
            holder4.classList.remove('holder--prev')
            textFour.classList.add('slide__text--next')
            slideBtn4.classList.add('slide__button--next')
            let unit = -currentSlide*1058
            let leftPosition = unit+'px'
            holder.style.left = leftPosition
            nextBtn.disabled= true
        }
    } else {
        console.log('other')
    }
}
prevBtn.addEventListener('click', ()=> {
    screen.width > 1919 ? previousSlide() : previousSlideLaptop()
})
nextBtn.addEventListener('click', ()=> {
    screen.width > 1919 ? nextSlide() : nextSlideLaptop()
} )

// select overlays
let overlay1 = document.querySelector('.overlay1')
let btnAbout1 = document.querySelector('#btnAbout1')
let card1 = document.querySelector('.card__avatar1')
let cardPClicked1 = document.querySelector('.card__p--clicked1')
let cardIconBox1 = document.querySelector('.card__icon-box1')
let cardIconOpened1 = document.querySelector('.card__icon--opened1')
let cardPclickedSecond1 = document.querySelector('.card__p--clicked-second1')
//card__p--clicked-second4

let overlay2 = document.querySelector('.overlay2')
let btnAbout2 = document.querySelector('#btnAbout2')
let card2 = document.querySelector('.card__avatar2')
let cardPClicked2 = document.querySelector('.card__p--clicked2')
let cardIconBox2 = document.querySelector('.card__icon-box2')
let cardIconOpened2 = document.querySelector('.card__icon--opened2')
let cardPclickedSecond2 = document.querySelector('.card__p--clicked-second2')

let overlay3 = document.querySelector('.overlay3')
let btnAbout3 = document.querySelector('#btnAbout3')
let card3 = document.querySelector('.card__avatar3')
let cardPClicked3 = document.querySelector('.card__p--clicked3')
let cardIconBox3 = document.querySelector('.card__icon-box3')
let cardIconOpened3 = document.querySelector('.card__icon--opened3')
let cardPclickedSecond3 = document.querySelector('.card__p--clicked-second3')

let overlay4 = document.querySelector('.overlay4')
let btnAbout4 = document.querySelector('#btnAbout4')
let card4 = document.querySelector('.card__avatar4')
let cardPClicked4 = document.querySelector('.card__p--clicked4')
let cardIconBox4 = document.querySelector('.card__icon-box4')
let cardIconOpened4 = document.querySelector('.card__icon--opened4')
let cardPclickedSecond4 = document.querySelector('.card__p--clicked-second4')

//  card__icon--opened2
btnAbout1.addEventListener('click', ()=> {
    card1.classList.add('card--cleaned')
    btnAbout1.classList.add('overlay--cleaned')
    cardIconBox1.style.display = 'flex'
    cardPClicked1.innerHTML= 'Yazan is a professional international consultant with presence in several countries. We work hand in hand with our clients, delivering at the coalface. Together, we crack some of the largest and most complex challenges in the public and private sectors, by pinpointing. We work hand in hand with our clients, delivering at the coalface.'
    cardPclickedSecond1.innerHTML = ' Our approach is not just about spreadsheets and mathematical skill: we help you see powerful truths about your organisation, so you know the actions we take together will be the right ones.'
})
cardIconOpened1.addEventListener('click', () => {
    cardPClicked1.innerHTML = ''
    cardPclickedSecond1.innerHTML = ''
    cardIconBox1.style.display = 'none'
    card1.classList.remove('card--cleaned')
    btnAbout1.classList.remove('overlay--cleaned')
})
btnAbout2.addEventListener('click', ()=> {
    card2.classList.add('card--cleaned')
    cardPclickedSecond2.innerHTML = ''
    btnAbout2.classList.add('overlay--cleaned')
    cardIconBox2.style.display = 'flex'
    cardPClicked2.innerHTML= 'Marcus is a professional international consultant with presence in several countries. We work hand in hand with our clients, delivering at the coalface. Together, we crack some of the largest and most complex challenges in the public and private sectors, by pinpointing. We work hand in hand with our clients, delivering at the coalface.'
    cardPclickedSecond2.innerHTML = ' Our approach is not just about spreadsheets and mathematical skill: we help you see powerful truths about your organisation, so you know the actions we take together will be the right ones.'
})
cardIconOpened2.addEventListener('click', () => {
    cardPClicked2.innerHTML = ''
    cardPclickedSecond2.innerHTML = ''
    cardIconBox2.style.display = 'none'
    card2.classList.remove('card--cleaned')
    btnAbout2.classList.remove('overlay--cleaned')
})
btnAbout3.addEventListener('click', ()=> {
    card3.classList.add('card--cleaned')
    btnAbout3.classList.add('overlay--cleaned')
    cardIconBox3.style.display = 'flex'
    cardPClicked3.innerHTML= 'Emily is a professional international consultant with presence in several countries. We work hand in hand with our clients, delivering at the coalface. Together, we crack some of the largest and most complex challenges in the public and private sectors, by pinpointing. We work hand in hand with our clients, delivering at the coalface.'
    cardPclickedSecond3.innerHTML = 'Our approach is not just about spreadsheets and mathematical skill: we help you see powerful truths about your organisation, so you know the actions we take together will be the right ones.'
})
cardIconOpened3.addEventListener('click', () => {
    cardPClicked3.innerHTML = ''
    cardPclickedSecond3.innerHTML = ''
    cardIconBox3.style.display = 'none'
    card3.classList.remove('card--cleaned')
    btnAbout3.classList.remove('overlay--cleaned')
})
btnAbout4.addEventListener('click', ()=> {
    card4.classList.add('card--cleaned')
    btnAbout4.classList.add('overlay--cleaned')
    cardIconBox4.style.display = 'flex'
    cardPClicked4.innerHTML= 'Marcus is a professional international consultant with presence in several countries. We work hand in hand with our clients, delivering at the coalface. Together, we crack some of the largest and most complex challenges in the public and private sectors, by pinpointing. We work hand in hand with our clients, delivering at the coalface.'
    cardPclickedSecond4.innerHTML = ' Our approach is not just about spreadsheets and mathematical skill: we help you see powerful truths about your organisation, so you know the actions we take together will be the right ones.'
})
cardIconOpened4.addEventListener('click', () => {
    cardPClicked4.innerHTML = ''
    cardPclickedSecond4.innerHTML = ''
    cardIconBox4.style.display = 'none'
    card4.classList.remove('card--cleaned')
    btnAbout4.classList.remove('overlay--cleaned')
})



