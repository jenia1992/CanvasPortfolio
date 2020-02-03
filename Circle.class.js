function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=radius
    this.colorArr=["#320A28","#511730","#8E443D","#CB9173","#E0D68A"]
    this.color=this.colorArr[Math.floor(Math.random()*this.colorArr.length)];
    
    
    

    this.draw=function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.fillStyle=this.color
        ctx.fill()
    }

    this.update=function(){
        if(this.x+this.radius > innerWidth || this.x - this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius > innerHeight || this.y - this.radius<0){
            this.dy=-this.dy;
        }
    
        this.x+=this.dx;
        this.y+=this.dy;

        //interactivity
        if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50&&mouse.y-this.y>-50){
            if(this.radius<maxRadius){
                this.radius+=1;
            }
        }
        else if(this.radius>this.minRadius){
            this.radius-=1;
        }

        this.draw()
    }
}