window.addEventListener("DOMContentLoaded", ()=>{

    const cart = localStorage;

    class Pie {
        constructor(pieName, piePrice, quantity = 1) {
            this.name = [pieName];
            this.price = [piePrice];
            this.quantity = [quantity];
        }
    }

    let totalOrder = [];

    const orderButtons = document.querySelectorAll(".order");

    orderButtons.forEach((button)=>{

        button.addEventListener("click", (e)=>{

            const pieName =  button.getAttribute("data-name");
            const piePrice = button.getAttribute("data-price");
            // let quantity = 1;

            if (cart.length == 0){
                const pieOrder = new Pie(pieName, piePrice);

                totalOrder.push(pieOrder);

                cart.setItem("order", JSON.stringify(totalOrder));

                if(cart.length == 1){
                    console.log("Order saved. " + JSON.stringify(totalOrder));
                }
            } else {

                const order = JSON.parse(cart.getItem("order"));
                console.log(order);

                if (order[0].name.includes(pieName)){

                    let quantity = order[0].quantity.pop();
                    quantity += 1;
                    order[0].quantity.push(quantity);

                    cart.setItem("order", JSON.stringify(order));
                    console.log("Quantity updated.");
                
                } else {

                const pieOrder = new Pie(pieName, piePrice);

                const order = JSON.parse(cart.getItem("order"));

                order.push(pieOrder);

                cart.setItem("order", JSON.stringify(order));

                console.log("Order updated." + JSON.stringify(order));

                }

            }

        });

    });

});