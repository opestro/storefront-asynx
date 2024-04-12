import { useEffect, useId } from "react"


export default function AsynxWave(params: any) {
    var id = useId()
    useEffect(() => {
        var c = document.getElementById(id) as HTMLCanvasElement|null;
        if (!c) return;
        
        var w = c.width;
        var h = c.height;
        var u = Math.min(w, h);

        var ctx = c.getContext("2d")!;
        var t = 0;
        var steps = 20;
        function draw() {

            ctx.clearRect(0, 0, w, h);
            ctx.beginPath();
            ctx.lineWidth = 0.1 * u;
            ctx.lineCap = "round";
            ctx.strokeStyle =params.color || getComputedStyle(c!).getPropertyValue('--p');
            ctx.globalAlpha = 0.3

            var padding = params.padding !== undefined?params.padding:0.2;

            var f = (1-padding) * u / 360;
            var o = padding * u / 2
            var y;
            for (var x = 0; x <= 360/steps; x += 1) {
                y = 180.0 - Math.sin(0.75 * x*steps * Math.PI / 180 + t / 100) * 120;
                ctx.lineTo(y * f + o, x*steps * f + o);
            }
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.globalAlpha = 0.85

            for (var x = 0; x <= 360/steps; x += 1) {
                y = 180.0 - Math.cos(0.75 * x*steps * Math.PI / 180 + t / 100) * 120;
                if (x == 0) {
                    ctx.moveTo(y * f + o, x*steps * f + o);
                } else {
                    ctx.lineTo(y * f + o, x*steps * f + o);
                }
            }
            ctx.stroke();
            ctx.closePath();
            t++;
            window.requestAnimationFrame(draw);
        }
        draw()
    })

    return (
        <canvas 
        id={id} width="60" height="60"
        style={{aspectRatio:1}}
        {...params}
        
        ></canvas>
    )
}


