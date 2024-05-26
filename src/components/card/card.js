import "./card.css";

export const createCard = (url, alt, user, download, views, refer, site) => {
     
     const cardDiv = document.createElement('div');
     cardDiv.className = 'cardDiv';
     site.append(cardDiv);

     const cardA = document.createElement('a');
     cardA.href = `${refer}?utm_source=proyecto3_RockTheCode& utm_medium=referral`;
     cardA.target = '_blank';
     cardA.rel = 'noopener';
     cardDiv.append(cardA);
     
     const cardImage = document.createElement('img');
     cardImage.src = url;
     cardImage.alt = alt;
     cardA.append(cardImage);

     const cardTitle = document.createElement('h3');
     cardTitle.classname = 'cardTitle';
     cardTitle.innerHTML = ` <a href="${refer}?utm_source=proyecto3_RockTheCode& utm_medium=referral" target="_blank" rel="noopener">${user}</a> en <a href= https://unsplash.com/?utm_source=proyecto3_RockTheCode&utm_medium=referral target="_blank" rel="noopener">Unsplash</a>`
     cardDiv.append(cardTitle);

     const cardP = document.createElement('p');
     cardP.innerHTML = `<span><i class="bi bi-download"></i> ${download} </span>   <span><i class="bi bi-eye"></i> ${views}</span>`;
     cardDiv.append(cardP);
  
}