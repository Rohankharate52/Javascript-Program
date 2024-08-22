

const cart = ["shoes" ,"pant", "kurta"];

api.createorder(cart,function () {
    
    api.procedToPayment(function () {

        api.showOrderSummay(

            function () {
                api.updateWalletLeft() 

            }
        )
    })
})