document.querySelector("form").addEventListener("submit",myfunc);
var array=JSON.parse(localStorage.getItem("signup"))||{};
function myfunc(){
    event.preventDefault();
    var objone={
        name:form1.form2.value,
        number:form1.form3.value,
        email:form1.form4.value,
        password:form1.form5.value,
    }
    localStorage.setItem("signup",JSON.stringify(objone));
    window.location.href="login.html";
}