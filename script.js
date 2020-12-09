// -----header-----

document.getElementById("nav-placeholder").innerHTML =
 `

 <nav class="navbar navbar-expand-sm bg-info navbar-dark">
     <a class="navbar-brand" href="#">Patnot</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="collapsibleNavbar">
       <ul class="navbar-nav ml-auto">
         <li class="nav-item">
           <a class="nav-link" href="https://patnot.com">Home</a>
         </li>
       <li class="nav-item dropdown">
       <div class="dropdown-link" data-dropdown="dropdownId">
               <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" >
                 Category
               </a>
               
               <ul id="dropdownId" class="dropdown-menu">
                 <a class="dropdown-item" href="#">IIT JAM</a>
                 <a class="dropdown-item" href="#">GATE</a>
                 <a class="dropdown-item" href="#">CSIR NET</a>
               </ul>
               </div>
           </li>

         <li class="nav-item">
           <a class="nav-link" href="about-us.html">About Us</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="contact-us.html">Contact Us</a>
         </li>    
         
       </ul> 
     </div>  
   </nav>`;


// -----footer----------

   document.getElementById("foot-placeholder").innerHTML =
 `
<footer class="page-footer font-small" style="background-color: black;">

    <div class="container-fluid">
  
      <div class="row text-center d-flex justify-content-center pt-5 mb-3">
  
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold text-white">
            <a href="about-us.html">About us</a>
          </h6>
        </div>
  
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="disclaimer.html">Disclaimer</a>
          </h6>
        </div>
  
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="privacy-policy.html">Privacy Policy</a>
          </h6>
        </div>
  
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="terms-and-conditions.html">Terms and Conditions</a>
          </h6>
        </div>
  
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="contact-us.html">Contact Us</a>
          </h6>
        </div>
  
      </div>
      <hr class="rgba-white-light" >
  
      <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
  
        <div class="text-white col-md-8 col-12 mt-5">
          <p style="line-height: 1.7rem">
            
            Practice makes us perfect.And we are here to provide you the best online environment so that you can practice 
            more and reach your goal.Wish you all the Best from our team.
            If you have any suggestion, feel free to contact us.
          </p>
        </div>
  
      </div>
      <hr class="clearfix d-md-none rgba-white-light" style="margin: 10% 15% 5%;">
  
  
    </div>
  
    <div class="text-primary footer-copyright text-center py-3">© 2020 Copyright:
      <a class="text-white" href="https://patnot.com/"> patnot.com</a>
    </div>
  </footer>`;





   document.addEventListener('DOMContentLoaded', function () {
    // -----Dropdown----------
    
    // Rule: link.dropdown-link data-dropdown='dropdownIdentifier' div#dropdownIdentifier
    let dropdowns = document.querySelectorAll('.dropdown-link');
    for (dropdown of dropdowns) {
        dropdown.onclick = function (e) {
            let dropdownDiv = document.getElementById(dropdown.getAttribute('data-dropdown'))
            if (dropdownDiv.style.display == "block") {
                dropdownDiv.style.display = "none";
            } else {
                dropdownDiv.style.display = "block";
            }
        }
    }
    });


    