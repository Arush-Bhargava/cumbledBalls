class paper{
    constructor(x,y,radius){
        var options = {
           'restitution':0.3,
           'friction':0.5,
           'density':1.2,
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
      display(){
  
          translate(this.body.position.x, this.body.position.y);
          fill("yellow")
          ellipseMode(RADIUS);
          ellipse(0,0,30,30) ;
      }
  
  }