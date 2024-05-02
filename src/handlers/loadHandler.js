import data from '../data.js';
import dom from '../dom.js';
import createImage from '../components/createImage.js';

const loadHandler = () => {
    console.log(data);
    data.images.forEach((image) => {
        const imageBox = createImage(image);
        dom.images.append(imageBox);
    });
};

export default loadHandler;