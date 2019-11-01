// handles the input of how many dog images to log into console

function handleDogBreedType() {
  $('#dataEntry').on('submit', e => {
    e.preventDefault();
    let breed = $('.entryPoint').val();
    apiCallBreed(breed);
  });
}

function displayResults(input) {
  console.log(input);
}

$(function() {
  handleDogBreedType();
});

function apiCallBreed(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Error'));
}
