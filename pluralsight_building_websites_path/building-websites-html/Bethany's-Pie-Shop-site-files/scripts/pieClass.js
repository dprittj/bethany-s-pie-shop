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

/* order:
   "[

      [0] {"name":["Summer Apple Pie"],"price":["18.95"],"quantity":[3]},

      [1] {"name":["Blueberry Cheesecake"],"price":["17.95"],"quantity":[2]}


   ]"

*/

