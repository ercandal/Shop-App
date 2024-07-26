const form = document.querySelector("#form");
const mailInput = document.querySelector("#exampleInputEmail1");
const pass1Input = document.querySelector("#exampleInputPassword1");
const forgetInput = document.querySelector("#forget");

const mail = "asd@asd"
const pass = "asd"

action()

function action() {
    form.addEventListener("submit", loginCheck)
    forgetInput.addEventListener("click", forget)
}

function loginCheck(e) {

    if (mailInput.value.trim() == mail || pass1Input == pass) {
        
        alert("Giriş başarılı yönlendiriliyorsunuz...")
        setTimeout(() => {
            window.location.href = "index.html"
        }, 2000);
    } else {
        alert("Hatalı mail veya parola")
        mailInput.value = ""
        pass1Input.value = ""
    }
    
    e.preventDefault();
}

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl , {
    title: 'Static mail : asd@asd <br> pass : asd',
    placement: "bottom",
    html: true
  })
})

function forget() {
    alert("Şifre kurtarma sayfasına yönlendiriliyorsunuz...")
        setTimeout(() => {
            window.location.href = "forget.html"
        }, 2000);
}