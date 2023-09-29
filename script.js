
/* GENERAL CODE */
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }

   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");

   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
   }

   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
   }

   /* REGISTRATION FORM */

   function registration() {
    let fname, lname, email, pass, cpass;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    cpass = document.getElementById("cpass").value;

    console.log(fname + " " + lname + " " + email + " " + pass + " " + cpass + " ");
    if (pass != cpass) {
        alert("Enter the same password");
    } else if (fname == "" || lname == "" || email == "" || pass == "" || cpass == "") {
        alert("Please enter all required information");
    } else {
        

    }
     
    
    let user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    if (user_records.some((v) => {
        return v.Email == email;
    })) {
        alert("This email is already registered");
    } else {
        alert("Successful Registration");
        user_records.push({
            "First Name": fname,
            "Last Name": lname,
            "Email": email,
            "Password": pass,
            "Confirm Password": cpass
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("email", email);
        localStorage.setItem("password", pass);
    }
}



function signin() {

   
    let email, pass;
    email = document.getElementById("email1").value;
    pass = document.getElementById("password").value;

    if(email==localStorage.getItem("email") && pass==localStorage.getItem("password")) {
        alert("Login Successful");
        window.location.href="profile.html";
       
    }

   
    else {
        alert("Login Failed");
    }   
   
  
}


    
    function Logout() {
        localStorage.removeItem("email");
        localStorage.removeItem("fname");
        localStorage.removeItem("lname");
        localStorage.removeItem("password");
        localStorage.removeItem("users");
        
        window.location.href = "index.html";
     
    }
    

