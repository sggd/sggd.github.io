   
        var shortestAngle = function(angle1, angle2) {
            var wrap = function(value,lower,upper) {
                var dist = upper-lower;
                var times = Math.floor((value-lower) / dist);
                return value - (times * dist);
            }
            var diff = angle2-angle1;
            var angle = wrap(diff,0,Math.PI*2);
            //var angle = angle2-angle1; 
            if(angle > Math.PI) {
                angle -= Math.PI*2;
            }
            return angle;
        };
        
// Degrees to radians.
degToRad =  function(deg) {
    return deg * (Math.PI/180);
};

// Radians to degrees.
radToDeg = function(rad) {
     return rad * (180/Math.PI);
};
             /*
   var diff = shortestAngle(angle,ang);
            //angle += Math.sin(shortestAngle(angle,ang) *0.1);
            //angle += ang / 1000;
            vec.rotate(angle);
            angle += diff/100;
            
            ctx.beginPath();
            ctx.moveTo(250,250);
            ctx.lineTo(250 + vec.vx,250 + vec.vy);
            ctx.lineWidth = 3;
            // ctx.lineTo(mx,my);
            
            ctx.font = "bold 16px sans-serif";
            ctx.textBaseline = 'top';
            ctx.fillText(angle + ' ' + diff,0,0);
            ctx.stroke();
  */                
           
