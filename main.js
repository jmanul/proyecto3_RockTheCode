import { createButton } from './src/components/button/button.js';
import { createCard } from './src/components/card/card.js'
import { createSearchBar } from './src/components/search_bar/search_bar.js';
import './style.css'

const header = document.querySelector('header');
const main = document.querySelector('main');
header.className = 'flex-container';
const cardSection = document.querySelector('section.cards');

const listKeywordsSugest = ['coches', 'motos', 'bicicletas', 'patines', 'paisajes', 'trenes', 'aviones', 'teclados', 'pajaros',];

createSearchBar(header, 'Buscar');


const randomSugestKeyword = (item) => {

  const randomSugest = listKeywordsSugest[Math.floor(Math.random() * listKeywordsSugest.length)]; 
    
  item.innerText = randomSugest;
  item.value = randomSugest;

 };

const divSugest = document.createElement('div');
divSugest.classList.add('divSugest', 'flex-container', 'estado-off');
header.append(divSugest);
createButton(divSugest, 'sugestOne', '');
createButton(divSugest, 'sugestTwo','');
createButton(divSugest, 'sugestThree', '');

const divResearch = document.createElement('div');
divResearch.classList.add('divResearch', 'flex-container', 'estado-off');
main.append(divResearch);

createButton(divResearch, 'sugestOne', 'Mas resultados');


const clave = "H2WzBZzDOduMSrBIGqBr8LAjQ19eAk_yY_yjnL6aDSY";

let keyword = '';

let page = 0;

const searchSugest = (id) => {

  filterSearchInput.value = id.value;
  searchForName();

  divSugest.classList.add('estado-off');
 }


const randomGalery = () => {


  fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${clave}`).then((res) => res.json())
    
    .catch((err) => console.log(err))
    .then((res) => {
      console.log(res)
      for (let i = 0; i < res.length; i++) {
        const item = res[i];

        createCard(item.urls.small, item.alt_description, item.user.name, item.downloads, item.views, item.links.html, cardSection);

      }

    })
    .catch((err) => console.log(err));
   
};

const defaultInit = () => { 

  if (filterSearchInput.value === '') {

    randomGalery();
    return;
  }
}

defaultInit();




const searchImages = async () => {

  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clave}`);
    const res = await response.json();
    const result = res.results;

    if (result.length === 0) {

      cardSection.innerHTML = `<div class="info">
             <p>No hay resultados, puedes probar con....</p>
          </div>`;
      
    randomSugestKeyword(sugestOne);
     randomSugestKeyword(sugestTwo);
     randomSugestKeyword(sugestThree);
      
      divSugest.classList.remove('estado-off');
            
     // randomGalery();

   ;

     

    } else {

      divSugest.classList.add('estado-off');

      cardSection.innerHTML = '';
      for (let i = 0; i < result.length; i++) {
        const item = result[i];

        createCard(item.urls.small, item.alt_description, item.user.name, item.downloads, item.views, item.links.html, cardSection);

      }
    }
    
  } catch (error) {
    
    console.log(error);
  }


 
  


};

const searchForName = () => {

  if (filterSearchInput.value === '') {
    
    cardSection.innerHTML = `<div class="info">
             <p>Escribe lo que deseas buscar</p>
          </div>`;
    
    // randomGalery();
    return;
    
  } else {

    page = 1;
    keyword = filterSearchInput.value;

    searchImages();

  }


}




filterSearchButton.onclick = searchForName;
sugestOne.onclick = () => searchSugest(sugestOne);
sugestTwo.onclick = () => searchSugest(sugestTwo);
sugestThree.onclick = () => searchSugest(sugestThree);




// filterSearchButton.addEventListener('click', (e) => {

//   e.preventDefault();
//   page = 1;

//   searchImages();

//   console.log(filterSearchInput.value);

//  });

// const res = [

//   {
//     user: {name : 'juanito ns dkdkj hiwh dkw dndwh juhds jhidhihhdi shihsihdis hidhiohDI HGDHGO DHUOIHG DGHJU FIH GUHGDUHU'},
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2024/03/31/06/16/bird-8666099_1280.jpg' }
//   },  {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2024/04/01/17/55/straubing-8669480_640.jpg' }
//   },  {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2021/01/06/12/14/church-5894267_640.jpg' }
//   },  {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2021/07/24/07/23/chow-chow-6488846_640.jpg' }
//   },  {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2023/06/16/15/14/sunset-8068208_640.jpg' }
//   },  {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2024/03/21/14/29/chevrolet-8647804_640.jpg' }
//   },
  
//   {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2023/02/08/18/36/tawny-owl-7777285_640.jpg' }
//   }, {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2021/08/23/01/05/shoes-6566418_640.jpg' }
//   }, {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_640.jpg' }
//   }, {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_640.jpg' }
//   }, {
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2021/09/29/22/59/viola-6668608_640.jpg' }
//   },{
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2024/04/25/06/50/banana-8719086_640.jpg' }
//   },{
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2023/05/19/17/18/rose-beetle-8004990_640.jpg' }
//   },{
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2022/01/29/09/01/bird-6976834_640.jpg' }
//   },{
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2024/04/18/19/14/monkey-8704855_640.jpg' }
//   },{
//     user: { name: 'juanito' },
//     icon: 'bi bi-facebook',
//     urls: { small: 'https://cdn.pixabay.com/photo/2021/11/14/06/15/colored-pencils-6792979_640.jpg' }
//   },

// ]

// const llamada = () => {

//   console.log(res)
//   for (let i = 0; i < res.length; i++) {
//     const item = res[i];
       
//     createCard(item.urls.small, item.user.name, cardSection);


//   }
// }

// llamada();

// fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clave}`).then((res) => res.json())
//   .then((res) => {

//     console.log(res)
//     for (let i = 0; i < res.length; i++) {
//       const url = res[i];


//       createCard(res[0].urls.small, cardSection);
//     }
//   });
   





