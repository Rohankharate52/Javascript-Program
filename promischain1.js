

const cart = [ "shoes", "pants", "kurta"];

const promise = createOrder(cart) ; //orderID

promise.then(function (orderID){
    console.log(orderID);
    //
});

//producer
function createOrder(cart) {
    const pr = new promise(function (resolve,reject){
        //createOrder 
        //validateCart
        //orderID
        if  (!validationCart (cart)) {
            const err = new Error("Cart is not valid");
            reject(err);

        }
        //logic for createOrder
        const orderid = "1234";
        if (orderid) {
            setTimeout(function() {
                resolve(orderid)
            },5000);
            
            

        }
    });
    return pr;



}
function validateCart(cart) {

}