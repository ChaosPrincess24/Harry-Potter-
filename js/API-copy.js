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
        // Here is where you would show your data
        displaySortingHatAnswer(house);
    });
}

function displaySortingHatAnswer(house) {
    alert(house);
}