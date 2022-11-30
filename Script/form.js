

function processData(form){
    runValidation(form);


    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var country = form.elements["country"].value;
    var email = form.elements["email"].value;
    //var radio = form.elements["favorite"];
    var radio = form.elements["option"];
    var tripDate = form.elements["tripDate"].value;
    var status;
    var op;

    for (let i=0; i<radio.length; i++){
        if(radio[i].checked){
            status = radio[i].value;
            break; 
        } }
    if (status == "Yes"){
        op = "It is great to hear you are going to visit Olympic National Park on " + tripDate +"!";
        }
    else if(status == "No"){
        op = "I think you should arrange a future trip to Olympic National Park.";
        }
    else{op = "Well, let me know after you make your mind.";}
    


    var checkboxes = form.elements["destination"];
    var yourDestination = '';
    for(let i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            yourDestination +=checkboxes[i].value.toUpperCase() + " ";

        }
    }
    des = yourDestination+ " is a great option to go!";

    
    var text = "Hi, " + firstName + " " + lastName + ", Nice to meet you here! \n"
    + "Well, you are from " + country +".  Is there any interesting places to visit in " + country +"? \n" +
    " Tell me something about your hometown in the textarea below.  Thank you!"
    text = text + "Please let me know if I can send email to your mailbox at " +email + "?\n"
    + op +"\n" + des;

    var target = document.getElementById("sidera");
    target.innerText = text;
}

function thankYou(){
    let img = document.createElement('img');
    img.src = "Images/thankyou.gif";
    img.alt = "thank you gif";
    img.style.width="100%";
    img.style.height="20%";
 
    var target = document.getElementById("sidera");
    target.append(img);
}