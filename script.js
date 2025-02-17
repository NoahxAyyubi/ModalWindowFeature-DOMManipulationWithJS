"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
console.log(`hi`,btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, function () {
      console.log(`button clicked`);
      modal.classList.remove(`hidden`);
      overlay.classList.remove(`hidden`);
  });
}


const closeModal = function () { 
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}
 btnCloseModal.addEventListener('click', function () {
    closeModal();
    console.log(btnCloseModal.classList);
});
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) { 
    console.log(e);
    console.log(e.key);
    if (e.key === `Escape`) { 
        closeModal()
    }
})