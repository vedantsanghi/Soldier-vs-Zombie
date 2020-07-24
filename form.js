class Form {
    constructor(){
    this.input = createInput("NAME")
    this.input1 = createInput("PASSWORD")
    this.input2 = createInput("NAME")
    this.input3 = createInput("PASSWORD")
    this.button
    this.button1
    this.button2
    this.button3
    this.button4
    this.button5
    this.button6
    }
display(){
    push()
    fill("black")
    textSize(50)
    text("Soldier vs Zombies", displayWidth/3, displayHeight/6)
    pop()  
    // if(formState === 1){
    this.input.hide()
    this.input1.hide()
    this.input2.hide()
    this.input3.hide()
   this.button = createButton("Already a Player")
   this.button.position(displayWidth/3, displayHeight/2)
   this.button.size(100,100)

   this.button1 = createButton("New Player")
   this.button1.position(displayWidth/2, displayHeight/2)
   this. button1.size(100,100)

   this.button.mousePressed(function(){
   Form.display2();
   formState =  2
})
this.button1.mousePressed(function(){
    Form.display3();
    formState = 3
 })
// }
}
static display2(){
  // if(formState===2){
    this.button.hide()
    this.button1.hide()
    //this.input.position(displayWidth/2, displayHeight/4);

  
  
    this.button3 = createButton("NEXT")
    this.button3.position(displayWidth/2, displayHeight/2 )
  
    this.button3.mousePressed(function(){
      name = this.input.value();
      checkName(name)
      
    //   checkPassword(player.password)
    })
  // } 
}
static display3(){
  // if(formState===3){
    push()
    fill("black")
    textSize(20)
    text("Write your name and create a password for your account", displayWidth/3.5, displayHeight/5)
    pop()   

    this.button.hide()
    this.button1.hide()
  //this.input2.position(displayWidth/2, displayHeight/4);

  //this.input3.position(displayWidth/2, displayHeight/3)

  
  this.button4 = createButton("REGISTER")
  this.button4.position(displayWidth/2, displayHeight/2 )

  this.button4.mousePressed(function(){
  Form.display4()
  formState = 4
  })
// }
}
static display4(){
  // if(formState===4){
      push()
      fill("black")
      textSize(20)
      text("We have added a number to your name because similar names can cause an error.", displayWidth/4, displayHeight/5)
      text("Remember the name and password because when you open the game you will need them.", displayWidth/4, displayHeight/4.5)
      text("Name: "+ name, displayWidth/3, displayHeight/3.5)
      text("Password: "+password, displayWidth/3, displayHeight/3)
      pop()  
  
      this.button5 = createButton("OKAY")
      this.button5.position(displayWidth/2, displayHeight/2)
  
      this.button5.mousePressed(function(){
        player.name = this.input.value();
        password = this.input1.value()
        playerCount+=1;
        index = playerCount;
       name = player.name + playerCount
       updateRegister(name, password);
       updateCount(playerCount);
      })
    //  }
    }
      static display5(){
    //this.input1.position(displayWidth/2, displayHeight/3)
      
    button6 = createButton("NEXT")
    button6.position(displayWidth/2, displayHeight/2 )
  
    button6.mousePressed(function(){
      player.password = this.input1.value();
      checkPassword(player.password)
    })
      }

hide(){
this.button.hide();
this.button1.hide();
this.button2.hide();
this.button3.hide();
this.button4.hide();
this.button5.hide();
this.button6.hide();
this.input.hide();
this.input1.hide();
this.input2.hide();
this.input3.hide();
}
}