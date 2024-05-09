window.addEventListener("DOMContentLoaded", ()=>{

    // pieOrder => orderArr: the array of all pie types ordered
    // pieArray => pieInfoArr: information for a pie type

    const cart = window.localStorage;
    const allOrderBtns = document.querySelectorAll(".order");
    let orderArr = [["YOUR ORDER:"]];

    allOrderBtns.forEach((button)=>{
        // let total = 0;
        // const pieOrder = [];
        let quantity = 0;
        let pieInfoArr = [];
        
        button.addEventListener("click", (e)=>{
            // let quantity = 0;
            // const pieArray = [];
            const btn = e.currentTarget;
            const pieName = btn.getAttribute("data-name");
            const piePrice = btn.getAttribute("data-price");

            function initialOrder(){

                console.log("CONDITION: TRUE--cart empty");
                pieInfoArr.push(pieName, piePrice);
                quantity += 1;
                pieInfoArr.push(quantity);
        
                console.log("PIE INFORMATION: " + pieInfoArr);
                orderArr.push(pieInfoArr);
                console.log("ORDER CREATED: "+orderArr);
        
                cart.setItem("order", JSON.stringify(orderArr));
                const orderJson = cart.getItem("order");
                console.log("ORDER SAVED: (Non-Parsed): "+orderJson);
                console.log("(Parsed): "+JSON.parse(orderJson));
        
                return pieInfoArr, quantity;
            }

            // setItem("key", value); where value = an []orderArr consisting of a []pieInfoArr for each pie ordered.
            
            if ((cart.length == 0)){
                // if the array is empty, this block adds the pieName and a quantity of 1 for the array; then returns the array and quantity;

                initialOrder();

                // pieInfoArr.push(pieName, piePrice);
                // quantity += 1;
                // pieInfoArr.push("quantity: " + quantity);

                // console.log("ORDER CREATED: " + pieInfoArr);
                // orderArr.push(pieInfoArr);
                // console.log("first order: "+orderArr);

                // cart.setItem("order", JSON.stringify(orderArr));
                // const orderJson = cart.getItem("order");
                // console.log("order stored: "+orderJson);

                // return pieInfoArr, quantity;
            } else { 

                orderArr = JSON.parse(cart.getItem("order"));
                console.log(orderArr);
                console.log("orderArr length: "+orderArr.length);

                for (let i = 0; i < orderArr.length; i++){

                    let pieInfo = orderArr[i];
                    console.log("Loop count: " + i);

                    for(let j= 0; j<pieInfo.length; j++){

                        if(pieInfo.includes(pieName)){
                            console.log("Item identified.")

                            quantity +=1;
                            // const countIndex = pieInfoArr.indexOf(quantity);
                            pieInfo.splice(pieInfo.indexOf(quantity), 1, quantity);

                            orderArr.splice(pieInfo, 1);
                            console.log("Log")

                            console.log("UPDATING..."+orderArr);
                            
                            console.log("ADDING UPDATED PIE INFO: "+pieInfo);
        
                            // const updating = cart.getItem("order");
                            // orderArr = JSON.parse(updating);
        
                            // for (let i = 0; i<orderArr.length; i++){
                            //     if (orderArr[i].includes(pieName))
                            //         console.log("previous order: "+orderArr)
                            //         orderArr.splice(orderArr[i], 1);
                            //         console.log("Order updating...")
                            // };


                            // quantity +=1;
                            // const countIndex = pieInfoArr.indexOf(quantity);
                            // pieInfoArr.splice(countIndex, 1, quantity);
                            
                            // console.log(pieInfoArr);
        
                            // console.log("Quantity updated: "+pieInfoArr);
        
                            // const updating = cart.getItem("order");
                            // orderArr = JSON.parse(updating);
        
                            // for (let i = 0; i<orderArr.length; i++){
                            //     if (orderArr[i].includes(pieName))
                            //         console.log("previous order: "+orderArr)
                            //         orderArr.splice(orderArr[i], 1);
                            //         console.log("Order updating...")
                            // };
        
                            // console.log("updating: "+JSON.parse(updating));

                            // orderArr.push(pieInfoArr);
                            // console.log("orderArr: "+orderArr);
        
                            // array containing pieName being updated needs to be spliced from pieOrder
                            
        
                            // cart.setItem("order", JSON.stringify(orderArr));
        
                            return orderArr, quantity;
                        } else {console.log("No item identified.")}
                    }
                }

                orderArr.push(pieInfoArr);
                console.log("orderArr(updated): "+orderArr);

                cart.setItem("order", JSON.stringify(orderArr));


            }

                // } else if (pieInfoArr.includes(pieName)){
                // // if the array already has the pieName, this code block updates the quantity by one (for each click), and updates the quantity inside the pieArray, and returns the quantity and the array;

                //     const countIndex = pieInfoArr.indexOf(quantity);
                //     pieInfoArr.splice(countIndex, 1, quantity);
                //     quantity +=1;

                //     console.log("Quantity updated: "+pieInfoArr);

                //     const updating = cart.getItem("order");
                //     orderArr = JSON.parse(updating);

                //     for (let i = 0; i<orderArr.length; i++){
                //         if (orderArr[i].includes(pieName))
                //             console.log("previous order: "+orderArr)
                //             orderArr.splice(orderArr[i], 1);
                //             console.log("Order updating...")
                //     };

                //     // console.log("updating: "+JSON.parse(updating));
                //     orderArr.push(pieInfoArr);
                //     console.log("orderArr: "+orderArr);

                //     // array containing pieName being updated needs to be spliced from pieOrder
                    

                //     cart.setItem("order", JSON.stringify(orderArr));

                //     return pieInfoArr, quantity;

            //     else if (!(pieInfoArr.includes(pieName)) && pieInfoArr.length > 0){
            //     // this throws an error if the array is not empty, but also does not contain the pieName;

            //         console.log("error");
            // };

            /* if (cart.length==0){

                pieOrder.push(pieArray);
                cart.setItem("order", JSON.stringify(pieOrder));
    
            } 

            cart.getItem("order", JSON.parse(pieOrder));
    
            pieOrder.push(pieArray);
            cart.setItem("order", JSON.stringify(pieOrder));
            */
            
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