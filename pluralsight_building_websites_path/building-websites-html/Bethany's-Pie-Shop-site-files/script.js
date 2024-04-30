window.addEventListener("DOMContentLoaded", ()=>{

    const cart = window.localStorage;

    const allOrderBtns = document.querySelectorAll(".order");

    allOrderBtns.forEach((button)=>{

        button.addEventListener("click", (e)=>{

            const btn = e.currentTarget;
            const pieName = btn.getAttribute("data-name");
            const piePrice = btn.getAttribute("data-price");

            // let i = 1;
            // while (cartObject.length !== 0){
            // }

            // const save = window.Storage;
            console.log("Order created.");

            if(cart.length == 0){

                const order = {
                    pie: [pieName],
                    price: [piePrice]
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

                // addOrder.pie = addPie;
                // addOrder.price = addPrice;

                console.log("Order updated: " + addOrder);
                cart.setItem("Ordering", JSON.stringify(addOrder));

                console.log("Ordering updated: " + addOrder);
                // console.log(order);
            };
        });
    });
});