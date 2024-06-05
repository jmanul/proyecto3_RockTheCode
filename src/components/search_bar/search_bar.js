import "./search_bar.css";

export const createSearchBar = (site, placeholder) => {

     const filterSearchDiv = document.createElement('div');
     filterSearchDiv.classList.add('filterSearchDiv', 'flex-container');
     site.append(filterSearchDiv);

     const filterSearchInput = document.createElement('input');
     filterSearchInput.id = 'filterSearchInput';
     filterSearchInput.type = 'search';
     filterSearchInput.placeholder = placeholder;
     filterSearchDiv.append(filterSearchInput);
  
     const filterSearchButton = document.createElement('button');
     filterSearchButton.id = 'filterSearchButton';
     filterSearchButton.type = 'submit';
     filterSearchDiv.append(filterSearchButton);

     const filterSearchIcon = document.createElement('i');
     filterSearchIcon.className = 'bi bi-search';
     filterSearchButton.append(filterSearchIcon);

   
}