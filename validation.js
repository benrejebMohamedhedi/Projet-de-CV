function validateForm()
{
var nbrElt = document.getElementById('form').elements.length;
console.log(nbrElt);
var flag = false;
for(var i=0 ; i<nbrElt ; i++)
{
	var elt = document.getElementById('form').elements[i];
	if(elt.value =="")
	{
		elt.parentNode.classList.add('error');	
		//elt.addEventListener('keydown', removeValidateProfile(elt));
		flag = true;
	}

}
//confirm("tout les champs sont obligatoires");
if(flag)
{
	return false;
}
}


function validateName()
{
	var name 		= document.getElementById('name');
	var nameOk		= document.getElementById('name').value;
	var regexName	= new RegExp(/([A-Za-z])/);
	var nameRegex	= new RegExp(/[a-zA-Z][0-9]/)
	var nameError	= document.getElementById('nameError');
	if (!(regexName.test(nameOk))) 
	{
		name.parentNode.classList.remove('correct');
		name.parentNode.classList.add('error');
		nameError.textContent 	= "name should not contain a number";
		return false;
	}
	else if ((nameRegex.test(nameOk)))
	{
		name.parentNode.classList.remove('correct');
		name.parentNode.classList.add('error');
		nameError.textContent ="name should not contain any number";
		return false;
	}
	else
	{
		name.parentNode.classList.remove('error');
		name.parentNode.classList.add('correct');
		nameError.textContent ="";
		return true;
	}
}

function validatePlace()
{
	var place 		= document.getElementById('place');
	var regexPlace	= new RegExp(/([A-Za-z])/);
	var placeError	= document.getElementById('placeError');
	if (!(regexPlace.test(place.value))) 
	{
		place.parentNode.classList.remove('correct');
		place.parentNode.classList.add('error');
		placeError.textContent 	= "place should not be a number";
		return false;
	}
	else
	{
		place.parentNode.classList.remove('error');
		place.parentNode.classList.add('correct');
		placeError.textContent 	= "";
		return true;
	}

}

function validateAdress()
{
	var adress 		= document.getElementById('adress');
	var regexPlace	= new RegExp(/([A-Za-z])/);
	var adressError	= document.getElementById('adressError');
	if (!(regexPlace.test(adress.value))) 
	{
		adress.parentNode.classList.remove('correct');
		adress.parentNode.classList.add('error');
		adressError.textContent 	= "adress should not be a number";
		return false;
	}
	else
	{
		adress.parentNode.classList.remove('error');
		adress.parentNode.classList.add('correct');
		adressError.textContent 	= "";
		return true;
	}

}

function validatePhone()
{
	var phone 		= document.getElementById('phone');
	var phoneOk		= document.getElementById('phone').value;
	var regexPhone	= new RegExp(/^(\+216|00216)?[2-3-4-5-7-9]{1}[0-9]{7}/);
	var phoneRegex	= new RegExp(/[^A-Za-z]/);
	var phoneError	= document.getElementById('phoneError');
	if (regexPhone.test(phoneOk))
	{
		phone.parentNode.classList.remove('correct');
		phone.parentNode.classList.add('error');
		phoneError.textContent 	= "phone should be like +21629699533";
		return false;
	}
	else if(!(phoneRegex.test(phoneOk)))
	{
		phone.parentNode.classList.remove('correct');
		phone.parentNode.classList.add('error');
		phoneError.textContent 	= "phone number should not contain any caracter";
		return false;
	}
	else
	{
		phone.parentNode.classList.remove('error');
		phone.parentNode.classList.add('correct');
		phoneError.textContent 	= "";
		return true;
	}
}


/*
function validateForm(){

	var name 			= document.forms['form']['name'];
	var placeBirth 		= document.forms['form']['placeBirth'];
	var adress 			= document.forms['form']['adress'];
	var phone 			= document.forms['form']['phone'];
	var mail 			= document.forms['form']['mail'];
//var gitprofile = document.getElementById('gitprofile').value;

	//name_error		= document.getElementById('name_error'),
	//place_error		= document.getElementById('place_error'),
	//adress_error	= document.getElementById('adress_error'),
	//phone_error		= document.getElementById('phone_error'),
	//mail_error		= document.getElementById('mail_error'),
}





function validate()
{
var name 			= document.getElementById('name'),
	placeBirth 		= document.getElementById('place'),
	adress 			= document.getElementById('adress'),
	phone 			= document.getElementById('phone'),
	mail 			= document.getElementById('mail');
//var gitprofile = document.getElementById('gitprofile').value;

	//name_error		= document.getElementById('name_error'),
	//place_error		= document.getElementById('place_error'),
	//adress_error	= document.getElementById('adress_error'),
	//phone_error		= document.getElementById('phone_error'),
	//mail_error		= document.getElementById('mail_error'),

var divList			= document.getElementsByClassName('error');
//remove('error');
	for (var i =0 ; i < divList.length; i++) 
	{
		divList[i].classList.remove('error');
		
	}
	/*if (name.value === "") 
	{
		document.getElementById('name').add('error');
		return false;
	}*/
/*
	for (var i = 0; i <= divList.length ; i++) 
	{
		divList[i].classList.remove('error');
	}*/

/*
function validateForm() {
   var element 	= document.getElementById("myDIV");
   var name 	= document.getElementById('name').value;
   if (name === "") 
	{
   		element.classList.add("error");
   		return false;
   	}
}
/*
name.addEventListener("blur", nameVerify, true);
placeBirth.addEventListener("blur", placeVerify, true);
adress.addEventListener("blur", adressVerify, true);
phone.addEventListener("blur", phoneVerify, true);
mail.addEventListener("blur", mailVerify, true);

*/
/*	var regexName = new RegExp(/([^A-Za-z])/);
	var regexPlace = new RegExp(/([^A-Za-z])/);
	var regexPhone = new RegExp(/^(\+216|00216)?[2-3-4-5-7-9]{1}[0-9]{7}/);
*/

/*
	if (name.value == "") 
	{
		name.style.border 		= "1px solid red";
		name_error.textContent 	= "name is required";
		name.focus();
		return false;
	}

	if (placeBirth.value == "") 
	{
		placeBirth.style.border		= "1px solid red";
		place_error.textContent 	= "place of birth is required";
		placeBirth.focus();
		return false;
	}

	if (adress.value == "") 
	{
		adress.style.border 		= "1px solid red";
		adress_error.textContent 	= "adress is required";
		adress.focus();
		return false;
	}

	/*if (name.value != "") 
	{
		name.style.border 		= "1px solid #5E6E66";
		name_error.textContent 	= "";
		return true;
	}*/


	/*

	switch(name) {
    case '':
        alert('le nom doit etre renseigner');
		return false
        break;
	}
	
	switch(placeBirth) {
	case '':
	    alert('le lieu de naissance doit etre renseigner');
		return false
	    break;
	}

	switch(adress) {
	case '':
	    alert("l'adresse doit etre renseigner");
		return false
	    break;
	}

	switch(mail) {
	case '':
	    alert('le mail doit etre renseigner');
		return false
	    break;
	}

	switch(gitprofile) {
	case '':
	    alert('le profile de gitHub doit etre renseigner');
		return false
	    break;
	}

	if (regexName.test (name)) 
	{
	alert ('Le nom ne doit pas contenir des chiffres'); 
	return false;
	}

	if (regexPlace.test (placeBirth)) 
	{
	alert ('Le lieu de naissance ne doit pas contenir des chiffres');
	return false;
	}


	if (!regexPhone.test (phone))
	{
	alert ('le numero de tel doit etre comme +21629699533 et non vide');
	return false;
	}  

*/

/*
function addLanguages()
{
	var input 						= addInputLanguages.innerHTML ;
	addInputLanguages.innerHTML 	= input + '<input class="input" name="languages" placeholder="speaking languages" type="text"><br><input class="input" name="languages" placeholder="level" type="text">';
}

function add()
{
	var input 					= addInput.outerHTML ;
	addInput.outerHTML 	= input + '<input class="input" name="name[]" placeholder="name" type="text"><br>';
}

function addHobbies()
{
	var input 					= addInputHobbies.outerHTML ;
	addInputHobbies.outerHTML 	= input + '<input class="input" name="hobbies" placeholder="hobbies" type="text"><br>';
}

function addEducation()
{
	var input 						= addInputEducation.outerHTML ;
	addInputEducation.outerHTML 	= input + '<tr><td><input type="date" name="dateBegin"> - <input type="date" name="dateEnd"></td><td><input type="text" name="description" placeholder="tell us about those yeas"></td></tr><br>';
}

function addAcadExperience()
{
	var input 					= addInputAcadExperience.outerHTML ;
	addInputAcadExperience.outerHTML 	= input + '<tr><td><input type="date" name="dateBegin"> - <input type="date" name="dateEnd"></td><td><textarea name="description" placeholder="tell us about that experience"></textarea></td></tr><br>';
}
*/