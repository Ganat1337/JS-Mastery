// OOP
class Product {
  constructor(name , price , offer) {
    this.n = name
    this.p = price
    this.o = offer
    }
        discount (){
      return` The price after offer is ${this.p - this.o} `
    }
}

let book = new Product("Harry Potter", 1000, 10);

console.log(book.n);
console.log(book.p);
console.log(book.o);
console.log(book.discount());
console.log(Product.prototype);
console.log("******************************************************");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
