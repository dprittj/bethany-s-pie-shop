window.addEventListener("DOMContentLoaded", ()=>{

    const cart = localStorage.getItem("Ordering");
    const order = JSON.parse(cart);

    console.log(order);

    const pielist = order.pie.slice(0);
    const pricelist = order.price.slice(0);

    console.log(pielist, pricelist);

    // Need to (1)loop through each storage object property, ie. (1a)the pie-key array and (1b)the price-key array; or, just (i) remake these arrays (ii) to then be looped through

    // pielist.slice

    // for (let i = 0; i < order.pie.length; i++){

    //     const pies = order.pie[i];
    //     const pieSlice = pies.slice;
    //     pielist.push(slice);

    //     i++;

    // }


});