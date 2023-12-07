import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function Firebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyBHMIXa-yhUdgTKQGJCt1GUmVQSfQ7XoxY",
        authDomain: "c4c-site.firebaseapp.com",
        databaseURL: "https://c4c-site-default-rtdb.firebaseio.com",
        projectId: "c4c-site",
        storageBucket: "c4c-site.appspot.com",
        messagingSenderId: "693175881662",
        appId: "1:693175881662:web:9167a14e652f16fabf73ef",
        measurementId: "G-Y0G5JGVV44"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const db = getFirestore(app);

        // Add data to a collection
        const addData = async (user,message) => {
        try {
            await db.collection('messages').add({
            field1: user,
            field2: message,
            // Add other fields as needed
            });
            console.log('Data added successfully!');
        } catch (error) {
            console.error('Error adding data: ', error);
        }
        };
        return (
            "task complete"
        )
}
