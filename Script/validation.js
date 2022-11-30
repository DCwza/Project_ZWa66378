function runValidation(form){
    if(validateFirstName(form)){     
        if(validateLastName(form)){
            if(validateCountry(form)){
                if(validateEmail(form)){
        return false;} }}}  
}

function validateFirstName(form){  
    var fname = form.elements["firstName"];
    if(fname.validity.valueMissing){
        fname.setCustomValidity("Please enter your first name");
        return false;
    }    
    else{
        fname.setCustomValidity("");
        return true;
    }
} 
function validateLastName(form){  
    var lname = form.elements["lastName"];
    if(lname.validity.valueMissing){
        lname.setCustomValidity("Please enter your last name");
        return false;
    }    
    else{
        lname.setCustomValidity("");
        return true;
    }
} 
function validateCountry(form){  
    var coun = form.elements["country"];
    if(coun.validity.valueMissing){
        coun.setCustomValidity("Please enter your country");
        return false;
    }    
    else{
        coun.setCustomValidity("");
        return true;
    }
} 
function validateEmail(form){
    var email = form.elements["email"];

    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter the email address");
        return false;        
    }
    else if(email.validity.patternMismatch){
        email.setCustomValidity("Email contains @ signal.");
        return false;
    }
    else{
        email.setCustomValidity("");
        return true;
    }

} 
