import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDRzWeyqW1-b55U4L7xjpgfe7GSK4EwK2g",
  authDomain: "student-attendence-app-e9bf6.firebaseapp.com",
  projectId: "student-attendence-app-e9bf6",
  storageBucket: "student-attendence-app-e9bf6.appspot.com",
  messagingSenderId: "947319034478",
  appId: "1:947319034478:web:496a46ec90f5cdea08cc7f",
  };
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
 export default firebase.database()
 
 

  