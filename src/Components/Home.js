import React, {useState} from "react";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

export default function Home(){
    const [text, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [sender, setSender] = useState('Anonymous');

    const firebaseConfig = {
        apiKey: "AIzaSyBHMIXa-yhUdgTKQGJCt1GUmVQSfQ7XoxY",
        authDomain: "c4c-site.firebaseapp.com",
        databaseURL: "https://c4c-site-default-rtdb.firebaseio.com",
        projectId: "c4c-site",
        storageBucket: "c4c-site.appspot.com",
        messagingSenderId: "693175881662",
        appId: "1:693175881662:web:9167a14e652f16fabf73ef",
        measurementId: "G-Y0G5JGVV44"
    }

    const handleText = (inp) => {
      setInputText(inp.target.value);
    };
    const handleSender = (inp) => {
      setSender(inp.target.value);
    }
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const analytics = getAnalytics(app);

      useEffect(() => {
        const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setMessages(data);
        };
        fetchData();
      }, []);
      
      const handleSendClick = async () => {
        if (text.trim() !== '') {
          const curDate = new Date();
          const formattedDate = curDate.toLocaleString();
          const newMessage = { sender, content: text,dateTime: formattedDate };
          try {
            const docRef = await addDoc(collection(db, "messages"), newMessage);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          setMessages([...messages, newMessage]);
          setInputText('');
        }
      };
    return(
        <div>
            <div>
              <input className="sender" value={sender} onChange={handleSender} placeholder={"Enter Name Here"}></input>
                {messages.slice().reverse().map((message,index) => (
                    <div key={index} className="message">
                        <strong>{message.sender}: </strong> 
                        <p1>
                            {message.content}
                        </p1>
                        <p2 className="date">{message.dateTime}</p2>
                    </div>
                ))}
            </div>
            <div>
                <input className="text" 
                    type="text"
                    id="textInput"
                    value={text}
                    onChange={handleText}
                    placeholder="Enter text here"
                />
                <button onClick={handleSendClick} className="post">Post</button>
            </div>
        </div>
    )
}