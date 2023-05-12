const myCarts = document.querySelector(".myCarts");

async function Myfetch() {
  const response = await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => {
        console.log(element);
      });
    });
}

Myfetch();

function createCartelement(data) {
  const myDiv = document.createElement("div");
  const myPtag1 = document.createElement("p");
  const myPtag2 = document.createElement("p");

}
