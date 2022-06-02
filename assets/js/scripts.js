let openPass = document.querySelector('.open');
let openPassInput = document.querySelector('input[type="password"]');
const visiblePass = () => {
    openPass.classList.toggle('active')
    if (openPassInput.getAttribute("type") == 'password') {
        openPassInput.setAttribute("type", "text");
    } else {
        openPassInput.setAttribute("type", "password");
    }
}
openPass.addEventListener('click', visiblePass)