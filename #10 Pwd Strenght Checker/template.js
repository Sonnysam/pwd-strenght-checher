var pwd = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

 pwd.addEventListener("input", () => {
    if(pwd.value.length > 0){
        msg.style.display ="block";
    }
    else{
        msg.style.display = "none";
    }
    if(pwd.value.length < 4){
        str.innerText = "weak";
        pwd.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(pwd.value.length >= 4 && pwd.value.length <=8){
        str.innerText="medium";
        pwd.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pwd.value.length > 8) {
        str.innerText = "strong";
        pwd.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }

    
 });