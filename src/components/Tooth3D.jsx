import React, { useEffect, useRef, useState } from 'react';

export const Tooth3D = () => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      angle += 0.015;

      // Draw Orbiting Neon Ring 1
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle * 0.8 + rotation.y * 0.01);
      ctx.scale(1, 0.35);
      ctx.beginPath();
      ctx.arc(0, 0, 95, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
      ctx.stroke();
      ctx.restore();

      // Draw Orbiting Neon Ring 2 (Counter-Rotating)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-angle * 1.2 + rotation.x * 0.01);
      ctx.scale(0.4, 1);
      ctx.beginPath();
      ctx.arc(0, 0, 105, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Glowing Back Aura
      const radialGradient = ctx.createRadialGradient(
        centerX, centerY, 10,
        centerX, centerY, 110
      );
      radialGradient.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
      radialGradient.addColorStop(0.5, 'rgba(3, 105, 161, 0.15)');
      radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = radialGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 110, 0, Math.PI * 2);
      ctx.fill();

      // Draw Stylized Dental Tooth 3D Solid Geometry Path
      ctx.save();
      ctx.translate(centerX + rotation.y * 0.15, centerY + rotation.x * 0.15);

      // Tooth Crown Gradient
      const crownGrad = ctx.createLinearGradient(-40, -70, 40, 70);
      crownGrad.addColorStop(0, '#ffffff');
      crownGrad.addColorStop(0.3, '#f0f9ff');
      crownGrad.addColorStop(0.7, '#bae6fd');
      crownGrad.addColorStop(1, '#38bdf8');

      ctx.fillStyle = crownGrad;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.7)';
      ctx.shadowBlur = isHovered ? 30 : 18;

      ctx.beginPath();
      // Crown Top Cusp Left
      ctx.moveTo(-35, -50);
      ctx.bezierCurveTo(-45, -30, -40, 0, -28, 25);
      // Left Root
      ctx.bezierCurveTo(-20, 50, -18, 75, -12, 75);
      ctx.bezierCurveTo(-6, 75, -5, 50, 0, 30);
      // Right Root
      ctx.bezierCurveTo(5, 50, 6, 75, 12, 75);
      ctx.bezierCurveTo(18, 75, 20, 50, 28, 25);
      // Crown Right Cusp
      ctx.bezierCurveTo(40, 0, 45, -30, 35, -50);
      // Top Ridge Curves with Enamel Cusps
      ctx.bezierCurveTo(20, -65, 10, -58, 0, -52);
      ctx.bezierCurveTo(-10, -58, -20, -65, -35, -50);
      ctx.closePath();
      ctx.fill();

      // Metallic Enamel Specular Highlights
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.moveTo(-22, -45);
      ctx.bezierCurveTo(-28, -30, -25, -10, -18, 10);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 4.5;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Secondary Rim Light Edge
      ctx.beginPath();
      ctx.moveTo(25, -40);
      ctx.bezierCurveTo(32, -25, 28, 5, 22, 20);
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.6)';
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Scanning Laser Line
      const scanY = Math.sin(angle * 2) * 55;
      ctx.beginPath();
      ctx.moveTo(-50, scanY);
      ctx.lineTo(50, scanY);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 12;
      ctx.stroke();

      // Laser Contact Node Dots
      ctx.beginPath();
      ctx.arc(0, scanY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotation, isHovered]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotation({ x: y, y: x });
  };

  return (
    <div 
      className="relative flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <canvas 
        ref={canvasRef} 
        width={320} 
        height={260} 
        className="w-full h-auto max-w-[320px] drop-shadow-[0_10px_25px_rgba(2,132,199,0.25)]"
      />
    </div>
  );
};
