const button = document.querySelector("button")
const password = document.getElementById("pass")
const confPass = document.getElementById("confPass")
button.addEventListener("click", e=>{
    if(password.value!=confPass.value){
        confPass.setCustomValidity("Invalid field.")
    }
    else{
        confPass.setCustomValidity("")
    }
})