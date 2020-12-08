class Milk{
  constructor(){
    
    this.image = loadImage("Milk.png");
    this.foodStock=foodS;
   this.lastFed=0
    

  }
  display(){
    var x=80,y=100;
    imageMode(CENTER);
    //image(this.image,80,100,70,70);
     //console.log(this.foodStock);
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
       image(this.image,x,y,50,50);
       x=x+30;
      }
    }
  }
  updateFoodStock(x){
    if(x<0){
     this.foodStock =0;
    }else{
      this.foodStock = x ;
    }
    console.log(this.foodStock)
  }
  getFoodStock(){
    return this.foodStock;
   
}
deductFood(){
  
}
}