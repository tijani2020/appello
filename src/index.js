import "./style.scss";


/* ====== sticky navbar on scroll start ======== */

const navigation = document.getElementById('navbar')
const siteName = document.getElementById('site-name')
const linksParent = document.getElementById('white-links')


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)  {
      
      siteName.style.color = "#5f4dee";
      navigation.style.backgroundColor = "#fff";
      navigation.style.boxShadow = "0 2px 2px -2px rgba(0,0,0,.2)";
      navigation.style.height = "60px";
      linksParent.id = 'nowhite-links';
      navicone.style.display = "none"

    }

    else  {    
      siteName.style.color = "white";
        navigation.style.height = "100px";
        navigation.style.backgroundColor = "transparent";
        navigation.style.boxShadow = "none";
        linksParent.id = 'white-links';
        navicone.style.display = "block"

    }
}

