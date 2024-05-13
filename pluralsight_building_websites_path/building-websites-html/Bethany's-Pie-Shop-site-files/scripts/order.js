window.addEventListener("DOMContentLoaded", ()=>{

    const cart = localStorage;

    class Pie {
        constructor(pieName, piePrice, quantity = 1) {
            this.name = [pieName];
            this.price = [piePrice];
            this.quantity = [quantity];
        }
     }

    const orderButtons = document.querySelectorAll(".order");

    orderButtons.forEach((button)=>{

        button.addEventListener("click", (e)=>{

            const pieName =  button.getAttribute("data-name");
            const piePrice = button.getAttribute("data-price");
            // let quantity = 1;

            if (cart.length == 0){
                const pieOrder = new Pie(pieName, piePrice);

                cart.setItem("order", JSON.stringify(pieOrder));

                if(cart.length == 1){
                    console.log("Order saved.")
                }
            } else {

                const order = JSON.parse(cart.getItem("order"));

                if (order.name.includes(pieName)){

                    let quantity = order.quantity.pop();
                    quantity += 1;
                    order.quantity.push(quantity);

                    cart.setItem("order", JSON.stringify(order));
                    console.log("Quantity updated.");
                
                } else {

                const pieOrder = new Pie(pieName, piePrice);

                cart.setItem("order", JSON.stringify(pieOrder, order));

                }

            }

        });

    });

});