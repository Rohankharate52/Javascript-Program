

//function.....
function sayMyName(){

    console.log9("h");
    console.log9("h");
    console.log9("h");
    console.log9("h");
    console.log9("h");
    console.log9("h");
    console.log9("h");
    
    }
    //sayMyName()  
    
    //function addTwoNumbers(numbers1,numbers2)
    //{
      // console.log(numbers1 + numbers2); 
    
    //}
    
    function addTwoNumbers(numbers1,numbers2) 
    {
        let result = (numbers1 + numbers2);
        return result
    
    }
    
    const result = addTwoNumbers( 3 , 5  ) 
    
   // console.log("Result : ",result) ;
  //parametreed liye jate hai.....


   function loginUserMessage(username) 
   { 
    if (username === undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `

   }
   console.log(loginUserMessage("rohan kharate"))
