//Kod koji je potreban za povezivanje na firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBEKJromYtiXkwPvqyXVaTNzc9KYU3WSAA",
    authDomain: "tutorial-500d6.firebaseapp.com",
    databaseURL: "https://tutorial-500d6.firebaseio.com",
    projectId: "tutorial-500d6",
    storageBucket: "tutorial-500d6.appspot.com",
    messagingSenderId: "1051095848626",
    appId: "1:1051095848626:web:b6262b4bfe6ff211eb1bab",
    measurementId: "G-G5DSDYJVWE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//Referenca na poruke
let messagesRef = firebase.database().ref('messeges');

//Klikom kornika na submit pozove funckiju
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(event){
    event.preventDefault();

    //Dobavaljanje vrijednosti
    let name = getInputVal('name');
    let phone = getInputVal('phone');
    let email = getInputVal('email');
    let message = getInputVal('message');

    // Funkcija za spremanje poruke
    saveMessage(name, phone, email, message);

    //Pokazi alert prozor
    document.querySelector('.alert').style.display = 'block';

    // Skrivanje alert prozora nakon 3s 
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },5000);

    document.getElementById('contactForm').reset();//Nakon sto je uspjesno poslana poruka sve se resetira da kornik moze ponovno poslat poruku
}

//Funckija koja vraca vrijednosti koju je korinik upisao
function getInputVal(id){
    return document.getElementById(id).value;//Dobavljanje vrijednosti preko id
}

// Spremanje poruke koju korisnik upisuje unutar baze podataka

function saveMessage(name, phone, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        phone: phone,
        email: email,
        message: message
    });
}
