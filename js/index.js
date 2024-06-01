
// onScroll header sticks on top
let lastScrollTop = 0;
            navbar = document.getElementById("header");
        window.addEventListener("scroll", function(){
            var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop){
                header.style.top = "0";
            } else{
                header.style.top = "0";
            }
            lastScrollTop = scrollTop
        }) 
 
 // open and close side menu bar
 function opensidemenu()
 {
     document.getElementById('sidebarleftmenu').style.height="100%";
     document.getElementById('mainpage').style.marginLeft="0px";	
 }

 function closesidemenu()
 {
     document.getElementById('sidebarleftmenu').style.height="0";
     document.getElementById('mainpage').style.marginLeft="0px";	
 }


