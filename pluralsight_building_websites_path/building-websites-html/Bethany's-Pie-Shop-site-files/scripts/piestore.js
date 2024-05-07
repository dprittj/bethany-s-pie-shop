window.addEventListener("DOMContentLoaded", ()=>{

    const cart = window.localStorage;
    const orderArray = [];

    const allOrderBtns = document.querySelectorAll(".order");
    
    allOrderBtns.forEach((button)=>{

        // let total = 0;
        // const pieOrder = [];
        let quantity = 0;
        let pieInfo = [];
        
        button.addEventListener("click", (e)=>{

            // let quantity = 0;
            // let pieArray = [];
            const btn = e.currentTarget;

            const pieName = btn.getAttribute("data-name");
            const piePrice = btn.getAttribute("data-price");

            // setItem("key", value); where value = an []orderArray consisting of one []pieInfo for each kind of pie ordered.
            
            if (pieInfo.length == 0){
                // if the array is empty, this block adds the pieName and a quantity of 1 for the array; then returns the array and quantity;

                pieInfo.push(pieName);
                quantity += 1;
                pieInfo.push("quantity: " + quantity);
    
                console.log("Order created: " + pieInfo);

                return pieInfo, quantity;

            } else if (pieInfo.includes(pieName)){
                // if []pieInfo contains pieName, quantity updates by one (for each click), replaces quantity value inside []pieInfo, and returns new, updated values for quantity and []pieInfo;

                quantity +=1;
                const countIndex = pieInfo.indexOf(quantity);
                pieInfo.splice(countIndex, 1, quantity);

                console.log("Quantity updated: "+ pieInfo);

                return pieInfo, quantity;

            } else if (!(pieInfo.includes(pieName)) && pieArray.length > 0){
                // this throws an error if the array is not empty, but also does not contain the pieName;

                console.log("error");

            };

            cart.setItem("Ordering", JSON.stringify(order));

            console.log("Order saved.")
            console.log(JSON.stringify(order));


            // if(cart.length == 0){

            //     const order = {
            //         pie: [pieName],
            //         price: [piePrice],
            //         quantity: [quantity]
            //     };

            //     for (let i = 0; i < order[pie].lenth; i++){

            //         if (order.pie.includes(pieName)){
            //             pie.quantity += 1;

            //         }

            //     }

            //     cart.setItem("Ordering", JSON.stringify(order));

            //     console.log("Order saved.")
            //     console.log(JSON.stringify(order));

            // }





        });
    });
});