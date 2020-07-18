var button = document.querySelector('.call');
button.addEventListener('click', () => {
    var say = firebase.functions().httpsCallable('learning');
    say().then(result => {
        console.log(result.data);
        $('#test').html(result.data);
    });
})