// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpicOnGM4wEwbjqQbnjvtsxu8VU3Be-ew",
    authDomain: "contactform-2bc5d.firebaseapp.com",
    databaseURL: "https://contactform-2bc5d-default-rtdb.firebaseio.com",
    projectId: "contactform-2bc5d",
    storageBucket: "contactform-2bc5d.appspot.com",
    messagingSenderId: "649574503138",
    appId: "1:649574503138:web:dc6b6f804a15268a2d84bb"
  };

//Initializing Firebase
const app = firebase.initializeApp(firebaseConfig);

//Database reference
const db = firebase.database().ref("contactForm");

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();

    var email  = document.getElementById("email").value;
    var phone = document.getElementById("phonenumber").value;
    var message = document.getElementById("textarea").value;

    //console.log("The email is" + email+ " "+phone+" "+message);
    saveMessage(email, phone,message);

   contactForm.reset();
}

const saveMessage = (email, phone,message) =>{
    var newMessageForm = db.push();

    newMessageForm.set({
        email:email,
        phone:phone,
        message:message,
    });
};