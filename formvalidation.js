/****************************************
	Assignment: Final Project
	Name: Sean Piche
	Date April 27th 2020
	Description Html for my final project contact form.
*****************************************/

//Handles the load event of the form.
function load(){
	hideErrors();
	document.getElementById("contactForm").addEventListener("submit", checkData, false);
	document.getElementById("contactForm").addEventListener("reset", resetFields, false);
}

//Calls the formHasErrors function.
function checkData(e){
	hideErrors();
	if(formHasErrors()){
		e.preventDefault();
		return false;
	}
	return true;
}

//Hides all of the error messages on the form.
function hideErrors(){
	let error = document.getElementsByClassName("error");

	for(let i = 0; i < error.length; i++){
		error[i].style.display = "none";
	}
	document.getElementById("name").focus();
    document.getElementById("name").select();
}

//Validates the inputs to ensure proper functionality.
function formHasErrors(){
	let name = document.getElementById("name").value;
	let phoneNumber = document.getElementById("phone").value;
	let errorFlag = false;
	let regex = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);	
    let email = document.getElementById("email").value;
    if(name == ""){
    	if(!errorFlag){
    		document.getElementById("name").focus();
    		document.getElementById("name").select();
    	}
    	errorFlag = true;
    	document.getElementById("name_error").style.display = "block";
    }
    if(!regex.test(phoneNumber)){
    	if(!errorFlag){
    		document.getElementById("phone").focus();
    		document.getElementById("phone").select();
    	}
    	document.getElementById("phone_error").style.display = "block";
    	errorFlag = true;
    }
    regex = new RegExp(/^(([^<>()\[\]\\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(!regex.test(email)){
        if(!errorFlag){
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }
        document.getElementById("email_error").style.display = "block";
        errorFlag = true;
    }
    return errorFlag;

}

//Resets the form to its initial state.
function resetFields(){
	document.getElementById("name").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("email").value - "";
	document.getElementById("comments").value = "";
	hideErrors();
}
//Triggers on form load
document.addEventListener("DOMContentLoaded", load);