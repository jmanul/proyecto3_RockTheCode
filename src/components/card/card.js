import "./card.css";

export const createCard = (url, site) => {
     
     const cardDiv = document.createElement('div');
     cardDiv.className = 'cardDiv';
     site.append(cardDiv);
     
     const cardImage = document.createElement('img');
     cardImage.src = url;
     cardDiv.append(cardImage);
  
}