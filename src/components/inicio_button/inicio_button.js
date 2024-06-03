
import './inicio_button.css'

export const createInicioButton = (site, url , id) => {

     const divInicio = document.createElement('div');
     divInicio.classList.add(id,'flex-container');
     divInicio.id = id;
     site.append(divInicio);

     const imgInicio = document.createElement('img');
     imgInicio.src = url;
     divInicio.appendChild(imgInicio);
 };



