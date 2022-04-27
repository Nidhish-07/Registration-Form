const form = document.querySelector("form");
const nextBtn = form.querySelector(".nextBtn");
const backBtn = form.querySelector(".backBtn");
const allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});
// nextBtn.onkeypress = function (e) {
//   var key = e.charCode || e.keyCode || 0;
//   if (key == 13) {
//     alert("No Enter!");
//     e.preventDefault();
//   }
// };
backBtn.addEventListener("click", () => form.classList.remove("secActive"));
