//Promise 

//#  1


const cart = ["shoes", "pants", "kurtha"];

createOrder(cart,function (orderId) {
    proceedToPayment(orderId,function(paymentInfp) {
        showOrderSummary(paymentInfp,function() {
            updateWalletBalance() ;

        })
    })
});


//new style...
//allow funtion.... 

createOrder(cart) 
.then ((orderId) => proceedToPayment(orderId))
.then ((paymentInfp) => showOrderSummary(paymentInfp))
.then((paymentInfp) => updateWalletBalance(paymentInfp))
