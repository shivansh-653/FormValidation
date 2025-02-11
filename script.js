// Get references to error message elements
var nameError = document.getElementById('name-error');
var numberError = document.getElementById('number-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

// Function to validate the name input field
function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML='Name is required'; // Display error message if name is empty
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        nameError.innerHTML='Write Full Name'; // Ensure full name with space between first and last name
        return false;        
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>'; // Show success icon if valid
    return true;
}

// Function to validate the phone number input field
function validateNumber(){
    var number=document.getElementById('contact-number').value;
    if(number.length==0){
        numberError.innerHTML='Number is required'; // Display error message if number is empty
        return false;
    }
    if(number.length!=10){
        numberError.innerHTML='Number should be 10 digits'; // Ensure number is exactly 10 digits
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        numberError.innerHTML='Invalid Number'; // Ensure number consists only of digits
        return false;
    }
    numberError.innerHTML='<i class="fa-solid fa-circle-check"></i>'; // Show success icon if valid
    return true;
}

// Function to validate the email input field
function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML='Email is required'; // Display error message if email is empty
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML='Invalid email'; // Ensure correct email format
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>'; // Show success icon if valid
    return true;
}

// Function to validate the message input field
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    if(message.length==0){
        messageError.innerHTML='Message is required'; // Display error message if message is empty
        return false;
    }
    if(message.length<30){
        messageError.innerHTML=`${50-message.length} more characters required`; // Ensure minimum 30 characters
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>'; // Show success icon if valid
    return true;
}

// Automatically resize the message textarea based on content
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', function() {
    this.style.height = 'auto'; // Reset height
    this.style.height = this.scrollHeight+20 + 'px'; // Adjust height dynamically
});

// Function to validate the entire form before submission
function validateForm(){
    if(!validateName() || !validateNumber() || !validateEmail() || !validateMessage()){
        submitError.style.display='block'; // Show error message if validation fails
        submitError.innerHTML="Please Fix Error";
        setTimeout(function(){submitError.style.display="none";},3000); // Hide error message after 3 seconds
        return false;
    }
}