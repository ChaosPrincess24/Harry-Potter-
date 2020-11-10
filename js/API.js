var apiUrl = 'https://www.potterapi.com/v1';

var characterPath = '/characters';
var sortingHatPath = '/sortingHat';
var housesPath = '/houses';
var spellsPath = '/spells';

var apiKey = '$2a$10$jBnqiABzFBpt6e1Pc0y3POmMcwde52laEMC4GGuMPSpdXiA4l5GGC'

var queryString = '?key=' + apiKey;

var resourceUrl = apiUrl + characterPath + queryString;

async function getCharacters() {
    var response = await fetch(resourceUrl);
    var data = await response.json();
    if (response.ok) {
        formatCharacters(data);
        return data;
    }
}

function formatCharacters(characters) {
    var chars = document.createElement('ul');
    characters.forEach(function(character) {
        var charContainer = document.createElement('li');
        var charName = document.createElement('span');
        charName.innerText = character.name;
        charContainer.appendChild(charName);
        if (character.house) {
            var charHouse = document.createElement('div');
            charHouse.classList.add('house');
            charHouse.innerText = character.house;
            charContainer.appendChild(charHouse);
        }
        chars.appendChild(charContainer);
    });
    document.body.appendChild(chars);
}

function sortingHat(houses) {
    var house = data.apiUrl.sortingHatPath;

    $(".sortinghat").append(houses);
    setTimeout(sortingHat, 10);
}

function sortingHat() {
    myWindow.resizeTo(250, 250);                             // Resizes the new window
    myWindow.focus(); 
