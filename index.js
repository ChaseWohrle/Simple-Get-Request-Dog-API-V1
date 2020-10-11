'use strict';

function getDogImage(inputNumber) {
  console.log(inputNumber);
  fetch(`https://dog.ceo/api/breeds/image/random/${inputNumber}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(error));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let pictures = responseJson.message;
  let img_list = document.getElementById("img-list");
  img_list.innerHTML = '';
  for (let i = 0; i < pictures.length; i++ ) {
     var li = document.createElement('LI');
     var img = document.createElement('IMG');
     img.src = pictures[i]; 
     li.appendChild(img);
     img_list.append(li);
  }

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const inputNumber = $('#input-number').val();
    if (!inputNumber) {
      getDogImage("3");
    } else {
      getDogImage(inputNumber);
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

