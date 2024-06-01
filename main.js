
import { createButton } from './src/components/button/button.js';
import { createCard } from './src/components/card/card.js'
import { createInicioButton } from './src/components/inicio_button/inicio_button.js';
import { createSearchBar } from './src/components/search_bar/search_bar.js';
import './style.css'

const header = document.querySelector('header');
header.className = 'flex-container';
const main = document.querySelector('main');
const cardSection = document.querySelector('section.cards');


createInicioButton(header);
createSearchBar(header, 'Buscar');

//? valores por defecto necesarios pra realizar una peticion

const clave = "H2WzBZzDOduMSrBIGqBr8LAjQ19eAk_yY_yjnL6aDSY";

let keyword = '';

let page = 0;


//? lista de sugerencias que se haran de forma aleatoria cuando no se encuentren resultados

const listKeywordsSugest = ['coches', 'motos', 'bicicletas', 'patines', 'paisajes', 'trenes', 'aviones', 'teclados', 'pajaros', 'videojuegos'];


//? funcion que asigna una palabra a un boton de sugerencias

let list = [];

const assignRandomKeywords = (item) => {

  let iterator = list[0];

  item.innerText = iterator;
  item.value = iterator;
  list.splice(iterator, 1);
  console.log(list);
}

//? funcion que escoge 3 palabras random de la lista de sugerencias 

const randomSugestKeyword = () => {



  for (let i = 0; i < 3; i++) {



    const randomSugest = listKeywordsSugest[Math.floor(Math.random() * listKeywordsSugest.length)];

    console.log(randomSugest);

    if (list.includes(randomSugest)) {

      i--;
      

    } else {

      list.push(randomSugest);

    
    }
    
    console.log(list);

  }

   assignRandomKeywords(sugestOne);
   assignRandomKeywords(sugestTwo);
   assignRandomKeywords(sugestThree);
};

//? creamos los botones que apareceran al realizar una busqueda sin resultados

const divSugest = document.createElement('div');
divSugest.classList.add('divSugest', 'flex-container', 'estado-off');
header.append(divSugest);

createButton(divSugest, 'sugestOne', '');
createButton(divSugest, 'sugestTwo', '');
createButton(divSugest, 'sugestThree', '');

//? creamos el boton que nos permitira traernos mas imagenes y añadirlas a las que ya estan en pantalla

const divResearch = document.createElement('div');
divResearch.classList.add('divResearch', 'flex-container', 'estado-off');
main.append(divResearch);

const pResearch = document.createElement('p');
pResearch.innerText ='No hay más resultados';
pResearch.classList.add('info-research', 'estado-off');
main.append(pResearch);

createButton(divResearch, 'research', 'Mas resultados');




//? funcion que lleva el valor de una opcion sujerida al input, para realizar la busqueda posteriormente

const searchSugest = (id) => {

  filterSearchInput.value = id.value;

  searchForName();

  divSugest.classList.add('estado-off');
}
 
//? funcion que genera una galeria random cuando no se ha hecho ninguna busqueda


const randomGalery = () => {


  fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${clave}`).then((res) => res.json())
    
    .catch((err) => console.log(err))
    .then((res) => {
    
      for (let i = 0; i < res.length; i++) {
        const item = res[i];

        createCard(item.urls.small, item.alt_description, item.user.name, item.downloads, item.views, item.links.html, cardSection);

      }

      divResearch.classList.remove('estado-off');

    })
    .catch((err) => console.log(err));
   
};

//? funcion que comprueba el estado inicial del input para generar una lista de imagenes aleatorias o basadas en una palabra introducida en el buscador

const defaultInit = () => { 

  if (filterSearchInput.value === '') {

    randomGalery();
    return;

  } else {

    reSearchImages();

  }
}

defaultInit();


//? funcion encargada de realizar una busqueda e imprimirla en pantalla

const searchImages = async () => {

  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clave}`);
    const res = await response.json();
    const result = res.results;
    const totalPages = res.total_pages;

    if (result.length === 0) {

      cardSection.innerHTML = `<div class="info">
             <p>No hay resultados, puedes probar con....</p>
          </div>`;
      
      randomSugestKeyword();

            
      divSugest.classList.remove('estado-off');

      divResearch.classList.add('estado-off');
      
      pResearch.classList.add('estado-off');

    } else {

      divSugest.classList.add('estado-off');

      
      totalPages > 1 ? divResearch.classList.remove('estado-off') : divResearch.classList.add('estado-off') ; 

 
      cardSection.innerHTML = '';
      for (let i = 0; i < result.length; i++) {
        const item = result[i];


        createCard(item.urls.small, item.alt_description, item.user.name, item.height, item.width, item.links.html, cardSection);

      }
      
      
    }
    
  } catch (error) {
    
    console.log(error);
  }

};


//? funcion que activa el boton del input para iniciar una busqueda

const searchForName = () => {

  if (filterSearchInput.value === '') {
    
    cardSection.innerHTML = `<div class="info">
             <p>Escribe lo que deseas buscar</p>
          </div>`;
    
    divResearch.classList.add('estado-off');
     pResearch.classList.add('estado-off');
    
    return;
    
  } else {

    pResearch.classList.add('estado-off');

    page = 1;
    keyword = filterSearchInput.value;

    searchImages();

  }


}

//? carga mas resultados de una busqueda

const reSearchImages = async () => {

  page++;

  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clave}`);
    const res = await response.json();
    const result = res.results;
    const totalPages = res.total_pages;

    if (totalPages == page) {
        
      divResearch.classList.add('estado-off');
      pResearch.classList.remove('estado-off');
       
      
      }
      
      for (let i = 0; i < result.length; i++) {
        const item = result[i];

        createCard(item.urls.small, item.alt_description, item.user.name, item.height, item.width, item.links.html, cardSection);

      }
    }

    catch (error) {

    console.log(error);
  }

};

const reStart = () => {

  filterSearchInput.value = '';
  randomGalery();
}





filterSearchButton.onclick = searchForName;
sugestOne.onclick = () => searchSugest(sugestOne);
sugestTwo.onclick = () => searchSugest(sugestTwo);
sugestThree.onclick = () => searchSugest(sugestThree);
research.onclick = defaultInit;
inicio.onclick = reStart;

const footer = document.createElement('footer');
document.body.append(footer);
footer.classList.add('flex-container');
const footerMaking = document.createElement('div');
footerMaking.classList.add('flex-container', 'making');
footer.append(footerMaking);
footerMaking.innerHTML = `<span class="flex-container"><strong>Hecho por José Manuel Sánchez</strong><div class="pasttri-logo"><img src="https://res.cloudinary.com/dn6utw1rl/image/upload/v1710357027/pasttri_gstn60.webp" alt="logo pasttri"></div></span>`;





