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
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Error'));
}
