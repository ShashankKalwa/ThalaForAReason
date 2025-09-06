import { useEffect, useRef } from 'react';

const NeonCursor = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const config = {
            shaderPoints: 16,
            radius1: 5,
        };

        let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
        let points = [];

        // Create initial points for the trail
        for (let i = 0; i < config.shaderPoints; i++) {
            points.push({ x: mouse.x, y: mouse.y });
        }

        // Main drawing function
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            points.push({ x: mouse.x, y: mouse.y });
            points.shift();

            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }

            ctx.strokeStyle = `hsl(${(performance.now() / 10) % 360}, 100%, 50%)`;
            ctx.lineWidth = config.radius1;
            ctx.stroke();
        };

        const animate = () => {
            draw();
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        document.addEventListener('mousemove', handleMouseMove);
        animate();

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return <canvas ref={canvasRef} id="neon-cursor-canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000, pointerEvents: 'none' }} />;
};

export default NeonCursor;
