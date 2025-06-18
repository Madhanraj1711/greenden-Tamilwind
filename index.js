//side nav bar 
var menuicon=document.querySelector("#menuicon")
var sidenav=document.querySelector("#sidenav")
var closer_nav=document.querySelector("#closer_nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closer_nav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


