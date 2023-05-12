const rating = document.querySelector(".rating-component");
const thankyou = document.querySelector(".thankyou-component");

const submit = document.querySelector(".btn-submit");
const btn_group = document.querySelectorAll(".btn");
const rate_number = document.querySelector(".rate_number");

submit.addEventListener("click", () => {
    rating.classList.add("hidden");
    thankyou.classList.remove("hidden");
});

btn_group.forEach((button) =>
    button.addEventListener("click", () => {
        rate_number.innerHTML = button.innerHTML;
    })
);
