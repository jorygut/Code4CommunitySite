This website is composed of a text box for the user to input their message, a display of each message, and an additional text box for choosing a name to post under. The primary component is the home page which displays the messages and inputs.

States: The text state manmages the users message and updates as they type or delete from it. This state is updated by the handleText function to respond to user input and the handleSendClick function to clear the message once posted. The messages state is used to store and update past messages that have been posted by other users. Once a message is stored within the database, The sender state is used to store and update the user's chose alias or default to "Anonymous".

Database: The data including the message, date, and username are all stored in a Cloud Firestore. This is referenced using the firebaseConfig class and updated when the "post" button is clicked. This database is later read and displayed in the middle of the screen using the useEffect function.

Components: This website only contains 2 components, Home.js and App.js. Home.js stored the databse logic, user interaction logic, and display of each aspect of the site. App.js renders the Home component and leaves room for additional components to rendered as the product is developed. 

CSS: The App.css file contains the styling for each visual element of the site, displaying them in a simple, straigtforward, and intuitive manner. 
