var apiUrl = 'https://www.potterapi.com/v1';
var apiKey = '$2a$10$jBnqiABzFBpt6e1Pc0y3POmMcwde52laEMC4GGuMPSpdXiA4l5GGC';

var characterPath = '/characters';
var sortingHatPath = '/sortingHat';
var housesPath = '/houses';
var spellsPath = '/spells';

function formResourcePath(path) {
    return apiUrl + path + '?key=' + apiKey;
}

async function getResourceFromAPI(path) {
    var response = await fetch(path);
    var data = await response.json();
    return data;
}

function getSortingHat() {
    var resourceUrl = formResourcePath(sortingHatPath);
    getResourceFromAPI(resourceUrl).then(function(house) {
        
        var modalContent = document.querySelector('.modal-content')
        if (house === 'Slytherin') {
            modalContent.style.backgroundColor = "#1a472a";
        }
        else if (house === 'Hufflepuff') {
            modalContent.style.backgroundColor = "#ecb939";
        }
        else if (house === 'Gryffindor') {
            modalContent.style.backgroundColor = "darkred";
        }
        else if (house === 'Ravenclaw') {
            modalContent.style.backgroundColor = "#0e1a40";
        }
        displaySortingHatAnswer(house);
    });
}

function displaySortingHatAnswer(house) {
    $('#exampleModal').modal('show');
    var modalBody = $('.modal-body');
    modalBody.text(house);
}

function getSpells() {
    var resourceUrl = formResourcePath(spellsPath);
    getResourceFromAPI(resourceUrl).then(function(spell) {
      alert(spell)
        displaygetSpells(spell);
    });
  }
  
  function display(spell) {
    $('#spellModal').modal('show');
    var modalBody = $('.modal-body');
    modalBody.text(spell);
  }



document.addEventListener('DOMContentLoaded', function() {
    var url = new URL(window.location.href);
    if( url.searchParams.has('name')) {
        alert('Thank you ' + url.searchParams.get('name') + 'for contacting Hogwarts.');
    }
})