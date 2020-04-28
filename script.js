const thumbails = document.querySelectorAll(".thumb");
const jumbo = document.querySelector(".jumbo");
const container = document.querySelector(".container");
// cara satu

// thumbails.forEach(function (thumbail) {
//   thumbail.addEventListener("click", function () {
//     jumbo.setAttribute("src", thumbail.src);
//   });
// });

// cara kedua
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    thumbails.forEach(function (thumbnail) {
      thumbnail.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
