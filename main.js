const logInBtn = document.getElementById('logInBtn');
const logOutBtn = document.getElementById('logOutBtn');

const userInfo = {
    name: document.getElementById('nameInput')
}


// ----- LOCALSTORAGE -----
document.getElementById("loginBtnModal").addEventListener("click", logIn); // Hämtar knappen som loggar in

function logIn(e) {
    e.preventDefault();

    const user = document.getElementById('nameInput').value; // hämtar value av det som skrivs i input och döper den till user

    if (!userInfo.name.value) return alert("DU MÅSTE FYLLA I NAMN!!! 🥰");

    let myValue = localStorage.getItem(user);
    console.log(myValue, 'getItem');

    if (myValue !== null) {
        document.getElementById('welcomeMsg').innerHTML = "VÄLKOMMEN TILLBAKA! DU ÄR INLOGGAD SOM";
    } else {
        localStorage.setItem(user, user); // sparar ny användare/user 
        document.getElementById('welcomeMsg').innerHTML = "DU ÄR INLOGGAD SOM";
    }

    const userValue = document.getElementById('name').innerHTML = document.getElementById('nameInput').value


}

// Hämtar knappen som öppnar modalen
document.getElementById("logInBtn").addEventListener('click', myModal);
// /----- LOCALSTORAGE -----

// Hämtar modalen
const modal = document.getElementById("myModal");

// Hämtar <img> elementet som stänger modalen
const x = document.getElementsByClassName("close")[0];

function myModal() { // när knappen klickas öppnas modalen      

    modal.style.display = "block"; // när användare till på <img> x stängs modalen

    x.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) { // när användare klickar utanför modalen stängs den
        event.preventDefault();
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
// /---- MODAL ----


// ----- LOGIN -----
document.getElementById("loginBtnModal").addEventListener("click", LogIn);
// Hämtar knappen som loggar in

function LogIn(e) {
    e.preventDefault();
    modal.style.display = "none";
    logInBtn.style.display = "none";

    if (userInfo.name.value) return logOutBtn.style.display = "block";
    if (!userInfo.name.value) return logInBtn.style.display = "block";
    if (!userInfo.name.value) return logOutBtn.style.display = "none";
}
// /----- LOGIN -----


// ----- LOGOUT -----
function logOut() {
    document.getElementById('welcomeMsg').innerHTML = "";
    document.getElementById('name').innerHTML = "";
    logInBtn.style.display = "block";
    logOutBtn.style.display = "none";
}

document.getElementById("logOutBtn").addEventListener('click', logOut);
// /----- LOGOUT -----



