const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]
const imagesEl = [];
const divAnteprime = [];
const anteprime=[];
const boxImagesEl = document.querySelector(".carosel-box");
const btnUpEl = document.querySelector(".btn-up");
const btnDownEl = document.querySelector(".btn-down");
const anteprimaImg = document.querySelector(".anteprima-box");

let indice = 0;

//************************************************************** */
//INIZIALIZZO IL CONTENUTO
for (let i = 0; i < images.length; i++) {
    let propriety = "d-none";
    if (i === indice) {
        propriety = "d-block"
    }
    const imgEl = document.createElement("img");
    imgEl.classList.add("my-img", propriety);
    imgEl.src = images[i];
    imgEl.alt = "";
    boxImagesEl.append(imgEl);
    imagesEl[i] = imgEl;
    const divEffect=document.createElement("div");
    const container=document.createElement("div");
    container.classList.add("relative");

    divEffect.classList.add("img-box");
    
    const anteprimaEl = document.createElement("img");
    anteprimaEl.src = images[i];
    anteprimaEl.classList.add( "anteprima-img");
    if (i === indice) {
        divEffect.classList.add("effetto-anteprima");
        anteprimaEl.classList.add("border-blue")
    }
    container.style.height = `calc( 100% / ${images.length} )`;

    anteprimaEl.alt = "";
    divAnteprime[i] = divEffect;
    anteprime[i]=anteprimaEl;
    container.append(anteprimaEl)
    container.append(divEffect);
    anteprimaImg.append(container)


}



//************************************************************** */


//************************************************************** */
//EVENTI
btnDownEl.addEventListener("click", function () {
    let oldbord;
    let newbord;
    let oldAnteprima;
    let newAnteprima;
    let oldImage;
    let newImage;
    if (indice === images.length - 1) {
        newImage = imagesEl[0];
        oldImage = imagesEl[images.length - 1];
        oldAnteprima = divAnteprime[images.length - 1];
        newAnteprima = divAnteprime[0];
        oldbord=anteprime[images.length - 1];
        newbord=anteprime[0];
        indice = -1;
    }
    else {
        oldImage = imagesEl[indice];
        newImage = imagesEl[indice + 1];
        oldAnteprima = divAnteprime[indice];
        newAnteprima = divAnteprime[indice + 1];
        oldbord=anteprime[indice];
        newbord=anteprime[indice+1];

    }
    indice++;
    newbord.classList.add("border-blue");
    oldbord.classList.remove("border-blue");
    oldAnteprima.classList.remove("effetto-anteprima");
    newAnteprima.classList.add("effetto-anteprima");
    oldImage.classList.remove("d-block");
    oldImage.classList.add("d-none");
    newImage.classList.remove("d-none");
    newImage.classList.add("d-block");

})

btnUpEl.addEventListener("click", function () {

    let oldbord;
    let newbord;
    let oldAnteprima;
    let newAnteprima;
    let oldImage;
    let newImage;
    if (indice === 0) {
        newImage = imagesEl[images.length - 1];
        oldImage = imagesEl[0];
        oldAnteprima = divAnteprime[0];
        newAnteprima = divAnteprime[images.length - 1];
        oldbord=anteprime[0];
        newbord=anteprime[images.length - 1];
        
        indice = images.length;
    }
    else {
        oldImage = imagesEl[indice];
        newImage = imagesEl[indice - 1];
        oldAnteprima =divAnteprime[indice];
        newAnteprima =divAnteprime[indice - 1];
        oldbord=anteprime[indice];
        newbord=anteprime[indice- 1];
        

    }
    indice--;
    newbord.classList.add("border-blue");
    oldbord.classList.remove("border-blue");
    oldAnteprima.classList.remove("effetto-anteprima");
    newAnteprima.classList.add("effetto-anteprima");
    oldImage.classList.remove("d-block");
    oldImage.classList.add("d-none");
    newImage.classList.remove("d-none");
    newImage.classList.add("d-block");







})

//************************************************************** */
