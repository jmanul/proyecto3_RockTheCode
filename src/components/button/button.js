import './button.css';


export const createButton = (site, id, value) => {

     const buttonDiv = document.createElement('div');
     buttonDiv.classList.add('buttonDiv');
     site.append(buttonDiv);

     const buttonButton = document.createElement('button');
     buttonButton.id = id;
     buttonButton.type = 'submit';
     buttonButton.value = value;
     buttonDiv.append(buttonButton);

     const buttonP = document.createElement('p');
     buttonP.innerText = value;
     buttonButton.append(buttonP);

   

};