const form = document.querySelector("#form");
const mailInput = document.querySelector("#exampleInputEmail1");
const pass1Input = document.querySelector("#exampleInputPassword1");
const pass2Input = document.querySelector("#exampleInputPassword2");
const telnoInput = document.querySelector("#exampleInputTelno1");
const clearStorageInput = document.querySelector("#clearStorage");

let register = []
action();

function action() {
    form.addEventListener("submit", formcheck);
    clearStorageInput.addEventListener("click", clearStorage)
}

function formcheck(e) {
    const mailInputText = mailInput.value
    const pass1InputText = pass1Input.value
    const pass2InputText = pass2Input.value
    const telnoInputText = telnoInput.value
    const registerInputText = [mailInputText,pass1InputText,pass2InputText,telnoInputText]

    if (mailInputText == null || mailInputText == "" ||
        pass1InputText == null || pass1InputText == "" ||
        pass2InputText == null || pass2InputText == "" ||
        telnoInputText == null || telnoInputText == "")
    {
        alert("Lütfen gerekli alanları doldurunuz")
    } else {
        addToStorage(registerInputText)
    }
    e.preventDefault();
}

function addToStorage (newRegister) {
    register.push(newRegister)
    localStorage.setItem("register",JSON.stringify(register))
}

function clearStorage() {
    localStorage.removeItem("register")
}