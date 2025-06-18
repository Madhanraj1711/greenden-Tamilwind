//side nav bar 
var menuicon = document.querySelector("#menuicon")
var sidenav = document.querySelector("#sidenav")
var closer_nav = document.querySelector("#closer_nav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closer_nav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})
//product search 
var productcontainer = document.querySelector("#productcontainer")
var input = document.querySelector("#input")
var h1list = productcontainer.querySelectorAll("div")
console.log(h1list)

input.addEventListener("keyup", function () {
    var values = event.target.value.toUpperCase()

    for (count = 0; count < h1list.length; count++) {
        var productname = h1list[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(values) < 0) {
            h1list[count].style.display = "none"
        }
        else{
             h1list[count].style.display = "block"   
        }
    }
})
