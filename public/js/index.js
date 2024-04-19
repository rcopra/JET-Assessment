// Event listener for search button
// When the button is clicked, validate the input and then fetch data from the API
document.getElementById('postInput').addEventListener('click', function() {
  // Use fetch to get data from the API, limit results to 10 restaurants
  // Return following restaurant data: name, cuisines, rating - as a number, and address
});
const searchForm = document.getElementById('searchForm');
const postInput = document.getElementById('postInput');
const resultsList = document.getElementById('restaurant-details');

// Get the value from the input field

postInput.addEventListener('click', function() {
    let postcode = searchForm.value.trim().replace(/\s+/g, '').toLowerCase();

    if (!postcode) {
        alert('Please enter a valid postcode');
        return;
    }
// If valid, create API request with input
    const apiURL = `/api/restaurants?postcode=${postcode}`;
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            displayResults(data.restaurants);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch data. Please try again.');
        });
});

function displayResults(restaurants) {
// Empty the list
    resultsList.innerHTML = '';
// Limit results to first 10
  if (restaurants && restaurants.length > 0) {
    restaurants.slice(0, 10).forEach((restaurant) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${restaurant.name}, ${restaurant.cuisines.join(', ')}, Rating: ${restaurant.rating}, ${restaurant.address}`;
        resultsList.appendChild(listItem);
    });
  } else {
    resultsList.innerHTML = '<li class="list-group-item text-muted text-center">No restaurants found! Please input another postcode</li>';
  }
};
