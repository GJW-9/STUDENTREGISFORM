const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

function resize(){
    canvas.width =window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);

function launchConfetti(){
    const colors=['#9c88b9','#ffc2db','#b8bdde','#5e3c2f','#287426','#f22300','#ed408b','#ffc340',]
    const pieces= Array.from({length: 987}, ()=>{
        const angle = Math.random()* Math.PI*2;
        const speed = Math.random()*14+2;

        return{
        x: canvas.width/2,
        y: canvas.height/2,
        vx:Math.cos(angle)*speed,
        vy:(Math.sin(angle)*speed-4),
        size:Math.random()*8+4,
        color: colors[Math.floor(Math.random()* colors.length)],
        rot:Math.random()* 360,
        vr:(Math.random()-0.5)*10,
        landed:false}
        
    });
    
    function draw(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        pieces.forEach(p=>{
            if (!p.landed){
                p.vy+=0.3;
                p.x+= p.vx;
                p.y+= p.vy;
                p.rot+= p.vr;
                if(p.y>= canvas.height - p.size){
                    p.y=canvas.height- p.size - Math.random() *40;
                    p.landed= true;
                }
                if(p.x<0|| p.x>canvas.width) p.vx*=1;
            }
           
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot*Math.PI/180);
            ctx.fillStyle=p.color;
            ctx.beginPath();
            ctx.arc(0,0,p.size/ 2,0, Math.PI*2);
            ctx.fill();            
            ctx.restore();
        });
        if(pieces.some(p=> !p.landed))requestAnimationFrame(draw);
    }
    draw();
}
   
