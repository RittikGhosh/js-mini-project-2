
let email = document.getElementById("Email");
let echeck = document.getElementsByClassName("email-check")[0];
let password = document.getElementById("Password");
let pcheck = document.getElementsByClassName("password-check")[0];
let checkcomplete = document.getElementsByClassName("checkcomplete")[0];
let submit = document.getElementsByClassName("submit")[0];
let eflag = false;
let pflag = false;

//on clicking on the submit this fn will run
submit.onclick = () => {
    if (confirm('Are you sure your email and password are correct?')) {
        if (eflag === true && pflag === true) {
            alert("Successful signup!");
        } 
    } else {
        //clearing all inputs in the from
        document.getElementById("myForm").reset();
    }
};

//checking for email validation 
email.onchange=()=>{
    let evalue = email.value;
    console.log(evalue);
    if (evalue.length > 3 && evalue.includes("@") && evalue.includes(".")) {
        eflag = true;
        check();
    } else {
        eflag = false;
        check();
    }
}

//checking for password validation 
password.onchange= ()=>{
    let pvalue = password.value;
    if (pvalue.length > 8) {
        pflag = true;
        check();
    } else {
        pflag = false;
        check();
    }
}

//checking if both email and password validations are correct 
function check() {
    if (pflag === true && eflag === true) {
        echeck.style.display = "none";
        pcheck.style.display = "none";
        checkcomplete.style.display = "block";
    } else {
        echeck.style.display = "block";
        pcheck.style.display = "block";
        checkcomplete.style.display = "none";
        
    }
}