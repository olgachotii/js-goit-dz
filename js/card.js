/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    const { items } = this;

    for (const item of items) {
      if (item.name === product.name) {
        // console.log("такой продукт уже есть", product.name);
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      // console.log(items[i]);

      if (productName === items[i].name) {
        // console.log("Ok");
        items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;

    for (const { price, quantity } of items) {
      totalPrice += price * quantity;
    }
    return totalPrice;
  },

  increaseQuantity(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].name === productName) {
        items[i].quantity += 1;
      }
    }
  },

  decreaseQuantity(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].quantity === 1) {
        items.splice(i, 1);
      }
      if (items[i].name === productName) {
        items[i].quantity -= 1;
      }
    }
  },
};

console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍎", price: 50 });

console.table(cart.getItems());

// cart.remove("🍎");
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

cart.increaseQuantity("🍎");
console.table(cart.getItems());

// cart.decreaseQuantity("🍋");
// cart.decreaseQuantity("🍋");
// console.table(cart.getItems());

console.log("Total: ", cart.countTotalPrice());
