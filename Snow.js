class Snow {
    constructor(x, y) {
        var options = {
            restitution:0.4
        }
        this.width = 70;
        this.height = 70;
        this.image= loadImage("snow4.webp");
        this.body = Bodies.rectangle(x, y,70, 70, options);
        World.add(world,this.body);
    }
    display(){
    
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, 70, 70);
            pop();
    }
        
       /*collision(){
         World.remove(world,this.body);
         push();
         this.Visibility = this.Visibility - 5;
         tint(255,this.Visibility);
         //image(this.image,this.body.position.x,this.body.position.y,50,50);
         pop();
          }*/
    

}