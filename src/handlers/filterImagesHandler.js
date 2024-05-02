import dom from '../dom.js';

const filterImagesHandler = (value) => {
    const images = document.querySelectorAll('.image-box');
    images.forEach((img) => {
        const title = img.querySelector('h6').innerText;
        if (title.toLowerCase().includes(value.toLowerCase())) {
            img.classList.remove('hide');
        } else {
            img.classList.add('hide');
        }
    });
};



export default filterImagesHandler;