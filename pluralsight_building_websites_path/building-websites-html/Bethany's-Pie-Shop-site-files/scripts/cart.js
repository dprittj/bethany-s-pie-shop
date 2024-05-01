window.addEventListener("DOMContentLoaded", ()=>{

    const cart = localStorage.getItem("Ordering");
    const order = JSON.parse(cart);

    console.log(order);

    const pielist = order.pie.slice(0);
    const pricelist = order.price.slice(0);

    console.log(pielist, pricelist);

    

    
});