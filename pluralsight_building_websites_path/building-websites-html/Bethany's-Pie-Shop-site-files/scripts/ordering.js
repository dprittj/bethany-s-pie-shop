window.addEventListener("DOMContentLoaded", ()=>{

    const cart = window.localStorage;

    const allOrderBtns = document.querySelectorAll(".order");

    allOrderBtns.forEach((button)=>{

        // let total = 0;
        // const pieOrder = [];

        button.addEventListener("click", (e)=>{

            const btn = e.currentTarget;
            const pieName = btn.getAttribute("data-name");
            const piePrice = btn.getAttribute("data-price");

            // total += 1;
            
            console.log("Order created.");

            if(cart.length == 0){

                const order = {
                    pie: [pieName],
                    price: [piePrice]
                    // quantity: [total]
                };

                cart.setItem("Ordering", JSON.stringify(order));

                console.log("Order saved.")
                console.log(JSON.stringify(order));

            } else {

                const order = cart.getItem("Ordering");
                console.log("Previous order: " + order);
                const addOrder = JSON.parse(order);

                const addPie = addOrder.pie.push(pieName);
                const addPrice = addOrder.price.push(piePrice);

                console.log("Order updated: " + addOrder);
                cart.setItem("Ordering", JSON.stringify(addOrder));

                console.log("Ordering updated: " + addOrder);
            };
        });
    });
});