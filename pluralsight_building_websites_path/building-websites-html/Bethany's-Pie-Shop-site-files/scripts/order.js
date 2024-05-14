window.addEventListener("DOMContentLoaded", ()=>{

    const cart = localStorage;

    cart.clear();

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

            if (cart.length === 0){
                const pieOrder = new Pie(pieName, piePrice);

                totalOrder.push(pieOrder);

                cart.setItem("order", JSON.stringify(totalOrder));

                console.log("Order saved. " + '\n' + cart.getItem("order"));

            } else if (cart.length > 0){

                const order = JSON.parse(cart.getItem("order"));
                
                // console.log(order);

                for (let i = 0; i < order.length; i++){

                    console.log("ITERATION: " + i);

                    if(order[i].name.includes(pieName)){

                        console.log("Updating quantity...");

                        let quantity = order[i].quantity.pop();
                        quantity += 1;
                        order[i].quantity.push(quantity);

                        cart.setItem("order", JSON.stringify(order));
                        console.log("Quantity updated." + '\n' + JSON.stringify(order));

                    } else {
                    
                    console.log("Adding new item to cart...")

                    const pieOrder = new Pie(pieName, piePrice);

                    // const order = JSON.parse(cart.getItem("order"));

                    order.push(pieOrder);

                    cart.setItem("order", JSON.stringify(order));

                    console.log("Order updated." + '\n' + JSON.stringify(order));

                    }
                }
            }

        });

    });

});