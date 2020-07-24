class Form2 {
    constructor() { }
    display() {
        push()
        fill("black")
        textSize(50)
        text("Soldier vs Zombies", displayWidth / 3, displayHeight / 6)
        pop()
        if (formState === 0) {
            var button = createButton("Already a Player")
            button.position(displayWidth / 3, displayHeight / 2)
            button.size(100, 100)

            var button1 = createButton("New Player")
            button1.position(displayWidth / 2, displayHeight / 2)
            button1.size(100, 100)


            if (button.mousePressed()) {
                button.hide();
                button1.hide()
                formState = 1;
            }

            if (button1.mousePressed() ) {
                button1.hide()
                button.hide()
                formState = 2;
            }
        }


        if (formState === 1) {
            if (loginState === 0) {
                var input1 = createInput("NAME")
                input1.position(displayWidth / 2, displayHeight / 4);

                var button2 = createButton("NEXT")
                button2.position(displayWidth / 2, displayHeight / 2)
                button2.mousePressed(function () {
                    input1.hide();
                    button2.hide()
                    var name2 = input1.value();
                    checkName(name2)
                })
            }
            if (loginState === 1) {
                var button6 = createButton("NEXT")
                button6.position(displayWidth / 2, displayHeight / 2)

                var input4 = createInput("PASSWORD")
                input4.position(displayWidth / 2, displayHeight / 3)

                button6.mousePressed(function () {
                    input4.hide()
                    button6.hide()
                    var password2 = input4.value();
                    checkPassword(password2)
                })
            }
        }

        if (formState === 2) {
            if (registerState === 0) {
                push()
                fill("black")
                textSize(20)
                text("Write your name and create a password for your account", displayWidth / 3.5, displayHeight / 5)
                pop()

                var input2 = createInput("NAME")
                var input3 = createInput("PASSWORD")

                input2.position(displayWidth / 2, displayHeight / 4);
                input3.position(displayWidth / 2, displayHeight / 3)


                var button4 = createButton("REGISTER")
                button4.position(displayWidth / 2, displayHeight / 2)

                button4.mousePressed(function () {
                    input2.hide()
                    input3.hide()
                    button4.hide()
                     
                    var name1 = input2.value();
                    var password1 = input3.value()
                    playerCount += 1;
                    player.index = playerCount;
                    var name3 = name1 + playerCount
                    
                    updateCount(playerCount);
                    //updateRegister(name3, password1);
                })
            }

            if (registerState === 1) {
                push()
                fill("black")
                textSize(20)
                text("We have added a number to your name because similar names can cause an error.", displayWidth / 4, displayHeight / 5)
                text("Remember the name and password because when you open the game you will need them.", displayWidth / 4, displayHeight / 4.5)
                text("Name: " + name3, displayWidth / 3, displayHeight / 3.5)
                text("Password: " + password1, displayWidth / 3, displayHeight / 3)
                pop()

                var button5 = createButton("OKAY")
                button5.position(displayWidth / 2, displayHeight / 2)

                button5.mousePressed(function () {
                    button5.hide()
                })
            }
        }
    }
}
