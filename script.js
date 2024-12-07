
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

/*
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}*/

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let captcha="";
function generate() {

    // Clear old input
    

    // Access the element to store
    // the generated captcha
    const captchaElement = document.getElementById("image");
    let uniquechar = "";

    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }

    // Store generated input
    captcha= uniquechar;
    captchaElement.innerHTML = captcha;

}
function printmsg() {
    const usr_input = document
        .getElementById("captchaInput").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        let s = document.getElementById("key")
            .innerHTML = "Matched";
        generate();
    }
    else {
        let s = document.getElementById("key")
            .innerHTML = "not Matched";
        generate();
    }
}
window.onload = function() {
    generate();
}


function foo() {
    alert("Successfully Login");
    return true;
 }
 
  /*function login(form){
    fetch('http://localhost:9090/user/getusers').then(response=>response.json()
    .then(obj=>response.contains(form.email.value).then(res=>console.log(res))));
    let flag=false;
    for(let i = 0; i < this.response.length; i++){
        if((this.response[i][0] === form.username.value )&& (this.response[i][1]=== form.password.value)){
            flag=true;
          console.log(this.response);
        }
    }
    if(flag===true)
    {
        console.log(response);
        self.location.href="User_dashboard.html";
    }
    /*
    let response=fetch('http://localhost:9090/user/getusers');

    if((form.email.value === "test@gmail.com") && (form.password.value === "test")){
       
        console.log(response);
      self.location.href = "User_dashboard.html";
      }
     else{
        alert(" OOPs !! Incorrect email id and password");
        return false;
      }
  }*/
      async function login(form) {
        try {
            // Fetch data from the server
            //const response = await fetch('http://localhost:9090/user/getusers');
            const response = await fetch('http://localhost:9090/user/getusers');

            const users = await response.json(); // Parse JSON response
            
            // Check if user exists
            let flag = false;
            /*for (let user of users) { // Adjust this loop based on the structure of 'users'
                if (user.email === form.email.value && user.password === form.password.value) {
                    flag = true;
                    console.log("User found:", user);
                    break;
                }
            }*/
    
            // Redirect or show error
            if (flag) {
                console.log("Login successful!");
                foo();
                self.location.href = "User_dashboard.html";
            } else {
                alert("Oops! Incorrect email id or password.");
                return false;
            }
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            alert("Something went wrong. Please try again later.");
            return false;
        }
    }
    
  function admin_login(form){
    if((form.email.value == "admin@gmail.com") && (form.password.value == "admin")){
      self.location.href = "Admin_dashboard.html";
      }
      else{
        alert(" OOPs !! Incorrect email id and password");
        return false;
      }
  }
  const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', ()=> {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
/*
const userdetail=async()=>{
    let response=await fetch('http://localhost:9090/user/getusers');
    console.log(response);
}
    
lead.addEventListener('click',userdetail);

window.addEventListener("DOMContentLoaded", (event) => {
    const user = document.getElementById('#submit');
    if (user) {
      user.addEventListener('click', userdetail, false);
    }
});*/

