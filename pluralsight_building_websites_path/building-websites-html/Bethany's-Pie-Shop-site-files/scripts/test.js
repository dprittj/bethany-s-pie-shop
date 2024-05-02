window.addEventListener("DOMContentLoaded", ()=>{

    const cart = localStorage.getItem("Ordering");
    const order = JSON.parse(cart);

    console.log(order);

    const pielist = order.pie.slice(0);
    const pricelist = order.price.slice(0);

    console.log(pielist, pricelist);

    function cartSummary(arr){

        for (let i = 0; i < pielist.length - 1; i++){

            let pieNum = 1;
            const aPie = pielist[i];

            for(let j = i+1; j < pielist.length; j++){

                const bPie = pielist[j];

                if (aPie == bPie){

                    pieNum += 1;

                }
            }
            console.log("Pie: " + aPie + ", Number: " + pieNum);
        }
    }

    // cartSummary(pielist);



    function readCart(arr){

        for (let i = 0; i < arr.length; i++){

            // const aPie = arr[i];

            const arrNum = [i];

            const newArr = arr.shift();

            const pieArr = arrNum.concat(newArr);

            console.log(pieArr);
        }
    }
    readCart(pielist);
    
});



