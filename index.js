const navBar = document.querySelector('.slider');

navBar.addEventListener('click', function navHide (){
    const list = document.querySelector('.lis');
    list.classList.toggle('show');

});

/* toggling login and signup form*/

const signUpbtn = document.getElementById('signup');

signUpbtn.addEventListener('click', () => { 
    document.querySelector('.loginform').style.display = 'none';

     document.querySelector('.signupform').classList.add('show');
    
});

/* sign up form */
const createBtn = document.getElementById('create');

 
createBtn.addEventListener('click', function createAccount (event){
   event.preventDefault();
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;
    let  pNum= document.getElementById('pnum').value;
    let dBirth = document.getElementById('bdat').value;
    let emaiL = document.getElementById('sign_email').value;
    let pasS = document.getElementById('sign_pass').value;
    
    let data ={
        name1: fName ,
        name2: lName,
        number: pNum,
        date: dBirth,
        email: emaiL,
        password: pasS,
    };

    if(fName && lName && pNum && dBirth && emaiL && pasS) { localStorage.setItem('data',JSON.stringify(data));
        
        document.querySelector('.thank').innerText = `Thank you for creating account with us..`;
    
        setTimeout(function goBack (){
            document.querySelector('.signupform').style.display = 'none';
            document.querySelector('.loginform').style.display = 'flex';
        }, 5000);
}
    else{
      
        document.querySelector('.dialo').innerText = `Fill all the form!`;
    } 
    
});


/* login */
const logIn = document.getElementById('logbtn');

logIn.addEventListener('click', (event) => {
    event.preventDefault();

    const emailChe = document.getElementById('email').value;
    const passChe = document.getElementById('password').value;
    const successPass = JSON.parse(localStorage.getItem('data'));

    if(emailChe === successPass.email  && passChe === successPass.password){
        window.location.href = "https://www.facebook.com/bishal.pandey.771/?locale=en_GB";
    } else{
        document.querySelector('.errorlogin').innerText
= `Invalid Email or Password!`;}
});

const profileLog = document.querySelector('.profile');

 profileLog.addEventListener('click', () => {
const loginForm = document.querySelector('.loginform');
if (loginForm.style.display === 'none'){
    loginForm.style.display = 'flex';
} else{
    loginForm.style.display = 'none';
}});


function getLocation (){
    const mapId = document.getElementById('map');
    const showAdd = document.getElementById('showadd');
    

    mapId.href = '';
    mapId.textContent = '';

    function success(position){
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        showAdd.textContent = '';
        mapId.href = `https://www.google.com/maps/@${latitude},${longitude},15z`;

        mapId.textContent = `latitude: ${latitude}, longitude: ${longitude}`;

    }

    function error(){
        showAdd.textContent = "Unable to locate you";
    };

    if(!navigator.geolocation){
        showAdd.textContent = "Geolocation is not supported in your device";
    } else {
        showAdd.textContent = "Locating....";
        navigator.geolocation.getCurrentPosition(success, error);
    }
 
}
document.getElementById('getadd').addEventListener('click', getLocation);
    

