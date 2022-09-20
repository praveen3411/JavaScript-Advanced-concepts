let array=JSON.parse(localStorage.getItem("signup"))||{};
let array1=JSON.parse(localStorage.getItem("login"))||{};
document.querySelector("form").addEventListener("submit",helloone);

function helloone(){
    event.preventDefault();
    let login={
        lemail:form1.form2.value,
        lpassword:form1.form3.value,
    }
    if(array1==null){
        alert("Create-Account");
    }
    if(array.email==login.lemail && array.password==login.lpassword){
        alert("Login-successful");
        localStorage.setItem("login",JSON.stringify(login));
        window.location.href="index.html"; 
    }
    else{
        alert("invalid Credentials")
    }
    
}