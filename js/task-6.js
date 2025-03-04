function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes")

const createBoxes = amount => {
  if (amount < 1 || amount > 100) return; // Перевірка на діапазон
  
  destroyBoxes(); // Очистка попередніх елементів
  
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = "5px";
    div.style.display = "inline-block";
    fragment.appendChild(div);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}
const destroyBoxes = () => boxesContainer.innerHTML = "";


 // Обробник події для кнопки Create
createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (!isNaN(amount) && amount > -1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";

  }
});
// Обробник події для кнопки Destroy
destroyBtn.addEventListener("click", destroyBoxes);