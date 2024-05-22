import { createCard } from './src/components/card/card'
import './style.css'


const cardSection = document.querySelector('section.cards');



// const clave = "H2WzBZzDOduMSrBIGqBr8LAjQ19eAk_yY_yjnL6aDSY"

// fetch(`https://api.unsplash.com/photos/random?count=20&client_id=${clave}`).then((res) => res.json())
//   .then((res) => {

//     console.log(res)
//     for (let i = 0; i < res.length; i++) {
//       const url = res[i];
       
     
//        createCard(res[0].urls.small , cardSection);
      
//     }
     

    
// })

const res = [

  {
    name: '',
    icon: 'bi bi-facebook',
    urls: { small: 'https://cdn.pixabay.com/photo/2024/03/31/06/16/bird-8666099_1280.jpg' }
  },  {
    name: '',
    icon: 'bi bi-facebook',
    urls: { small: 'https://cdn.pixabay.com/photo/2024/04/01/17/55/straubing-8669480_640.jpg' }
  },  {
    name: '',
    icon: 'bi bi-facebook',
    urls: { small: 'https://cdn.pixabay.com/photo/2021/01/06/12/14/church-5894267_640.jpg' }
  },  {
    name: '',
    icon: 'bi bi-facebook',
    urls: { small: 'https://cdn.pixabay.com/photo/2021/07/24/07/23/chow-chow-6488846_640.jpg' }
  },  {
    name: '',
    icon: 'bi bi-facebook',
    urls: { small: 'https://cdn.pixabay.com/photo/2023/06/16/15/14/sunset-8068208_640.jpg' }
  },  {
    name: '',
    icon: 'bi bi-facebook',
    urls: { small: 'https://cdn.pixabay.com/photo/2024/03/21/14/29/chevrolet-8647804_640.jpg' }
  },

]

const llamada = () => {

  console.log(res)
  for (let i = 0; i < res.length; i++) {
    const item = res[i];
       
     
    createCard(item.urls.small, cardSection);


  }
}

llamada();
