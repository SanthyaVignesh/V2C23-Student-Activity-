class Box{
    constructor(x,y,width,height){
        var option = {
            restitution : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        //help us to display the box
        var pos = this.body.position

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }
}
