// =========================
// TYPING EFFECT
// =========================
const supabaseUrl = "https://gzcuwqsvfjttaexyvghw.supabase.co";

const supabaseKey = "sb_publishable_QWuTleWG0uB5k8_-EG0STg_gW3Ncf9t";

const supabaseClient = window.supabase.createClient(supabaseUrl,supabaseKey);

const text = [

    "💻 Web Developer",

    "🛡️ Cybersecurity Enthusiast",

    "🤖 AI Explorer",

    "🚀 M.Tech Computer Science Student",

    "✨ Building Modern Digital Experiences"

];


let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (!typing) return;

    if (charIndex < text[textIndex].length) {

        typing.innerHTML += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 80);

    }

    else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (!typing) return;

    if (charIndex > 0) {

        typing.innerHTML = text[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 40);

    }

    else {

        textIndex++;

        if (textIndex >= text.length) {

            textIndex = 0;

        }

        setTimeout(type, 400);

    }

}

document.addEventListener("DOMContentLoaded", function () {

    if (typing) {

        type();

    }

});


// =========================
// THEME BUTTON
// =========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    else {

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});


// =========================
// HEADER EFFECT
// =========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {

        header.style.background = "rgba(15,23,42,.85)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }

    else {

        header.style.background = "rgba(255,255,255,.05)";

        header.style.boxShadow = "none";

    }

});


// =========================
// SCROLL PROGRESS BAR
// =========================

window.addEventListener("scroll", function(){

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});


// =========================
// BACK TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =========================
// SCROLL REVEAL
// =========================

function reveal(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(item){

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuToggle.innerHTML='<i class="fas fa-times"></i>';

    }else{

        menuToggle.innerHTML='<i class="fas fa-bars"></i>';

    }

});

document.querySelectorAll("#nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuToggle.innerHTML='<i class="fas fa-bars"></i>';

    });

});

const contactForm = document.getElementById("contact-form");

if(contactForm){

contactForm.addEventListener("submit", async function(e){

e.preventDefault();

const sendBtn = document.getElementById("sendBtn");

sendBtn.innerHTML="Sending...";
sendBtn.disabled=true;

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const subject=document.getElementById("subject").value;

const message=document.getElementById("message").value;

const {error}=await supabaseClient

.from("contact_messages")

.insert([

{

name:name,

email:email,

subject:subject,

message:message

}

]);

if(error){

alert("Message not sent");

console.log(error);

}
else{

alert("Message Sent Successfully");

contactForm.reset();

}

sendBtn.innerHTML="Send Message";

sendBtn.disabled=false;

});

}