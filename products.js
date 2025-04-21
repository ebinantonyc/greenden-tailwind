// Selecting Side Navbar, MenuIcon

var sideNav = document.getElementById("sideNav")
var menuIcon = document.getElementById("menuIcon")
var closenav = document.getElementById("close-nav")

menuIcon.addEventListener("click", function () {
    sideNav.style.right = 0
})

closenav.addEventListener("click", function () {
    sideNav.style.right = "-50%"
})


// Products Search Functionality
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count = count + 1) 
        {
        var productname = productList[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none"
        }
        else {
            productList[count].style.display = "block"
        }
    }
})