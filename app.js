const submitButton = document.querySelector('#submit-button');
const imgURL = document.querySelector('#image');
const memes = document.querySelector('#memes');
const textTop = document.querySelector('#text-top');
const textBottom = document.querySelector('#text-bottom');

memeBuilder();

function memeBuilder(){
    submitButton.addEventListener('click', function(e){
        const imageElements = document.createElement('div');
        const link = imgURL.value;
        const topText = textTop.value;
        const bottomText = textBottom.value;

        const imageAdded  = imageGetter(link);
        const imageTopText = topTextMaker(topText);
        const imageBottomText = bottomTextMaker(bottomText);

        imageElements.classList.add('container');
        imageElements.append(imageAdded);
        imageElements.append(imageTopText);
        imageElements.append(imageBottomText);
        console.log(imageBottomText);
        memes.append(imageElements);

        e.preventDefault();
        //imgURL.value = '';
    });
}

function imageGetter(link){
    const image = document.createElement('img');
    image.classList.add('image-size');
    image.src = link;
    //console.log(image);
    return image;

}

function topTextMaker(topImageText){
    const topText = document.createElement('h5');
    topText.classList.add('top-text');
    topText.innerText = `${topImageText}`;
    topText.id = "top-texts";
    //console.log(topText.innerText);
    return topText;
}

function bottomTextMaker(bottomImageText){
    const bottomText = document.createElement('h5');
    bottomText.classList.add('bottom-text');
    bottomText.id = "bottom-texts";
    bottomText.innerText = `${bottomImageText}`;
    //console.log(bottomText.innerText);
    return bottomText;
}