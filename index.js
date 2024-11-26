// 11-misol
// const cityInput = document.getElementById("cityInput");
// const cityList = document.getElementById("cityList").children;

// cityInput.addEventListener("input", () => {
//      const inputVal = cityInput.value.toLowerCase();
//      Array.from(cityList).forEach((li) => {
//           !li.textContent.toLowerCase().includes(inputVal) 
//           ? (li.style.display = "none") 
//           : (li.style.display = "block");
//      });
// });

// document.addEventListener("click", (e) => {
//      if (e.target.classList.contains("todo-item")) {
//           const buttonStyle = getComputedStyle(e.target).textDecoration;
//           buttonStyle.includes("line-through")
//           ? (e.target.style.textDecoration = "none")
//           : (e.target.style = `
//                text-decoration: line-through;
//           `);
//      }
// });

// console.log(getComputedStyle(document.body).backgroundImage);



// 12-misol
// const counter = document.querySelector("p");
// const backward = document.getElementById("backward");
// const forward = document.getElementById("forward");
// const image = document.querySelector("img");

// let currentImage = 1;
// counter.textContent = `Image - ${currentImage}/10`;

// backward.addEventListener("click", () => {
//      currentImage--;
//      counter.textContent = `Image - ${currentImage}/10`;
//      image.src = `https://picsum.photos/id/${currentImage}/1200`;

//      if(currentImage == 0) {
//           currentImage = 10;
//      }
// });


// forward.addEventListener("click", () => {
//      if(currentImage == 10) {
//           counter.textContent = `Image - ${currentImage}/10`;
//           currentImage = 0;
//      }else {
//           currentImage++;
//           counter.textContent = `Image - ${currentImage}/10`;
//           image.src = `https://picsum.photos/id/${currentImage}/1200`;
//      }
// });



// 13-misol
// const button = document.getElementById("boldButton");
// const paragraph = document.getElementById("paragraph");

// let text = paragraph.innerHTML;

// button.addEventListener("click", () => {
//      const selectedText = window.getSelection().toString();
//      text = text.replace(selectedText, `<b>${selectedText}</b>`);
//      paragraph.innerHTML = text;
// });


// 15-misol
// const showEvens = document.getElementById("showEvens");
// const numbersInput = document.getElementById("numbersInput");
// const evensOutput = document.getElementById("evensOutput");

// showEvens.addEventListener("click", () => {
//      if (numbersInput.value.trim() && numbersInput.value.trim().length > 4) {
//           const evens = numbersInput.value
//           .split(",")
//           .filter((num) => Number(num) % 2 == 0)
//           .join();
//      console.log(evens);
//      evensOutput.textContent = evens;
//      } else {
//           alert("3 tadan ko'p raqam kiriting");
//      }
// });



// 16-misol
// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const multiply = document.getElementById("multiply");
// const divide = document.getElementById("divide");
// const resultEl = document.getElementById("result");

// const calculate = (type) => {
//     const num1Value = Number(num1.value);
//     const num2Value = Number(num2.value);

//     let result;
//     switch (type) {
//         case "add":
//             result = num1Value + num2Value;
//             break;
//         case "subtract":
//             result = num1Value - num2Value;
//             break;
//         case "multiply":
//             result = num1Value * num2Value;
//             break;
//         case "divide":
//             result = num1Value / num2Value;
//             break;
//         default:
//             alert("Bunday imkoniyat yo'q :(");
//             return;
//     }

//     resultEl.textContent = `Natija: ${result}`;
// };

// add.addEventListener("click", () => {
//     calculate("add");
// });

// subtract.addEventListener("click", () => {
//     calculate("subtract");
// });

// multiply.addEventListener("click", () => {
//     calculate("multiply");
// });

// divide.addEventListener("click", () => {
//     calculate("divide");
// });



// 17-misol
// const fontSizeSlider = document.getElementById("fontSizeSlider");
// const resizableText = document.getElementById("resizableText");

// fontSizeSlider.addEventListener("input", () => {
//     const fontSize = fontSizeSlider.value;
//     resizableText.style.fontSize = `${fontSize}px`;
// });

// window.addEventListener("load", () => {
//     fontSizeSlider.value = 16; 
//     resizableText.style.fontSize = `${fontSizeSlider.value}px`;
// });


// 18-misol
// const toggleInstructions = document.getElementById("toggleInstructions");
// const instructions = document.getElementById("instructions");

// toggleInstructions.addEventListener("click", () => {
//     instructions.style.display = getComputedStyle(instructions).display == "none" ? "block" : "none";
// });


// 19-misol
// const tabButtons = document.querySelectorAll(".tabButton");
// const tabContents = document.querySelectorAll(".tabContent");

// tabButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const targetId = button.getAttribute("data-target");

//         tabContents.forEach(content => {
//           content.style.display = "none";
//         });

//         document.getElementById(targetId).style.display = "block";
        
//         tabButtons.forEach(btn => btn.classList.remove("active"));
//         button.classList.add("active");
//     });
// });



// 20-misol
// const coloredText = document.getElementById("coloredText");
// const changeTextColor = document.getElementById("changeTextColor");
// const changeBgColor = document.getElementById("changeBgColor");

// const textColors = ["red", "yellow", "lightblue", "purple", "orange"];
// const bgColors = ["green", "pink", "blue", "lightgreen", "black"];

// changeTextColor.addEventListener("click", () => {
//      const randomIndex = Math.floor(Math.random() * textColors.length);
//      coloredText.style.color = textColors[randomIndex];
// });

// changeBgColor.addEventListener("click", () => {
//      const randomIndex = Math.floor(Math.random() * bgColors.length);
//      coloredText.style.backgroundColor = bgColors[randomIndex];
// });


// 21-misol
const numberInput = document.getElementById("numberInput");
const checkNumber = document.getElementById("checkNumber");
const numberOutput = document.getElementById("numberOutput");

checkNumber.addEventListener("click", () => {
     const value = numberInput.value.trim();
    
     if (value === "") {
          numberOutput.textContent = "Iltimos, raqam kiriting.";
     } else {
          const num = +value;
          if (num > 0) {
               numberOutput.textContent = "Musbat raqam";
          } else if (num < 0) {
               numberOutput.textContent = "Manfiy raqam";
          } else {
               numberOutput.textContent = "Nol";
          }
     }
});
