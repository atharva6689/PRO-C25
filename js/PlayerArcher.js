class PlayerArcher{
   constructor(x, y, width, heigth){

     const option = {
       isStatic:true
    };
    
    this.body = Matter.Bodies.rectangle(x, y, width, heigth, option);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");
    
    World.add(world, this.body);
    Matter.Body.setAngle(this.body, -90);
  }

  display(){
    var pos = this.body.angle;
    var angle = this.body.angle;
    
    if (keyIsDown(DOWN_ARROW) && angle < -89 ) {
       angle += 1;
       Matter.Body.setAngle(this.body, angle);
      }
    
      if (keyIsDown(UP_ARROW) && angle > -100) {
         angle -=1;
         Matter.Body.setAngle(this.body, angle);
        }
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, -240, 350, this.width, 150);
        pop();

        function keyReleased() {
          if (keyCode === 32) {
            if (playerArrows.length) {
              var angle = playerArcher.body.angle;
              playerArrows[playerArrows.length - 1].shoot(angle);
            }
          }
        }
    }
}