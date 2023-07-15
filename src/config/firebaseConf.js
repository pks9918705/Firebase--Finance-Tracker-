// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
import { getAuth  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8dhAbcof7yEl0oayJ-fyTFrV-GpmtnD8",
  authDomain: "finance-tracker-50d01.firebaseapp.com",
  projectId: "finance-tracker-50d01",
  storageBucket: "finance-tracker-50d01.appspot.com",
  messagingSenderId: "724282845159",
  appId: "1:724282845159:web:29faaa21c723e7dbf83f42"
};

// Initialize Firebase
const ProjectFirebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const ProjectAuth =  getAuth(ProjectFirebase);

export { ProjectAuth, ProjectFirebase };
