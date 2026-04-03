
let registerform = document.querySelector("#register-form");
let inputs = document.querySelectorAll("#register-form input");

registerform.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstname = inputs[0].value.trim();
    let lastname = inputs[1].value.trim();
    let email = inputs[2].value.trim();
    let password = inputs[3].value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(u => u.email === email);
    if(existingUser) {
        alert("Email already registered!");
        return;
    }

    if (!firstname || !lastname || !email || !password) {
        alert("Please fill in all the fields.");
    } else {
        users.push({ firstname, lastname, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        
        alert("Registration successful! Now you can Login.");
    }
});

