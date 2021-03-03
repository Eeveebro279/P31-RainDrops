class Drop{
    constructor(x,y) {
        var options = {
            restitution: 0.3
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5
        World.add(world, this.body);
      }

      updateY(){
        if (this.body.position.y > height){
          Matter.Body.setPosition(this.body, {x: ramdom(0,400), y: random(0,400)})
        }
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("cyan");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
}