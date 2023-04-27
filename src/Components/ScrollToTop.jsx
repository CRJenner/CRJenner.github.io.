import { ArrowUp } from "react-bootstrap-icons";
function ScrollToTop() {
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0; 
    }
return(        
<button 
className="btn btn-dark"
onClick={topFunction} 
id="myBtn" 
title="Go to top"><ArrowUp /></button>

)

}

export default ScrollToTop