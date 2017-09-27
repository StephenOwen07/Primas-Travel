function Validate() {

  
      // country autocomplete 
      var availableTags = [
        "China",
        "India",
        "United States",
        "Indonesia",
        "Brazil",
        "Japan",
        "Germany",
        "Russia",
        "United Kingdom",
        "France",
        "Mexico",
        "Italy",
        "South Korea",
        "Canada",
        "Spain",
        "Turkey",
        "Australia",
        "Iran",
        "Saudi Arabia",
        "Taiwan",
        "Poland",
        "Argentina",
        "Netherlands",
        "South Africa",
        "Thailand",
        "Singapore",
        "Pakistan",
        "Malaysia",
        "Hong Kong",
        "Vietnam",
        "Nigeria",
        "Colombia",
        "Portugal",
        "Cambodia"
      ];
      $("#tags").autocomplete({
        source: availableTags
      });

      // jquery validate

      $.validator.setDefaults({
        highlight: function (element) {
          $(element).closest('.required').addClass('has-error');
        },
        unhighlight: function (element) {
          $(element).closest('.required').removeClass('has-error').addClass('valid');
        },
      });

      $('#bookingForm').validate({
        rules: {
          firstname: "required",
          lastname: "required",
          country: "required",

          phone: {
            required: true,
            digits: true
          },
          email: {
            required: true,
            email: true
          },
          reEnterEmail: {
            required: true,
            email: true,
            equalTo: "#email"
          }
        },
        messages: {
          firstname: "Please enter your firstname",
          lastname: "Please enter your lastname",
          email: "Please enter a valid email",
          verifyEmail: "Please enter a matching email",
          phone: "Please enter your phone number",
          country: "Please enter your country"
        },
        submitHandler: function (form) {
          formModal.style.visibility = "visible";
          body.style.overflow = "hidden";

          var firstName = document.getElementById('firstName').value;
          var lastName = document.getElementById('lastName').value;
          var email = document.getElementById('email').value;
          var phone = document.getElementById('phone').value;
          var country = document.getElementById('tags').value;
          var checkIn = document.getElementById('check-in').value;
          var checkOut = document.getElementById('check-out').value;
          var guests = document.getElementById('guests').value;
          var rooms = document.getElementById('rooms').value;
          var extraNeeds = document.getElementById('extraNeeds').value;



          document.getElementById('formDisplay').innerHTML =
            "<strong>First name: </strong>" + firstName +
            "<br><strong>Last name: </strong>" + lastName +
            "<br><strong>Email: </strong>" + email +
            "<br><strong>Phone: </strong>" + phone +
            "<br><strong>Country: </strong>" + country +
            "<br><br><strong>Check-in date: </strong>" + checkIn +
            "<br><strong>Check-out date: </strong>" + checkOut +
            "<br><strong>Guests: </strong>" + guests +
            "<br><strong>Rooms: </strong>" + rooms +
            "<br><br><strong>Extra Needs: </strong>" + extraNeeds;

          return false;

        }
      });

      var formModal = document.getElementById('myModal');
      var modalContent = document.querySelector('.modal-content');
      var closeModalBtn = document.querySelector('span.close');
      var bookingSummary = document.getElementById('formDisplay');
      var body = window.document.body;
    
      closeModalBtn.addEventListener('click', function () {
        closeBookingModal();
      });
    
      formModal.addEventListener('click', function (e) {
        if (e.target !== modalContent && e.target !== bookingSummary) {
          closeBookingModal();
        }
      });
    
    
      body.addEventListener('keyup', function (e) {
        if (e.keyCode === 27) {
          closeBookingModal();
        }
      });
    
      function closeBookingModal() {
        formModal.style.visibility = "hidden";
        body.style.overflow = "initial";
        body.scrollTop = 0;
      }   
    
}

module.exports = Validate;
