'use strict';

function getDogImage(inputBreed) {
  console.log(inputBreed);
  fetch(`https://dog.ceo/api/breed/${inputBreed}/images/random`).then(function(response){
    if (response.ok) {
      alert(response.ok)
      response.json().then(function(responseJson) {
        displayResults(responseJson);
      })
    } else{
      alert("Breed Not Found");
    }
  })
    
}


function displayResults(responseJson) {
  console.log(responseJson);
  let pictures = responseJson.message;
  let img_list = document.getElementById("img-list");
  img_list.innerHTML = '';
  var li = document.createElement('LI');
  var img = document.createElement('IMG');
  img.src = pictures; 
  li.appendChild(img);
  img_list.append(li);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const inputBreed = $('#input-breed').val();
    getDogImage(inputBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

