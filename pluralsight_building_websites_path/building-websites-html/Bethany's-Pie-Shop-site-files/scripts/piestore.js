window.addEventListener("DOMContentLoaded", ()=>{

    const cart = window.localStorage;
    const orderArray = [];

    const allOrderBtns = document.querySelectorAll(".order");
    
    allOrderBtns.forEach((button)=>{

        // let total = 0;
        // const pieOrder = [];
        
        button.addEventListener("click", (e)=>{

            const quantity = 0;
            const pieArray = [];
            const btn = e.currentTarget;

            const pieName = btn.getAttribute("data-name");
            const piePrice = btn.getAttribute("data-price");

            // setItem("key", value); where value = an []orderArray consisting of []pieArray's, one for each pie ordered.
            
            if (pieArray.length == 0){
                // if the array is empty, this block adds the pieName and a quantity of 1 for the array; then returns the array and quantity;

                pieArray.push(pieName);
                quantity += 1;
                pieArray.push("quantity: " + quantity);
    
                console.log("Order created.");

                return pieArray, quantity;

            } else if (pieArray.includes(pieName)){
                // if the array already has the pieName, this code block updates the quantity by one (for each click), and updates the quantity inside the pieArray, and returns the quantity and the array;

                quantity +=1;
                const countIndex = pieArray.indexOf(quantity);
                pieArray.splice(countIndex, 1, quantity);

                console.log("Quantity updated.");

                return pieArray, quantity;

            } else if (!(pieArray.includes(pieName)) && pieArray.length > 0){
                // this throws an error if the array is not empty, but also does not contain the pieName;

                console.log("error");

            };




            if(cart.length == 0){

                const order = {
                    pie: [pieName],
                    price: [piePrice],
                    quantity: [quantity]
                };

                for (let i = 0; i < order[pie].lenth; i++){

                    if (order.pie.includes(pieName)){
                        pie.quantity += 1;

                    }

                }

                cart.setItem("Ordering", JSON.stringify(order));

                console.log("Order saved.")
                console.log(JSON.stringify(order));

            }





        });
    });
});