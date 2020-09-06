
  // const firebase = require("firebase");
  // // Required for side-effects
  // require("firebase/firestore");
  // Initialize Firebase
  
  //firebase.analytics();

  var db = firebase.firestore();
  db.collection("qrcode").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
