import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAu_sIrLVwB7YYODp-GpPGmFtFbHQuvYdU",
    authDomain: "devsapp-44b6b.firebaseapp.com",
    databaseURL: "https://devsapp-44b6b.firebaseio.com",
    projectId: "devsapp-44b6b",
    storageBucket: "devsapp-44b6b.appspot.com",
    messagingSenderId: "673429290834",
    appId: "1:673429290834:web:3de4afb028b721ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;