function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  var apiUrl = 'https://www.potterapi.com/v1';

var characterPath = '/characters';
var sortingHatPath = '/sortingHat';
var spellsPath = '/spells';

var apiKey = '$2a$10$tf1drDIbMmustrmfE/Q1GuXNfZn/EQewjxKGl5.yhDLOxgM9NftJ2';

var queryString = '?key=' + apiKey;

var resourceUrl = apiUrl + characterPath + queryString;

async function getResourceFromAPI() {
    var response = await fetch(resourceUrl);
    var data = await response.json();
    return data;
    }

function getSpells() {
  var resourceUrl = formResourcePath(spellsPath);
  getResourceFromAPI(resourceUrl).then(function(spell) {
    alert
      displaygetSpells(spell);
  });
}

function display(spell) {
  $('#spellModal').modal('show');
  var modalBody = $('.modal-body');
  modalBody.text(spell);
}