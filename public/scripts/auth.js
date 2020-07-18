var authWrapper = document.querySelectorAll('.auth');
var login = document.querySelectorAll('#login');
var registerForm = document.querySelectorAll('#register');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var email = registerForm.email.value;
    var password = registerForm.password.value;
    console.log(email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('registered', user);
        });
});