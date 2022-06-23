
const formEl = document.querySelector(".login-form");
const inputEl = document.querySelectorAll("input")
const btnResetEl = document.createElement("button")
btnResetEl.textContent = "Reset";
btnResetEl.style.marginTop = "16px";
btnResetEl.style.width = "320px"
document.getElementsByName("email").value;
btnResetEl.addEventListener('click', resetAllInformation)

function resetAllInformation () {
    formEl.reset()
}
formEl.after(btnResetEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const elements = event.currentTarget.elements
    const email = elements.email.value;
    const password = elements.password.value;
    const formData = {email, password,};
    console.log(formData)
    if (email.length === 0 || password.length === 0) {
        alert ("Не спешите :), нужно вести все данные")
    }
}

// inputEl.addEventListener('input',(event) => {
//     console.log(event.currentTarget.value.length)
//     if (event.currentTarget.value.length = 0) { 
//         alert ("Не спеши :), все поля должны быть заполнены")
//     }
// })