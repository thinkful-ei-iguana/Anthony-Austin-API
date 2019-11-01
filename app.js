// handles the input of how many dog images to log into console

function handleDogImageAmount() {
  $('#dataEntry').on('submit', e => {
    console.log('button works');
    // e.preventDefault();

    // let amount = e.currentTarget.value;
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
