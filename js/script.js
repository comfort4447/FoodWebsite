var curr_tpage = window.location.href
/*Login form validation*/
/**if(curr_tpage == "http://127.0.0.1:5500/signin.html"){
    var username = document.form["form"]["username"];
    var password = document.form["form"]["password"];


    var error = document.getElementById("error")
    var error1 = document.getElementById("error1")

    function validated() {
        if (username.value.length < 9){
            username.style.border = "1px solid red"
            username.focus();
            return false;
        }
    }
}**/

if(curr_tpage == "http://127.0.0.1:5500/signin.html"){
    
    var username = document.getElementById("username")
    var password = document.getElementById("password")
    var form = document.getElementById("form")
    var errorElement = document.getElementById("error")
   
    form.addEventListener("submit", (e) =>{
        let messages = []
    
        if(username.value == "" || username.value ==null){
            messages.push("username field is empty")
        }
    
        if(password.value == "" || password.value ==null){
            messages.push("Password field is empty")
        }
    
        if (messages.length > 0){
            e.preventDefault()
            errorElement.innerText = messages.join(",");
            errorElement.style.display = "block";
            setTimeout(() => {
                errorElement.style.display ="none";
            }, 4*1000);
        }
    
    });

}



/*SignUp form validation*/
if(curr_tpage == "http://127.0.0.1:5500/signup.html"){

var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var email = document.getElementById("email")
var password = document.getElementById("password")
var form = document.getElementById("form")
var errorElement = document.getElementById("error")

form.addEventListener("submit", (e) =>{
    let messages = []

    if(fname.value == "" || fname.value ==null){
        messages.push("firstname field is empty")
    }

    if(lname.value == "" || lname.value ==null){
        messages.push("lastname field is empty")
    }

    if(email.value == "" || email.value ==null){
        messages.push("email field is empty")
    }

    if(password.value == "" || password.value ==null){
        messages.push("Password field is empty")
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(",");
        errorElement.style.display = "block";
        setTimeout(() => {
            errorElement.style.display ="none";
        }, 4*1000);
    }
})
}
   