// Sticky Navbar
// const body = document.querySelector("body");
// const navbar = document.querySelector(".navbar");
// const menuBtn = document.querySelector(".menu-btn");
// const cancelBtn = document.querySelector(".cancel-btn");
// menuBtn.onclick = () => {
//   navbar.classList.add("show");
//   menuBtn.classList.add("hide");
//   body.classList.add("disabled");
// };
// cancelBtn.onclick = () => {
//   body.classList.remove("disabled");
//   navbar.classList.remove("show");
//   menuBtn.classList.remove("hide");
// };
// window.onscroll = () => {
//   this.scrollY > 20
//     ? navbar.classList.add("sticky")
//     : navbar.classList.remove("sticky");
// };
// new nav code
let flag = 1;
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  if(flag==1){
    document.getElementById("menu-items").classList.remove("hideTemp");
    flag=0;
  }
  else{
    document.getElementById("menu-items").classList.add("hideTemp");
    flag=1;
  }
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// mobile menu expand

expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});
// new nav code ends


gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

var countDownDate = new Date("July 25, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Sale Ended";
  }
}, 1000);
