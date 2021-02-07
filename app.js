const foodName = inputFood => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFood}`;
    fetch(url)
        .then(res => res.json())
        .then(data => latestInterface(data))
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
    const food = document.getElementById('food').value;
    foodName(food);
})
// function for showing meal list
const latestInterface = meal => {
    let find = meal.meals;
    const foodList = document.getElementById('show-food');
    find.forEach(find => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'div-arrange';
        foodDiv.id = 'foodClick'
        const divInfo = `
        <img src= "${find.strMealThumb}">
        <h6>"${find.strMeal}"</h6>
        <button class="btn btn-outline-dark" onclick="foodDetails(${find.idMeal})"> Details </button>
         `;
        foodDiv.innerHTML = divInfo;
        foodList.appendChild(foodDiv);
    });
}

//function for showing food details
const foodDetails = idMeal => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => {
            singleFoodDetails(data.meals[0])
        });
}

const singleFoodDetails = food => {
    console.log(food);
    const foodItems = document.getElementById('foodies');
    const ul = document.createElement('ul');
    const foodIngredients = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${food.strMealThumb}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${food.strMeal}</h5>
      <p class="card-text">Ingredients</p>
    </div>
    <ul class="list-group list-group-flush d-flex align-items-center">
      <li class="list-group-item">${food.strIngredient1},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient2},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient3},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient4},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient5},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient6},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient7},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient8},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient9},${food.strMeasure1}</li>
      <li class="list-group-item">${food.strIngredient10},${food.strMeasure1}</li>
    </ul>
    </div>    
   `
    ul.innerHTML = foodIngredients;
    foodItems.appendChild(ul);
}

