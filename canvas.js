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

window.addEventListener('mousemove',function(){
    mouse.x=event.x;
    mouse.y=event.y+window.pageYOffset;
    console.log(mouse,scrollHeight());
    
})
window.addEventListener('resize',function(){
    canvas.width=event.target.innerWidth;
    canvas.height=scrollHeight();
    init()
})
window.onscroll=function(){
    console.log(event);
    console.log(window.pageYOffset);
}

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