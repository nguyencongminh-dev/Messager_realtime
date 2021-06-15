function modalSwitch(){
    // Get the modal
    let modal = document.getElementById('modal');
    let modal__overlay = document.getElementById('modal__overlay');
    let register = document.querySelector(".register--sw");
    let login = document.querySelector(".login--sw");
    let btnLogin = document.querySelectorAll(".login");
    let btnRegister = document.querySelectorAll('.register');
    let btnBack = document.querySelectorAll('.back');
    let register_form = document.getElementById('register_form');
    let login_form = document.getElementById('login_form');
    let forgot = document.getElementById('forgot');

    register.addEventListener("click", ()=>{
        modal.style.display = "flex";
        login_form.style.display = "none";
        register_form.style.display = "block";
        forget_form.style.display = "none";
    });

    login.addEventListener("click", ()=>{
        modal.style.display = "flex";
        register_form.style.display = "none";
        login_form.style.display = "block";
        forget_form.style.display = "none";
    });

    forgot.addEventListener("click", ()=>{
        modal.style.display = "flex";
        register_form.style.display = "none";
        login_form.style.display = "none";
        forget_form.style.display = "block";
    });

    window.onclick = function(event) {
        if (event.target == modal__overlay) {
        modal.style.display = "none";
        }
    }

    btnLogin.forEach(element => {
        element.addEventListener("click", ()=>{
            modal.style.display = "flex";
            login_form.style.display = "block";
            register_form.style.display = "none";
            forget_form.style.display = "none";
        });
    });

    btnRegister.forEach(element => {
        element.addEventListener("click", ()=>{
            modal.style.display = "flex";
            login_form.style.display = "none";
            register_form.style.display = "block";
            forget_form.style.display = "none";
        });
    });

    btnBack.forEach(element => {
        element.addEventListener("click", ()=>{
            modal.style.display = "none";
        });
    });

}
modalSwitch();

function showHidePass(){
    let x = document.getElementById("password");
    let wsShowHide = document.querySelectorAll(".show-hide-password");
    let changeColorIcon = document.querySelectorAll(".show-hide-password-icon");

    wsShowHide.forEach(element => {
        element.addEventListener("click", ()=>{
            if (x.type === "password") {
                x.type = "text";
                    changeColorIcon.forEach(element => {
                        element.style.color = "#FFD700";
                    });
                } else {
                x.type = "password";
                    changeColorIcon.forEach(element => {
                        element.style.color = "var(--black-color)";
                    });
            }
        });
    });
}
showHidePass();

