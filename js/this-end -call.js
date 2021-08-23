// Дополни функцию composeMessage(position) так,
// чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>.
// Ваш заказ < позиция > -й в очереди.'
// Позиция это значение параметра position -
// позиция элемента в массиве(на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа
// в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений о статусе
// заказов из массива orders с помощью цикла for

const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// окружение для этой функции orders[i]
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
    position + 1
  }-й в очереди.`;
}

const messages = [];

// 1. по очереди помещаем ф-цию  composeMessage в orders[i]
for (let i = 0; i < orders.length; i++) {
  messages.push(composeMessage.call(orders[i], i));
}

console.log(messages);
