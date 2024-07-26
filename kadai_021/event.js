const text = document.getElementById("text");
const btn = document.getElementById("btn");

const textChange = function () {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      text.textContent = "ボタンをクリックしました";
    }, 2000);
  });
};

textChange();