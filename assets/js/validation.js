// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzl15ze1-XaEBKt1MHNYZarPPr9RLnjqrtEm3PREPYplQlasXkEaCjDt7vivXCLFoldhA/exec'
    // 
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    var error = document.getElementById("dislplaySuccessMsg")
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            console.log("aa chailu")
            event.stopPropagation()
          }
          else{
            event.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
            error.classList.remove("d-none");
           
           setTimeout(function(){
            error.classList.add("d-none");
            }, 3000);
        
          }
          form.classList.add('was-validated')
        }, false)
      })

  })()
 /**
   * Learn More
   */

 var moreText = document.getElementById("more");
 moreText.style.display = "none";
 function learnMore() {
  var dots = document.getElementById("dots");
  var btnText = document.getElementById("learnMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}


//After click submit button text field should be empty 
// remove newsletter
