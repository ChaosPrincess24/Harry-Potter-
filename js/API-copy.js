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
            modalContent.style.backgroundColor = "green";
        }
        else if (house === 'Hufflepuff') {
            modalContent.style.backgroundColor = "gold";
        }
        else if (house === 'Gryffindor') {
            modalContent.style.backgroundColor = "darkred";
        }
        else if (house === 'Ravenclaw') {
            modalContent.style.backgroundColor = "navy";
        }
        displaySortingHatAnswer(house);
    });
}

function displaySortingHatAnswer(house) {
    $('#exampleModal').modal('show');
    var modalBody = $('.modal-body');
    modalBody.text(house);
}