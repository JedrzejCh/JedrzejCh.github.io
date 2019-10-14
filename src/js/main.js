"use strict";

const titles = document.querySelectorAll(".project-card__h4");
const descriptions = document.querySelectorAll(".project-card__paragraph");
const demoLinks = document.querySelectorAll(".list-wrapper--demo");
const githubLinks = document.querySelectorAll(".list-wrapper--github");
const gridCards = document.querySelector(".projects__grid--js");
console.log(`Welcome to my site`);
console.log(
  "Hey 🙃 nice of you to come here. Now that you're here, let me introduce myself briefly. I am 23 years old and live in Wrocław. I'm nice and I don't have any problems with contact with people. I learn Frontend technology and new things as much as I can and I enjoy it a lot. I often lose track of my time at the same time 😅. Besides, I like to spend time actively. I like skiing very much, I like climbing, sailing and traveling."
);

fetch("https://api.github.com/users/JedrzejCh/repos")
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;

    for (const repo of repos) {
      const { description, html_url, name, has_pages } = repo;
      gridCards.innerHTML += `
<div class="project-card">
          <img src="../assets/img/github.svg" alt="Github logo" class="project-card__icon">
          <h4 class="project-card__h4">${name}</h4>
          <p class="project-card__paragraph">${description}</p>
          <div class="list-wrapper">
            <ul class="list-wrapper__ul">
          ${
        has_pages
          ? `<li class="list-wrapper__li"><a href="https://jedrzejch.github.io/${name}/" target="_blank" rel="nofollow noreferrer" class="list-wrapper__a list-wrapper__a--demo">Demo</a></li>`
          : ""
        }
              <li class="list-wrapper--li"><a href="${html_url}" target="_blank" rel="no follow no referrer" class="list-wrapper__a list-wrapper__a--github">Github</a></li>
            </ul>
          </div>
        </div>
`;
    }
  })
  .catch(err => {
    console.log(err);
  });

//FORM

// $(function () {
//   "use strict";

//   const formDataElements = {};

//   const inputs = document.querySelectorAll(".form-data");

//   inputs.forEach(el => {
//     formDataElements[el.getAttribute("name")] = el;
//   });

//   // const recaptcha = document.querySelector(".g-recaptcha");

//   const customErrors = {
//     tooShort: (fieldName, min) =>
//       "Field must contain at least " + min + " characters.",
//     tooLong: (fieldName, max) =>
//       "Field may contain at least " + max + " characters.",
//     empty: fieldName => "Field cannot be empty.",
//     type: fieldName => "Field " + fieldName + " is incorrect.",
//     errorsInForm: "",
//     recaptcha: "Confirm that you are not a robot."
//   };

//   const contactForm = $("#formularz-kontaktowy");
//   const formAlert = document.querySelector(".emailFormAlert");

//   function toggleContactForm(state) {
//     if (typeof state !== "boolean")
//       throw new TypeError("State must be a boolean");

//     if (state === true) {
//       contactForm.fadeIn();
//       contactForm.attr("aria-hidden", "false");
//       firstInput.focus();
//     } else {
//       contactForm.fadeOut();
//       contactForm.attr("aria-hidden", "true");

//       for (const input in formDataElements) {
//         formDataElements[input].value = "";
//       }

//       grecaptcha.reset();
//       openContactBtn.focus();
//     }
//   }

//   const closeContactBtn = $("#close-contact-btn");
//   const openContactBtn = $("#open-contact-btn");

//   openContactBtn.click(() => {
//     toggleContactForm(true);
//   });

//   closeContactBtn.click(() => {
//     toggleContactForm(false);
//   });

//   const firstInput = $(".form-data:first");

//   if (document.location.hash === "#formularz-kontaktowy") {
//     openContactBtn.focus();
//     openContactBtn.click();
//   }

//   closeContactBtn.on("keydown", e => {
//     if (e.which === 9 && !e.shiftKey) {
//       // tab
//       e.preventDefault();
//       firstInput.focus();
//     }
//   });

//   firstInput.on("keydown", e => {
//     if (e.which === 9 && e.shiftKey) {
//       // tab
//       e.preventDefault();
//       closeContactBtn.focus();
//     }
//   });

//   contactForm.on("keydown", e => {
//     if (e.which === 27) {
//       // esc
//       toggleContactForm(false);
//     }
//   });

//   $(".emailFormSubmit").click(event => {
//     formAlert.innerHTML = '<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>';
//     event.preventDefault();

//     const isValid = validateEmailForm();

//     if (isValid === true) {
//       const formData = {
//         "g-recaptcha-response": grecaptcha.getResponse()
//       };

//       grecaptcha.reset();

//       for (const el in formDataElements) {
//         formData[el] = formDataElements[el].value;
//       }

//       const sendEmail = $.ajax({
//         type: "POST",
//         url: document.querySelector(".emailForm").getAttribute("action"),
//         dataType: "json",
//         data: formData
//       });

//       sendEmail.fail(error => {
//         console.log(error);
//         formAlert.innerHTML = customErrors.errorsInForm;
//       });

//       sendEmail.done(response => {
//         console.log(response);
//         formAlert.innerHTML = "Thanks for your message";
//       });
//     } else {
//       formAlert.innerHTML = customErrors.errorsInForm;
//     }
//   });

//   function validateEmailForm() {
//     let valid = true;
//     for (const el in formDataElements) {
//       const fieldName = formDataElements[el].parentElement.innerText;

//       if (formDataElements[el].validity.valueMissing === true) {
//         markWrongInput(
//           formDataElements[el],
//           customErrors.empty(fieldName.toLowerCase())
//         );
//       } else if (formDataElements[el].validity.tooShort === true) {
//         const min = formDataElements[el].getAttribute("minlength");
//         markWrongInput(
//           formDataElements[el],
//           customErrors.tooShort(fieldName.toLowerCase(), min)
//         );
//       } else if (formDataElements[el].validity.tooLong === true) {
//         const max = formDataElements[el].getAttribute("maxlength");
//         markWrongInput(
//           formDataElements[el],
//           customErrors.tooLong(fieldName.toLowerCase(), max)
//         );
//       } else if (formDataElements[el].validity.typeMismatch === true) {
//         markWrongInput(
//           formDataElements[el],
//           customErrors.type(fieldName.toLowerCase())
//         );
//       }
//       if (formDataElements[el].validity.valid === false) {
//         valid = false;
//       }
//     }
//     if (grecaptcha.getResponse().length === 0) {
//       markWrongInput(recaptcha, customErrors.recaptcha);
//       valid = false;
//     }
//     return valid;
//   }

//   function markWrongInput(wrongElement, alert) {
//     if (wrongElement.classList.contains("wrongInput")) {
//       return;
//     }

//     const errorMessageEl = document.createElement("p");
//     errorMessageEl.classList.add("error");
//     errorMessageEl.classList.add("wrongInput");
//     errorMessageEl.textContent = alert;

//     wrongElement.parentElement.append(errorMessageEl);
//     wrongElement.classList.add("wrongInput");
//     wrongElement.addEventListener("focus", clearErrors);
//   }

//   function clearErrors() {
//     this.classList.remove("wrongInput");
//     this.parentElement.removeChild(this.parentElement.getElementsByClassName("error")[0]);
//     formAlert.innerHTML = "";
//   }

//   window.recaptchaClearErr = () => {
//     document.querySelector(".g-recaptcha").focus();
//   };
// });

// function RecaptchaClearMsg() {
//   document.querySelector(".g-recaptcha").focus();
// }

const contactBtn = document.querySelector(".main-btn")
const contactSection = document.querySelector(".contact")
const closeBtn = document.querySelector(".close-btn")
contactBtn.addEventListener("click", () => {
  contactSection.style.display = "block"
  closeBtn.addEventListener("click", () => {
    contactSection.style.display = "none"
  })
})