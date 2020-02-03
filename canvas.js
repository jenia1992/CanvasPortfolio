var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
const scrollHeight = () => document.documentElement.scrollHeight;
canvas.width=window.innerWidth;
canvas.height=scrollHeight();

var mouse={
    x:undefined,
    y:undefined
}
var maxRadius=50;
var colorArr=["#320A28","#511730","#8E443D","#CB9173","#E0D68A"]
window.addEventListener('mousemove',function(){
    mouse.x=event.x;
    mouse.y=event.y
})
window.addEventListener('resize',function(){
    canvas.width=event.target.innerWidth;
    canvas.height=scrollHeight();

    init()
})

// function Circle(x,y,dx,dy,radius){
//     this.x=x;
//     this.y=y;
//     this.dx=dx;
//     this.dy=dy;
//     this.radius=radius;
//     this.minRadius=radius
//     this.color=colorArr[Math.floor(Math.random()*colorArr.length)];


//     this.draw=function(){
//         ctx.beginPath();
//         ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
//         ctx.fillStyle=this.color
//         ctx.fill()
//     }

//     this.update=function(){
//         if(this.x+this.radius > innerWidth || this.x - this.radius<0){
//             this.dx=-this.dx;
//         }
//         if(this.y+this.radius > innerHeight || this.y - this.radius<0){
//             this.dy=-this.dy;
//         }

//         this.x+=this.dx;
//         this.y+=this.dy;

//         //interactivity
//         if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50&&mouse.y-this.y>-50){
//             if(this.radius<maxRadius){
//                 this.radius+=1;
//             }
//         }
//         else if(this.radius>this.minRadius){
//             this.radius-=1;
//         }

//         this.draw()
//     }
// }


var circleArr=[];
function init(){
    circleArr=[];
    for(var i=0;i<800;i++){
        var x=Math.random()*(innerWidth-radius*2)+radius;
        var y=Math.random()*(scrollHeight()-radius*2)+radius;
        var dx=(Math.random()-0.5);
        var dy=(Math.random()-0.5);
        var radius = Math.random()*3+1;
        circleArr.push(new Circle(x,y,dx,dy,radius))
    }
}
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,scrollHeight())

    for(var i=0;i<circleArr.length;i++){
        circleArr[i].update()
    }


}
init()
animate()