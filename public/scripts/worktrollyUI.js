
$("#createNewTask").ready(function() {
    $("#createNewTask").hide(0);


});

$("#createNewTaskButton").click(function() {
    $("#createNewTask").show();
    var date = new Date();
    $("#creationDateCreateNewTask").html(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());

});

$("#backToMainFromCreateNewTask").click(function() {
    $('#createNewTask').hide(100);
});

$('#submitTask').click(function() {
    var category = $('#field').val();
    var name = $('#name').val();
    var description = $('#des').val();
    var title = $('#title').val();
    var creator = $('#creator').val();
    var et = $('#et').val();
    var priority = $('#priority').val();


    var createNewTask = firebase.functions().httpsCallable('createNewTaskWorktrolly');
    createNewTask({ Category: category, Name: name, Description: description, Title: title, Creator: creator, ET: et, Priority: priority }).then(result => {
        console.log(result.data);
    });
});

firestore.collection('Bussiness').onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        console.log(change.doc.data());
    });
});


function createInstance(id, data) {
    datalist[id] = new Data(data);
}