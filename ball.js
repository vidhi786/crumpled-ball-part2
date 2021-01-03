class Ball {
    constructor(x, y, r) {
      var options = {
          'restitution':0.2,
          'friction':0.3,
          'density':1.0,
         // isStatic:true
          
    
      }
      this.body = Bodies.circle(x,y,r,options)
      this.r=r;
      this.image=loadImage("paper.png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill(255);
      image(this.image,pos.x,pos.y,this.r,this.r);
      
    }
  }
