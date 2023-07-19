var nameError = document.getElementById("name-Error");
var emailError = document.getElementById("email-Error");
var phoneError = document.getElementById("phone-Error");
var messageError = document.getElementById("message-Error");

function validateName() {
  var name = document.getElementById("contactname").value;
  if (name.length === 0) {
    nameError.innerHTML = "Fill the required field";
    return false;
  }
  if (name.length <= 5) {
    nameError.innerHTML = "More than 5 characters required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+\s+[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validationEmail() {
  var email = document.getElementById("user-Email").value;
  if (email.length === 0) {
    emailError.innerHTML = "Write email";
    return false;
  }
  if (email.length <= 5) {
    emailError.innerHTML = "More than 5 characters required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatephone() {
  var phone = document.getElementById("phone-number").value;
  if (phone.length === 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only 10-digit phone number allowed";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validationmessage() {
  var message = document.getElementById("why-hire").value;
  if (message.length === 0) {
    messageError.innerHTML = "Write the message";
    return false;
  }
  if (message.length <= 20) {
    messageError.innerHTML = "It should be more than 20 characters";
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

let allow = ["png", "gif", "jpeg"];
function validation(e) {
  let file = e.target.files[0];
  console.log(file);
  let fname = file.name;
  console.log(file.name);
  let ext = fname.split(".")[1];
  if (allow.includes(ext)) {
    alert("valid");
  } else {
    alert("invalid file format");
  }
}

function validationresumetype(e) {
  let file = e.target.files[0];
  let size = file.size;
  if (size < 1000 * 2000) {
    alert("valid");
  } else {
    alert("less than 2MB required");
  }
}

function validationprojects(e) {
  let file = e.target.files[0];
  let size = file.size;
  console.log(size.file)
  if (size < 100000 * 600000) {
    alert("valid");
  } else {
    alert("less than 2MB required");
  }
}

// 1mb = 1000kB
// 1byte = 0.0001
