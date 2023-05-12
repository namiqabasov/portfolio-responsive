const btnSelect = document.querySelectorAll(".btn-select");
const aDigital = document.querySelectorAll(".aDigital");
const canProvid = document.querySelectorAll(".canProvid");

console.log(canProvid);

btnSelect.forEach((element) => {
  element.addEventListener("click", function () {
    btnSelect.forEach((btn) => {
      console.log(btn.parentElement.nextElementSibling);
      btn.parentElement.nextElementSibling.style.display = "none";
    });

    element.parentElement.nextElementSibling.style.display = "block";
    element.parentElement.parentElement.style.cssText = `
    background-color: white;
    `;
    
  });
});
