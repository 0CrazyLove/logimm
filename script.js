const inputPassword = document.getElementById("password");
const tocPassword= document.getElementById("tocarPassowrd");


tocPassword.addEventListener("click", function(){
    if(inputPassword.type === "password"){
        inputPassword.type="text";
        tocPassword.src="/login/img/vista.png";
       
    } else {
        inputPassword.type="password";
        tocPassword.src="/login/img/ojo.png";
    }


});