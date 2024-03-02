const loadDrinks = (searchText) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDrinks(data.drinks));
};

const displayDrinks = (drinks) => {
  //   console.log(drinks);
  const drinksContainer = document.getElementById("drinks-container");
  drinksContainer.innerText = "";
  drinks.forEach((drink) => {
    // console.log(drink);
    const drinksDiv = document.createElement("div");
    drinksDiv.classList.add("col");
    drinksDiv.innerHTML = `
    <div class="card">
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${drink.strDrink}</h5>
      <p class="card-text">
        ${drink.dateModified}
      </p>
      <p class="card-text">
        ${drink.strAlcoholic}
      </p>
      <p class="card-text">
        ${drink.strCategory}
      </p>
      <p class="card-text">
        ${drink.strInstructions}
      </p>
      <button onclick="loadDrinksDetails('${drink.idDrink}')" class="btn btn-info">Details</button>
    </div>
  </div>
    `;
    drinksContainer.appendChild(drinksDiv);
  });
};

const searchDrinks = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //   console.log(searchText);
  loadDrinks(searchText);
  searchField.value = "";
};

const loadDrinksDetails = (idDrink) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDrinksDetails(data.drinks[0]));
};

const displayDrinksDetails = (drink) => {
  console.log(drink);
  const drinksDetails = document.getElementById("drinks-details");
  drinksDetails.innerText = "";
  const drinksDiv = document.createElement("div");
  drinksDiv.classList.add("card");
  drinksDiv.innerHTML = `
  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 class="card-title">${drink.strDrink}</h5>
  <p class="card-text">
    ${drink.dateModified}
  </p>
  <p class="card-text">
    ${drink.strAlcoholic}
  </p>
  <p class="card-text">
    ${drink.strCategory}
  </p>
  <p class="card-text">
    ${drink.strInstructions}
  </p>
  </div>
  `;
  drinksDetails.appendChild(drinksDiv);
};

loadDrinks("m");
