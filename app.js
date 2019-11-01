// handles the input of how many dog images to log into console

function handleDogImageAmount() {
  $('#dataEntry').on('submit', e => {
    e.preventDefault();
    let amount = $('.entryPoint').val().toLowerCase();
    apiCall(amount);
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

function apiCall(amount) {
  fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Error'));
}

$(function() {
  handleDogImageAmount();
});
