document.getElementById("checkBtn").addEventListener("click", function(){
    const password = document.getElementById("password").value;
    const resultDiv = document.getElementById("result");

    let strength = 0;
    if(password.length >= 8) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[a-z]/.test(password)) strength++;
    if(/[0-9]/.test(password)) strength++;
    if(/[!@#$%^&*()_+]/.test(password)) strength++;

    let message = "";
    let cssClass = "";

    if(strength <= 2) {
        message = "Weak";
        cssClass = "weak";
    }
    else if(strength <= 4) {
        message = "Moderate";
        cssClass = "moderate";
    }
    else {
        message = "Strong";
        cssClass = "strong";
    }

    resultDiv.innerHTML = `<h4 class="${cssClass}">Password Strength: ${message}</h4>`;
});