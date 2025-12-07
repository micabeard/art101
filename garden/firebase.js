// Your web app's Firebase configuration provided when setting up the firebase
const firebaseConfig = {
  apiKey: "AIzaSyDrkHSpBUKFmxQDR6AtPWX8mxQxG9O5PMk",
  authDomain: "art101-78759.firebaseapp.com",
  projectId: "art101-78759",
  storageBucket: "art101-78759.firebasestorage.app",
  messagingSenderId: "778878539022",
  appId: "1:778878539022:web:c62f8bed2ab1fa68ad735f"
};
function loadCreaturesFromDB() {
 creaturesRef.once("value").then(snapshot => {
   const data = snapshot.val() || {};
   allCreatures = Object.keys(data).map(id => data[id]);
   renderAllCreatures();
 });
 function renderAllCreatures() {

 $("#creature-list").empty();

 allCreatures.forEach((cr, index) => {
   addCreatureToDOM(cr);
 });
}
}

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get database
  const db = firebase.database();

  // Reference to creatures collection, just our own name
  const creaturesRef = db.ref("garden/creatures");