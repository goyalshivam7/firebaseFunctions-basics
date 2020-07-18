$('#submitRealtimeDatabase').click(function() {

    var store = firebase.functions().httpsCallable('realtimeDatabase');
    store().then(result => {
        console.log(result.data);
    });
});

$('#submit').click(function() {
    var category = $('#field').val();
    var name = $('#name').val();
    var description = $('#des').val();
    var title = $('#title').val();


    var storeData = firebase.functions().httpsCallable('myFunction');
    storeData({ Category: category, Name: name, Description: description, Title: title }).then(result => {
        console.log(result.data);
    });
});

firestore.collection('Bussiness').onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        console.log(change.doc.data());
    });
});