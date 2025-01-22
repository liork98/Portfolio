import React, { useEffect, useRef } from "react";
import "../styles/PortfolioStyles.css";

const WaveBackground = () => {
    const canvasRef = useRef(null);
    let animationFrameId;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let increment = 0;

        const drawWave = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
            ctx.beginPath();

            let amplitude = 10;
            let frequency = 0.005;
            let yOffset = height / 3;

            for (let x = 0; x < width; x++) {
                let y = amplitude * Math.sin(frequency * x + increment) + yOffset;
                ctx.lineTo(x, y);
            }

            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();

            increment += 0.05;
            animationFrameId = requestAnimationFrame(drawWave);
        };

        drawWave();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return <canvas className="wave-canvas" ref={canvasRef} />;
};

export default WaveBackground;
