`use strict`


const shareBtn = document.querySelector('.share-btn');
const socialMedias = document.querySelector('.social-medias');

const shareDiv = document.querySelector('.share-div')


console.log(shareBtn)





shareBtn.addEventListener('click', function() {
    shareBtn.classList.toggle('share-btn2');

    socialMedias.classList.toggle('social-medias-block');

    shareDiv.classList.toggle('share-div-center');
});