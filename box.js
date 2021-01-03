class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':3,
         isStatic:true
          
    
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      
      fill("red");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
      
    }
  };
