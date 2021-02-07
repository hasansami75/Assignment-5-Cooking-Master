const foodName = inputFood => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFood}`;
    fetch(url)
    .then(res => res.json())
    .then(data => latestInterface(data))
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () =>{
    const food = document.getElementById('food').value;
    foodName(food);
})

const latestInterface = meal =>{
    let find = meal.meals;
    const foodList = document.getElementById('show-food');
    find.forEach(find => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'div-arrange';
        foodDiv.id = 'foodClick'
        const divInfo =`
        <img src= "${find.strMealThumb}">
        <h6>"${find.strMeal}"</h6>
        <button onclick="foodDetails(${find.idMeal})"> Details </button>
         `;
        foodDiv.innerHTML = divInfo;
        foodList.appendChild(foodDiv);
    });
}

    const foodDetails = idMeal => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => {
            singleFoodDetails(data.meals[0])
        });
    }

const singleFoodDetails = food =>{
    console.log(food);
    const foodItems = document.getElementById('foodies');
    
    const ul = document.createElement('ul');
        const foodIngredients = `
        <img src= "${food.strMealThumb}">
        <li>"${food.strIngredient1}"</li>
        <li>"${food.strIngredient2}"</li>
        <li>"${food.strIngredient3}"</li>
        <li>"${food.strIngredient4}"</li>
        <li>"${food.strIngredient5}"</li>
        <li>"${food.strIngredient6}"</li>
        <li>"${food.strIngredient7}"</li>
        <li>"${food.strIngredient8}"</li>
        <li>"${food.strIngredient9}"</li>
        <li>"${food.strIngredient10}"</li>
        `
        ul.innerHTML = foodIngredients;
        foodItems.appendChild(ul);
}

