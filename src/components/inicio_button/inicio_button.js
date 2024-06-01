
import './inicio_button.css'

export const createInicioButton = (site) => {

     const divInicio = document.createElement('div');
     divInicio.classList.add('inicio', 'flex-container');
     divInicio.id = 'inicio';
     site.append(divInicio);

     const imgInicio = document.createElement('img');
     imgInicio.src = '/pinterest-svgrepo-com.svg';
     divInicio.appendChild(imgInicio);
 };



