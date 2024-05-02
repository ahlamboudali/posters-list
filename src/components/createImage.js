
const createImage = (image) => {
    // image box
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');
    imageBox.id = image.id;

    //image
    const img = document.createElement('img');
    img.classList.add = ('photo');
    img.src = image.src;
    img.alt = image.title;

    //title
    const title = document.createElement('h6');
    title.innerText = image.title;
    title.classList.add = 'title';

    imageBox.append(img, title);

    return imageBox;
};

export default createImage;