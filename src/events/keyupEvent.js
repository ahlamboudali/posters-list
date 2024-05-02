import filterImagesHandler from '../handlers/filterImagesHandler.js';
import dom from '../dom.js';

const keyupEvent = () => {
    dom.input.addEventListener('keyup', () => {
        const value = dom.input.value;
        filterImagesHandler(value);
    });
};

export default keyupEvent;