// Колбэк - функция;
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);

//доставка пицы

//  Колбэк - функция;
function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
}

//  Колбэк - функция;
function makePizza(pizzaName) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
}

// Функция высшего порядка
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

makeMessage("Роял гранд", makePizza);
makeMessage("Ультрасыр", deliverPizza);

// ещё пица

function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza("Роял гранд", function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
});

makePizza("Ультрасыр", function eatPizza(pizzaName) {
  console.log(`Едим пиццу ${pizzaName}.`);
});

//отель

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest("Манго", function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest("Поли", function notify(name) {
  console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});

// Имитируем доступность абонента случайным числом

// function processCall(recipient) {
//
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Манго");

// или колбек

function processCall(recipient, onAvailable, onNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Поли", takeCall, leaveHoloMessage);

// снова пица

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Поли", takeCall, leaveHoloMessage);

const pizzaPalace = {
  pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(`В ассортименте нет пиццы с названием ${pizzaName}`);
    }
    return onSuccess(pizzaName);
  },
};

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
pizzaPalace.order("Биг майк", makePizza, onOrderError);
pizzaPalace.order("Венская", makePizza, onOrderError);
console.log(pizzaPalace.order("Венская", makePizza, onOrderError));
