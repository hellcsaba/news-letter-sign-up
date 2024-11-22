const subscribeForm = document.querySelector(".subscribe__form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".subscribe__form-error-message");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    emailInput.classList.add("subscribe__form-input--error");
    errorMessage.style.display = "block";
  } else {
    const subscribeSuccess = document.querySelector(".subscribe__success");
    const subscribeEmail = document.querySelector(".subscribe__success-email");
    subscribeEmail.textContent = emailValue;
    subscribeSuccess.classList.remove("subscribe__success--hidden");
    emailInput.classList.remove("subscribe__form-input--error");
    errorMessage.style.display = "none";

    const subscribeImageContainer = document.querySelector(".subscribe__image-container");
    const subscribeFormContainer = document.querySelector(".subscribe__form-container");
    subscribeFormContainer.style.display = "none";
    subscribeImageContainer.style.display = "none";
  }
});
