class Dustbin
{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.dustbinWidth=200;
    this.dustbinheight=100;
    this.wallThickness=20;
    this.angle=0;

    this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinheight/2, this.wallThickness, this.dustbinheight, {isStatic:true});

    this.righttWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinheight/2, this.wallThickness, this.dustbinheight, {isStatic:true});

    Matter.Body.setAngle(this.righttWallBody, -1*this.angle);
    World.add(world, this.bottomBody);
    World.add(world, this.righttWallBody);
    World.add(world, this.leftWallBody);
  }
    show(){
      var BottomPos = this.bottomBody.position;
      var RightPos = this.righttWallBody.position;
      var LeftPos = this.leftWallBody.position;

      push();
      translate(LeftPos.x,LeftPos.y);
      rectMode(CENTER);
      angleMode(RADIUS);
      rotate(this.angle);
      rect(0,0,this.wallThickness,this.dustbinheight);
      pop();

      push();
      translate(RightPos.x,RightPos.y);
      rectMode(CENTER);
      angleMode(RADIUS);
      rotate(-1*this.angle);
      rect(0,0,this.wallThickness,this.dustbinheight);
      pop();

      push();
      translate(BottomPos.x,BottomPos.y);
      rectMode(CENTER);
      angleMode(RADIUS);
      rect(0,0,this.dustbinWidth,this.wallThickness);
      pop();

    }
  }
