
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

console.log(window);

/*
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}*/

let captcha="";
function generate() {
    const captchaElement = document.getElementById("image");
    let uniquechar = "";

    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }

    // Store generated input
    captcha= uniquechar;
    captchaElement.innerHTML = captcha;

}
function printmsg() {
    const usr_input = document.getElementById("captchaInput").value;

    const captchaElement = document.getElementById("image");

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captchaElement.innerHTML) {
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



fetch('http://localhost:9090/user/getusers');




function foo() {
    alert("Successfully Login");
    return true;
 }
 
  //async function login(form){
   /*
   const response = await fetch('http://localhost:9090/user/getusers');
   const users=await response.json();
   console.log(users);


    if((form.email.value === "test@gmail.com") && (form.password.value === "test")){
       
        self.location.href = "User_dashboard.html";
      }
     else{
        alert(" OOPs !! Incorrect email id and password");
        return false;
      }
    }*/
    
async function login(form)
{
    const response = await fetch('http://localhost:9090/user/getusers');
   const users=await response.json();
   console.log(users);
    let email=form.email.value;
    let password=form.password.value;

    let flag = false;
    for (let u of users) {
        if (u.email === email.toLowerCase() && u.password === password) {
            flag = true;
            console.log("User found:", u);
            break;
        }
    }
    if(flag==true)
    {
        console.log("found");
        self.location.href = "User_dashboard.html";
    }
    else
    alert("username or password not same");
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
