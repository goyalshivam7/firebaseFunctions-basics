const functions = require('firebase-functions');

const cors = require('cors')({ origin: true });
// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();


exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Started with firebase functions");
});

exports.learning = functions.https.onCall((data, context) => {
    return 'hello';
});

exports.realtimeDatabase = functions.https.onCall((req, resp) => {
    return admin.database().ref('/messages').push({
            text: 'hello',
            author: 'shivam'
        }).then(() => {
            console.log('New Message written');
            // Returning the sanitized message to the client.
            return { text: 'completed' };
        })
        // [END returnMessageAsync]
        .catch((error) => {
            // Re-throwing the error as an HttpsError so that the client gets the error details.
            throw new functions.https.HttpsError('unknown', error.message, error);
        });

});


// firestore trigger
exports.myFunction = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        var name = request.body.data.Name;
        var category = request.body.data.Category;
        var description = request.body.data.Description;
        var title = request.body.data.Title;

        firestore.collection(category).doc(name).set({
                Category: category,
                Name: name,
                Title: title,
                Description: description
            })
            .then(() => {
                console.log('successfully saved');
                return response.status(200).send(result);
            })
            .catch(() => {
                console.error('error', error);
            });
    });
});

exports.createNewTaskWorktrolly = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        var name = request.body.data.Name;
        var category = request.body.data.Category;
        var description = request.body.data.Description;
        var title = request.body.data.Title;
        var creator = request.body.data.Creator;
        var et = request.body.data.ET;
        var priority = request.body.data.Priority;

        firestore.collection(category).doc(name).set({
                Category: category,
                Name: name,
                Creator: creator,
                ET: et,
                Priority: priority,
                Title: title,
                Description: description
            })
            .then(() => {
                console.log('successfully saved');
                return response.status(200).send(result);
            })
            .catch(() => {
                console.error('error', error);
            });
    });
});