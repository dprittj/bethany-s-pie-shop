class Pie {
    constructor(pieName, piePrice, quantity = 1) {
       this.name = [pieName];
       this.price = [piePrice];
       this.orderQuantity = [quantity];
    }
 }

class Order {
   constructor(pieName, piePrice, quantity = 1){
      this.order = [pieName, piePrice, quantity]
   }
}

order {
   totalOrder[
      {
         name: x,
         price: x,
         quantity: x,
      }
   ]
}