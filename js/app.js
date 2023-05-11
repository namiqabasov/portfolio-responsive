const manOFcommats1 = document.querySelector(".manOFcommats1");
const manOFcommats2 = document.querySelector(".manOFcommats2");
const manOFcommats3 = document.querySelector(".manOFcommats3");
const manOFcommats4 = document.querySelector(".manOFcommats4");

manOFcommats1.addEventListener("click", function () {
  if (manOFcommats1.style.height == "400px") {
    manOFcommats1.style.cssText = `
    height:336px;
    background: none;
    `;
    manOFcommats4.style.cssText = `
    margin-top:0px;
    `;
  } else {
    manOFcommats1.style.cssText = `
    height:400px;
    background-color: white;
    `;
    manOFcommats4.style.cssText = `
    margin-top:-64px
    `;
    
    manOFcommats2.style.cssText = `
    margin-top:0px;
    `;
    manOFcommats3.style.cssText = `
    margin-top:0px;
    `;
  }
});
manOFcommats2.addEventListener("click", function () {
  if (manOFcommats2.style.height == "400px") {
    manOFcommats2.style.cssText = `
    height:336px;
    background: none;
    `;
    manOFcommats3.style.cssText = `
    margin-top:0px;
    `;
  } else {
    manOFcommats2.style.cssText = `
    height:400px;
    background-color: white;
    `;
    manOFcommats3.style.cssText = `
    margin-top:-64px
    `;
    manOFcommats4.style.cssText = `
    margin-top:0px;
    `;
    
    manOFcommats1.style.cssText = `
    margin-top:0px;
    `;
  }
});
manOFcommats3.addEventListener("click", function () {
  if (manOFcommats3.style.height == "400px") {
    manOFcommats3.style.cssText = `
    height:336px;
    background: none;
    `;
  } else {
    manOFcommats3.style.cssText = `
    height:400px;
    background-color: white;
    `;
    manOFcommats4.style.cssText = `
    margin-top:0px;
    `;
    manOFcommats2.style.cssText = `
    margin-top:0px;
    `;
    manOFcommats1.style.cssText = `
    margin-top:0px;
    `;
  }
});
manOFcommats4.addEventListener("click", function () {
  if (manOFcommats4.style.height == "400px") {
    manOFcommats4.style.cssText = `
    height:336px;
    background: none;
    `;
  } else {
    manOFcommats4.style.cssText = `
    height:400px;
    background-color: white;
    `;
    manOFcommats3.style.cssText = `
    margin-top:0px;
    `;
    manOFcommats2.style.cssText = `
    margin-top:0px;
    `;
    manOFcommats1.style.cssText = `
    margin-top:0px;
    `;
  }
});
