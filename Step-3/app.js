// handles the input of how many dog images to log into console

function handleDogImageAmount() {
  $('#dataEntry').on('submit', e => {
    e.preventDefault();
    let amount = $('.entryPoint').val();
    apiCall(amount);
  });
}

function displayResults(input) {
  console.log(input);
}

function apiCall(amount) {
  fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Error'));
}

$(function() {
  handleDogImageAmount();
});

function apiCallBreed(value) {
  fetch(`https://dog.ceo/api/breed/${value}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Error'));
}
