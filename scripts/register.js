document.addEventListener('DOMContentLoaded', function() {
    const usFlag = document.getElementById('unitesstates');
    const trFlag = document.getElementById('turkey');
    const phoneInput = document.getElementById('placeholder');

    if (usFlag) {
        usFlag.addEventListener("click", function() {
            phoneInput.placeholder = '+1 (***) ***-****';
            console.log("US flag clicked");
        });
    } else {
        console.error('US flag element not found');
    }

    if (trFlag) {
        trFlag.addEventListener("click", function() {
            phoneInput.placeholder = '+90 (***) ***-****';
        });
    } else {
        console.error('TR flag element not found');
    }
});
