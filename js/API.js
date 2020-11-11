var apiUrl = 'https://www.potterapi.com/v1';
var apiKey = '$2a$10$jBnqiABzFBpt6e1Pc0y3POmMcwde52laEMC4GGuMPSpdXiA4l5GGC';

var characterPath = '/characters';
var sortingHatPath = '/sortingHat';
var housesPath = '/houses';
var spellsPath = '/spells';

function formResourcePath(path, queryParams) {
    var url = apiUrl + path;
    var parmas = '?key=' + apiKey;

    if (queryParams) {
        params = parmas + '&' + queryParams;
    }

    return  url + params;
}

/*async function getResourceFromAPI(path) {
    var response = await fetch(path);
    var data = await response.json();
    return data;
}*/

/*function getGryffindor() {
    var resourceUrl = formResourcePath(characterPath);
    getResourceFromAPI(resourceUrl).then(function(characters) {

        if (house === 'Gryffindor'){
            return ()
        }
        else{
            return
        }
    }*/

async function getCharacters() {
    var response = await fetch(formResourcePath(characterPath));
    var data = await response.json();
    if (response.ok) {
        formatCharacters(data);
        return data;
    }
}

async function getCharactersByHouse(house) {
    var queryParams = 'house=' + house;
    var response = await fetch(formResourcePath(characterPath, queryParams));
    var data = await response.json();
    if (response.ok) {
        formatCharacters(data);
        return data;
    }
}

function formatCharacters(characters) {
    var chars = document.createElement('ul');
    characters.forEach(function (character) {
        var charContainer = document.createElement('li');
        var charName = document.createElement('span');
        charName.innerText = character.name;
        charContainer.appendChild(charName);
        chars.appendChild(charContainer);
    });
    document.body.appendChild(chars);
}

/*function displaySortingHatAnswer(house) {
    $('#exampleModal').modal('show');
    var modalBody = $('.modal-body');
    modalBody.text(characters);
}*/