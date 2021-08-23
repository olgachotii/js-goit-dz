const pizzaPalace = {
  company: "Pizza Palace",
};

const burgerShack = {
  company: "Burger Shack",
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage;
const pizzaPalaceMessage = pizzaPalaceComposer("Манго");

const burgerShackComposer = composeMessage;
const burgerShackMessage = burgerShackComposer("Поли");
