const form = document.querySelector("#form");
const mailInput = document.querySelector("#exampleInputEmail1");
const confirmCode = document.querySelector("#confirmCode");

action()
function action() {
    form.addEventListener("submit", codeConfirm)
}

function codeConfirm(e){
    if (true) {
        alert("Giriş başarılı yönlendiriliyorsunuz...")
        setTimeout(() => {
            window.location.href = "index.html"
        }, 2000);
    } else {
        alert("Hatalı kod tekrar deneyiniz...")
        setTimeout(() => {
            window.location.href = "index.html"
        }, 2000);
    }
    e.preventDefault();
}
