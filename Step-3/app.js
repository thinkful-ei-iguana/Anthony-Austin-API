function handleDogBreedType() {
  $('#dataEntry').on('submit', e => {
    e.preventDefault();
    let breed = $('.entryPoint').val().toLowerCase();
    apiCallBreed(breed);
  });
}

function displayResults(input) {
  let imgArray = [];
  for (let i = 0; i < input.message.length; i++) {
    imgArray.push(
      $(`
      <img src ="${input.message[i]}" class ="results-img">`)
    );
  }
  $('.results').html(imgArray);
  console.log(imgArray);
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
