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

            } else { 

                orderArr = JSON.parse(cart.getItem("order"));
                console.log(orderArr);
                console.log("orderArr length: "+orderArr.length);

                for (let i = 0; i < orderArr.length; i++){

                    let pieInfo = orderArr[i];
                    console.log("Loop count: " + i);

                    // for(let j= 0; j<pieInfo.length; j++){

                        if(pieInfo.includes(pieName)){
                            console.log("Item identified.")

                            quantity +=1;
                            // const countIndex = pieInfoArr.indexOf(quantity);
                            pieInfo.splice(pieInfo.indexOf(quantity), 1, quantity);

                            orderArr.splice(pieInfo, 1);
                            console.log("Log")

                            console.log("UPDATING..."+orderArr);
                            
                            console.log("ADDING UPDATED PIE INFO: "+pieInfo);
        
                            // return orderArr, pieInfo, quantity;
                        } else {
                            console.log("No item identified.")}
                    // }
                }

                orderArr.push(pieInfoArr);
                console.log("orderArr(updated): "+orderArr);

                cart.setItem("order", JSON.stringify(orderArr));

            }
        });
    });
});