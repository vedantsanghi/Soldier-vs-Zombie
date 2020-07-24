class Player {
    constructor(){
     this.index = null;
      //this.name = null
      //this.password = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    updateRegister(name,password){
      var playerIndex = "players/" + name;
      database.ref(playerIndex).set({
        password: password
        // name : name
        // level: this.level
      });
    }

    checkname(name1){
     var nameRef = database.ref();
     nameRef.on("value",()=>{
        allplayer = data.val()
        for(var plr in allplayer){
          if(plr===name1){
            // Player.checkPassword()  
            loginState=1
          }

          
        }
     })
    }

      static checkPassword(pass){
         var a = this.name + "/password"
       var passRef =database.ref(a);
        passRef.on("value",()=>{
         password1 = data.val()
           if (pass === password1){
                //  game.update(1);
           } else {
           text("The password typed is incorrect", displayWidth/2, displayHeight/5)
           }
        })
      }
    
}