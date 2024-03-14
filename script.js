const form = document.querySelector(".contact-form-container");

function sendEmail(){
    const message = document.getElementById("message");
    const subject = document.getElementById("name");
    const bodyMessage = message.value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anjelikaharutyunyan03@gmail.com",
        Password : "A404DB054F074431136C8D8B7B5FCFF744AF",
        To : 'anjelikaharutyunyan03@gmail.com',
        From : "anjelikaharutyunyan03@gmail.com",
        Subject : subject,
        Body : bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

function toggleMobileMenu() {
    const menuItems = document.querySelector('.menu-items');
    const hamMenu = document.querySelector('.header__main-ham-menu');
    const hamMenuClose = document.querySelector('.header__main-ham-menu-close');
    menuItems.classList.toggle('mobile-menu-open');
    hamMenu.classList.toggle('d-none');
    hamMenuClose.classList.toggle('d-none');
  }
  