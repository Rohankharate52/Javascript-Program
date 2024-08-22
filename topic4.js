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

createOrder(cart) 
  .then(function (orderId) {
    return proceedToPayment(orderId);

  })
  .then (function (paymentInfp) {
    return showOrderSummary(paymentInfp);
  })
  .then(function (paymentInfp) {
    return updateWalletBalance(paymentInfp);

  });