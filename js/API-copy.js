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

<script>
function validateForm(){
	var name = document.forms["myForm"]["your-name"].value;
	var email = document.forms["myForm"]["your-email"].value;
	var phone = document.forms["myForm"]["your-phone"].value;
	var message = document.forms["myForm"]["your-message"].value;

	if (name.length<2) {
        document.getElementById('error-name').innerHTML = " Please Enter Your Name *"
    }
    if (email.length<2) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
    }
    if (phone.length<10) {
        document.getElementById('error-phone').innerHTML = " Please Enter Your Phone *";      
    }
    if (message.length<2) {
        document.getElementById('error-message').innerHTML = " Please Enter Your Message *";
    }          
    if(name.length<2 || email.length<2 || phone.length<10 || message.length<2){
       	return false;
    }   

}
</script>