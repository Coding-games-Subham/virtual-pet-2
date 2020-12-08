//Create variables here
var dog, happyDog, database, foodS, foodStock
var feedPet,addPet
var feedTime,lastFed
var foodObj;
function preload()
{
  //load images here
  foodWait = loadImage("dogImg.png");
  foodReady = loadImage("dogImg1.png");
  food = loadImage("Milk.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  
 dog = createSprite(350,300);
 dog.addImage(foodWait);
 dog.scale=0.2;

feed=createButton("feed the dog")
feed.position(700,95);
feed.mousePressed(feedDog);

AddFood=createButton("Add Food")
AddFood.position(800,95);
AddFood.mousePressed(addFoods);

feedTime=database.ref('feedTime');
  feedTime.on("value",function(data){
    lastFed=data.val();
  });

 foodStock=database.ref('Food');
foodStock.on("value",readStock);

foodObj=new Milk();
}


function draw() {  
  background(46, 139, 87);
  
  foodObj.display();

  drawSprites();
  //add styles here
  textSize(30);
  stroke("blue");
  strokeWeight(3);
  
  
    text('food Remaining : ' + foodS,100,100);
    if(lastFed>=12){
      text("lastFeed : "+ lastFed%12+"PM",250,30);
    }else if(lastFed==0){
      text("lastFeed : 12 AM",250,30);
    }else{
      text("Last Feed : "+ lastFed+" AM",250,30);
    }
    //foodObj.display();
}
function addFood(){
   foodS+=1;
}
function readStock(data){
  if(foodS){
  foodS=data.val();
  }else{
    foodS=data.val();
    foodObj.foodStock=foodS;
  }
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  database.ref('/').update({
    Food:x
  })
}

function feedDog(){
  
  dog.addImage(foodReady);
  
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    feedTime:hour()
})
  }
function addFoods(){
  foodObj.updateFoodStock(foodObj.getFoodStock()+1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    feedTime:hour()
})
}



