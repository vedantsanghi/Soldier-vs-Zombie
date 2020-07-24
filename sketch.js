var database;
// var name, password;
var playerCount;
// var button, button1, button2, button3, button4, button5, button6;
var formState ;
var loginState;
var registerState
var player ,game, form;


function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  // createSprite(400, 200, 50, 50);
  player = new Player()
  form = new Form2()
  formState = 0
  loginState = 0
  registerState = 0
}

function draw() {
  background(255,255,255);  
  form.display()
  drawSprites();
}