let selectField = document.getElementById("selectField");

let selectText = document.getElementById("selectText");

let list = document.getElementById("list");

let arrowIcon = document.getElementById("arrowIcon");

let options = document.getElementsByClassName("options");

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
    arrowIcon.style.backgroundImage = option.img;
  };
}

// you want the image to appear use this

// let selectField = document.getElementById("selectField");
// let selectText = document.getElementById("selectText");
// let list = document.getElementById("list");
// let arrowIcon = document.getElementById("arrowIcon");
// let options = document.getElementsByClassName("options");

// selectField.addEventListener("click", () => {
//   list.classList.toggle("hide");
//   arrowIcon.classList.toggle("rotate");
// });

// for (let option of options) {
//   option.onclick = function () {
//     let imgSrc = this.querySelector("img").src;
//     let text = this.textContent.trim();

//     // Set selected text + image
//     selectText.innerHTML = `<img src="${imgSrc}" alt="" style="width:20px; vertical-align:middle;"> ${text}`;

//     list.classList.add("hide");
//     arrowIcon.classList.toggle("rotate");
//   };
// }
