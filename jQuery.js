/* Show login form on button click */
 
$('.loginBtn').click(function(){
    $('.login').show();
    $('.signUp').hide();
    /* border bottom on button click */
    $('.loginBtn').css({'border-bottom' : '2px solid rgb(91, 243, 131)'});
    /* remove border after click */
    $('.signUpBtn').css({'border-style' : 'none'});
  });
   
   
  /* Show sign Up form on button click */
   
  $('.signUpBtn').click(function(){
    $('.login').hide();
    $('.signUp').show();
    /* border bottom on button click */
    $('.signUpBtn').css({'border-bottom' : '2px solid rgb(91, 243, 131)'});
     /* remove border after click */
     $('.loginBtn').css({'border-style' : 'none'});
  });
  var util = {
    mobileMenu() {
      $("#nav").toggleClass("nav-visible");
    },
    windowResize() {
      if ($(window).width() > 800) {
        $("#nav").removeClass("nav-visible");
      }
    },
    scrollEvent() {
      var scrollPosition = $(document).scrollTop();
      
      $.each(util.scrollMenuIds, function(i) {
        var link = util.scrollMenuIds[i],
            container = $(link).attr("href"),
            containerOffset = $(container).offset().top,
            containerHeight = $(container).outerHeight(),
            containerBottom = containerOffset + containerHeight;
  
        if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
          $(link).addClass("active");
        } else {
          $(link).removeClass("active");
        }
      });
    }
  };
  
  $(document).ready(function() {
    
    util.scrollMenuIds = $("a.nav-link[href]");
    $("#menu").click(util.mobileMenu);
    $(window).resize(util.windowResize);
    $(document).scroll(util.scrollEvent);
    
  });
  function validate() {
      if( document.signUpForm.Name.value == "" ) {
        alert( "Please provide your name!" );
        document.signUpForm.Name.focus() ;
        return false;
    }
    if( document.signUpForm.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.signUpForm.email.focus();
        if (document.signUpForm.email.value!=="null"){
          function validateEmail() {
            var emailID = document.signUpForm.email.value;
            atpos = emailID.indexOf("@");
            dotpos = emailID.lastIndexOf(".");
            
            if (atpos < 1 || ( dotpos - atpos < 2 )) {
               alert("Please enter correct email ID")
               document.signUpForm.email.focus() ;
               return false;
            }
            return( true );
         }
        }
        
        return false;
    }
    if( document.signUpForm.mobile.value == "" || isNaN( document.signUpForm.mobile.value ) ||
        document.signUpForm.mobile.value.length != 10 ) {
        
        alert( "Please provide a 10 digit mobile number" );
        document.signUpForm.mobile.focus() ;
        return false;
    }
    if( document.signUpForm.password.value == "password" ) {
      function ValidateDOB() {
        var lblError = document.getElementById("password");
    
        //Get the date from the TextBox.
        var dateString = document.getElementById("password").value;
        var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    
        //Check whether valid dd/MM/yyyy Date Format.
        if (regex.test(dateString)) {
            var parts = dateString.split("/");
            var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
            var dtCurrent = new Date();
            lblError.innerHTML = "Eligibility 18 years ONLY."
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                return false;
            }
    
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
    
                //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
                if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                    return false;
                }
                if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                    //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                    if (dtCurrent.getDate() < dtDOB.getDate()) {
                        return false;
                    }
                }
            }
            lblError.innerHTML = "";
            return true;
        } 
        else {
            lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
            return false;
        //alert( "Please provide your DOB!" );
        //return false;
    }
  }
    return( true );
  }
}
function loginValidate() {
  if( document.loginForm.email.value == "" ) {
    alert( "Please provide your username/Email!" );
    document.signUpForm.Name.focus() ;
    return false;
  }
  if(document.loginForm.password.value==""){
    alert("Please enter your password!");
    document.loginForm.password.focus();
    return false;
  }
}
function authenticateValidate() {
  if(document.authentication.username.value==""){
    alert("Please enter your valid Aadhar Card/Voter ID!");
    document.authentication.username.focus();
    return false;
  }
  if(document.authentication.otp.value==""){
    alert("Please enter OTP, Sent to your email!");
    document.authentication.otp.focus();
    return false;
  }
}
