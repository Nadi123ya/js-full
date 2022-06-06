"use strict";

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  dateCreated = new Date();
  isConfirmed = false;
  dateConfirmed = null;

  constructor(price, city, type, id) {
    // eslint-disable-next-line no-unused-expressions
    this.id = String(id);
    this.price = price;
    this.city = city;
    this.type = type;
  }

  // eslint-disable-next-line class-methods-use-this
  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return this.type === "Buy" || this.type === "Sell" ? true : false;
  }
}

const order1 = new Order(90, "Kiev", "Buy", "342434");
console.log(order1);
console.log(order1.checkPrice(1030));
console.log(order1.isValidType());
order1.confirmOrder();
console.log(order1);
