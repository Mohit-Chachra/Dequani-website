var elText="1000";
makeCode();

function makeCode () {

  var db = firebase.firestore();

  db.collection("web_scan").doc("tDcsvYYfTp9Xoc9BWqRK").onSnapshot(function(doc){
    if (doc.exists) {
        elText=doc.data().value; 
        console.log("Document data:", doc.data().value);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
  // var db = firebase.firestore();
  //     db.collection("qrcode").get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //       // console.log(`${doc.id} => ${doc.data().ProductID
  //        elText=doc.data().eq;
  //       console.log(elText);
  //       });
  //   });
 
  // if (!elText) {
  //   alert("Input a text");
  //   elText.focus();
  //   return;
  // }
 
   qrcode.makeCode(elText);
}