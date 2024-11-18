(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "kYwDQZUO_bTPMBz9U",
  });
})();

window.onload = function () {
  // Grab the form by ID
  const form = document.getElementById("contact-form");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Disable the submit button to prevent multiple submissions
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Send form data to EmailJS
    emailjs.sendForm("service_j951ege", "template_u80cpxi", form).then(
      function () {
        // Success - Notify the user
        alert("Your message has been sent successfully! We will get back to you soon.");
        form.reset(); // Clear the form

        // Re-enable the submit button
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      },
      function (error) {
        // Failure - Notify the user
        alert("Oops! Something went wrong. Please try again later.");

        // Re-enable the submit button
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      }
    );
  });
};
