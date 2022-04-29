const startBTN = document.getElementById("start");
const number = Math.floor(Math.random() * 20) + 11;
const question = document.getElementById("question");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

// スタートボタンをクリックするとリロード
startBTN.addEventListener("click", () => {
  window.location.reload();
});
question.textContent = number;
// ここまで////////////////////////
let i = number;
num1.addEventListener("click", () => {
  if (i > 0) {
    while (i > 0) {
      i = i - 2;
      break;
    }
  }
  console.log(i);
  question.textContent = i;
  if (i === 0) {
    question.textContent = "成功";
  } else if (i < 0) {
    question.textContent = "失敗";
  }
});
num2.addEventListener("click", () => {
  if (i > 0) {
    while (i > 0) {
      i = i - 5;
      break;
    }
  }
  console.log(i);
  question.textContent = i;
  if (i === 0) {
    question.textContent = "成功";
  } else if (i < 0) {
    question.textContent = "失敗";
  }
});
num3.addEventListener("click", () => {
  if (i > 0) {
    while (i > 0) {
      i = i - 7;
      break;
    }
  }
  console.log(i);
  question.textContent = i;
  if (i === 0) {
    question.textContent = "成功";
  } else if (i < 0) {
    question.textContent = "失敗";
  }
});

// document.getElementById("num1").onclick = function () {
//   question.textContent = number - 1;
// };
// document.getElementById("num2").onclick = function () {
//   question.textContent = number - 2;
// };
