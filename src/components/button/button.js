import './button.css';


export const createButton = (site, id, val) => {

     const buttonDiv = document.createElement('div');
     buttonDiv.classList.add('buttonDiv');
     site.append(buttonDiv);

     const buttonButton = document.createElement('button');
     buttonButton.id = id;
     buttonButton.type = 'submit';
     buttonButton.value = val;
     buttonDiv.append(buttonButton);

     const buttonP = document.createElement('p');
     buttonP.innerText = val;
     buttonButton.append(buttonP);

   

};