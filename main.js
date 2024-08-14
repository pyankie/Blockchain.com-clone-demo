const input = document.querySelector(".search-input-wrapper .input");
const inputWrapper = document.querySelector(".search-input-wrapper");

// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );

const searchBlock = document.querySelector(".search-block");

input.addEventListener("click", () => {
  searchBlock.classList.toggle("collapsible--expanded");
  inputWrapper.classList.toggle("outline");
});
