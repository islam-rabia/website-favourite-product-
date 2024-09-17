// function myFuncData() {
//   let card = document.querySelector(".card-list");
//   let btn = document.querySelector(".btn-card");

//   async function generateFunc() {
//     let result = await fetch("../json/data-1.json");
//     let myData = await result.json();

//     generateData(myData);
//   }

//   btn.addEventListener("click", function () {
//     async function generateFuncFile() {
//       let result = await fetch("../json/data-2.json");
//       let myData = await result.json();

//       generateData(myData);
//     }

//     btn.disabled = true;
//     setTimeout(function () {
//       btn.classList.add("active");
//       btn.innerHTML = "Not Found!";
//     }, 2000);

//     generateFuncFile();
//   });

//   function generateData(data) {
//     card.innerHTML += data
//       .map((item) => {
//         let { id, title, description, img } = item;
//         return `
//         <li id="card-${id}">
//           <img src="${img}" alt="image card" class="img-card${id}" />
//           <div class="card-title">
//             <h3>${title}</h3>
//             <p>${description}</p>
//           </div>
//         </li>
//       `;
//       })
//       .join("");
//   }

//   generateFunc();
// }

export { myFuncData };
