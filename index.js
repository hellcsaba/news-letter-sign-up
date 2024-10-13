const subscribeForm = document.querySelector(".subscribe__form");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const subscribeImageContainer = document.querySelector(
    ".subscribe__image-container"
  );
  const subscribeFormContainer = document.querySelector(
    ".subscribe__form-container"
  );

  subscribeFormContainer.style.display = "none";
  subscribeImageContainer.style.display = "none";

  const subscribeSuccess = document.querySelector(".subscribe__success");

  subscribeSuccess.classList.remove("subscribe__success--hidden");
});
