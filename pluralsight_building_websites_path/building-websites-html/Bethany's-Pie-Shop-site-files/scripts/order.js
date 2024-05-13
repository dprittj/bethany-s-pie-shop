window.addEventListener("DOMContentLoaded", ()=>{

    const cart = localStorage;

    class Pie {
        constructor(pieName, piePrice, quantity = 1) {
           this.name = pieName;
           this.price = piePrice;
           this.quantity = quantity;
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

                if (pieName == order.name){

                    order.quantity += 1;
                    cart.setItem("order", JSON.stringify(order));
                
                }
            }

        });

    });

});