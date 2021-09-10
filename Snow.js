class Snow {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 10,10, options);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("snow5.webp")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,10,10)
      //rectMode(CENTER);
  //stroke("purple")
  //strokeWeight(4)
      //fill(255,0,0);
      //rect(0, 0, this.width, this.height);
      pop();
    }
    dropsnow(){
if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})
}

    }
  };