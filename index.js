// Selecting Side Navbar, MenuIcon

var sideNav=document.getElementById("sideNav")
var menuIcon=document.getElementById("menuIcon")
var closenav=document.getElementById("close-nav")

menuIcon.addEventListener("click", function(){
    sideNav.style.right=0
})

closenav.addEventListener("click", function(){
    sideNav.style.right="-50%"
})
