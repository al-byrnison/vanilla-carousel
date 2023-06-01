
const slidesContainer = document.querySelector('.slides-container');
const carouselElement = document.querySelector('.carousel');
const slider = document.querySelector('.carousel-caption')
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

//Elemento a configurar para hacer el slide automatico
const autoPlay = true;
const interval = 5000;


const carouselWidth = carouselElement.offsetWidth;


let currentSlide = 0;


const slidesData = [
     { index: 'Junio', text: '16.660' },
     { index: 'Julio', text: '16.660' },
     { index: 'Agosto', text: '16.660' },
     { index: 'Septiembre', text: '16.660'}
];

const btnIcons = {
    prevIcon: './assets/scrollarrowtoleft1_83788.svg',
    nextIcon: './assets/scrollarrowtoright1_83720.svg'
}

slidesData.forEach(slide => {
    slidesContainer.innerHTML += `
    <li class="carousel-caption">
    <p>${slide.index}</p>
    <h4>${slide.text}</h4>
    </li>
    ` 
});

const setBtn = () => {
    const iconPrev = document.createElement('img')
    const iconNext = document.createElement('img')
    iconPrev.src = btnIcons.prevIcon
    iconPrev.width = 20
    prevBtn.appendChild(iconPrev);
    prevBtn.classList.add('prev');
    prevBtn.classList.add('btn')
    
    iconNext.src = btnIcons.nextIcon
    iconNext.width = 20
    nextBtn.appendChild(iconNext)
    nextBtn.classList.add('next')
    nextBtn.classList.add('btn')
    carouselElement.appendChild(prevBtn)
    carouselElement.appendChild(nextBtn)
}

function updateSlide(index) {
    currentSlide = index >= slidesData.length || index < 0 ? 0 : index;
    const translate = `translateX(-${currentSlide * 100}%)`;
    slidesContainer.style.transform = translate;
  }
  

function prevSlide() {
    updateSlide(currentSlide - 1)
}

function nextSlide() {
    updateSlide(currentSlide + 1)
}

function automaticSlide() {
    setInterval(nextSlide, interval)
}

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)



slidesData.length > 1 && setBtn();
autoPlay && automaticSlide();