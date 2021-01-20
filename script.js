
var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");

 function clicked() {
    if (sidenav.style.visibility == "hidden") {
        sidenav.style.visibility = "visible";
        menubtn.style.backgroundColor = "white";
    } else {
        sidenav.style.visibility = "hidden";
        menubtn.style.backgroundColor = "transparent";
    }
}

    var project = document.getElementsByClassName('project');
    var text = document.getElementsByClassName('project-text');
    

    text[2].onmouseenter=function(){text[2].style.visibility='visible';project[2].style.opacity='0.4';}
    text[2].onmouseout=function(){text[2].style.visibility='visible';project[2].style.opacity='0.4';}
    project[2].onmouseenter=function(){text[2].style.visibility='visible';project[2].style.opacity='0.4';}
    project[2].onmouseout=function(){text[2].style.visibility='hidden';project[2].style.opacity='1';}


    text[1].onmouseenter=function(){text[1].style.visibility='visible';project[1].style.opacity='0.4';}
    text[1].onmouseout=function(){text[1].style.visibility='visible';project[1].style.opacity='0.4';}
    project[1].onmouseenter=function(){text[1].style.visibility='visible';project[1].style.opacity='0.4';}
    project[1].onmouseout=function(){text[1].style.visibility='hidden';project[1].style.opacity='1';}


    text[0].onmouseenter=function(){text[0].style.visibility='visible';project[0].style.opacity='0.4';}
    text[0].onmouseout=function(){text[0].style.visibility='visible';project[0].style.opacity='0.4';}
    project[0].onmouseenter=function(){text[0].style.visibility='visible';project[0].style.opacity='0.4';}
    project[0].onmouseout=function(){text[0].style.visibility='hidden';project[0].style.opacity='1';}
    
  
    function theme1() {
      document.getElementById('theme-style').href='';
      document.getElementById('my-pic').src='img/myPic1.png';
      }
    function theme2() {
      document.getElementById('theme-style').href='theme.css';
      document.getElementById('my-pic').src='img/myPic2.png';
      }
    