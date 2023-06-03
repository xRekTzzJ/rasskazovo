import { Popup } from '../components/Popup.js';
const popupPhoto = new Popup('.popup');
const catalog = document.querySelector('.navigation__button_catalog');
const catalogList = document.querySelector('.navigation__catalog-list');
const mainImage = document.querySelector('.product-information__main-image');
const popupImage = document.querySelector('.popup__image');
const reviews = document.getElementById('reviews');
const stars = document.querySelector('.product-information__rating');
stars.addEventListener('click', () => reviews.scrollIntoView(true))//скролл до отзывов при нажатии на звезды
mainImage.src="./images/iph13.png"
popupImage.src = mainImage.src;//поставить изображение в попап
mainImage.addEventListener('click', () => {
    popupPhoto.open();
})
catalog.addEventListener('click', () => {
    catalogList.classList.toggle('navigation__catalog-list_opened');
})//открытие списка в хедере
popupPhoto.setEventListeners();