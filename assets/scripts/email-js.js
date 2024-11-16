(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "kYwDQZUO_bTPMBz9U",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_j951ege", "template_u80cpxi", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};
