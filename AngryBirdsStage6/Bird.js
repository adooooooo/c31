class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    //load the smoke image inside this.smokeImage ("smoke.png")
    this.smokeImage=loadImage("sprites/smoke.png");

    //create an empty array called this.trajectory
    this.trajectory=[]
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    
 

   /*for(when to repeat; when to repeat; how to repeats){
     what should repeat
   } 
*/
if(this.body.velocity.x>10 && this.body.position.x > 200){
  //create a var called position (array) which stores the x and y positions of the bird
   var position =[this.body.position.x,this.body.position.y];
  //push the position array inside the empty trajectory array
   //emptyArrayName.push(filledArrayVariable)
   this.trajectory.push(position);
}
   for(var i=0;i<this.trajectory.length;i++){
//image(imageName,x,y,width,height)

   image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
   }




  }
}
