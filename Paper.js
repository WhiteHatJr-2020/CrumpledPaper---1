class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.7,
          friction:0.1,
          density:1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //noStroke();
      push();
      translate(pos.x,pos.y)
      
      fill("pink");
      ellipseMode(RADIUS);
      // Small ball bcoz ellipse excepts a diameter. So what you can do is use ellipseMode(RADIUS) instead of CENTER
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };