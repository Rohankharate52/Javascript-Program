function loginUserMessage(username = "sam") 
   { 
      if (!username) { 
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `

   }
   console.log(loginUserMessage("rohan kharate"))
