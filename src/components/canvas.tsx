"use client";

import React, { useState, useRef, useEffect } from 'react';

interface CanvasProps {
  zoomLevel: number;
  selectedTool: string;
}

export const Canvas: React.FC<CanvasProps> = ({zoomLevel, selectedTool}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save the current transformation matrix
    ctx.save();

    // Apply zoom transformation
    ctx.scale(zoomLevel / 100, zoomLevel / 100);

    // Draw a rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 50);

    // Restore the transformation matrix
    ctx.restore();
  }, [zoomLevel]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let scaleFactor = zoomLevel / 100;

    const startDrawing = (e: MouseEvent) => {
      if (selectedTool === 'pencil') {
        setDrawing(true);
        lastPosition.current = {
          x: e.offsetX / scaleFactor,
          y: e.offsetY / scaleFactor
        };
      }
    };

    const draw = (e: MouseEvent) => {
      if (!drawing || selectedTool !== 'pencil') return;

      ctx.beginPath();
      ctx.moveTo(lastPosition.current.x, lastPosition.current.y);
      ctx.lineTo(e.offsetX / scaleFactor, e.offsetY / scaleFactor);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.stroke();
      lastPosition.current = {
        x: e.offsetX / scaleFactor,
        y: e.offsetY / scaleFactor
      };
    };

    const stopDrawing = () => {
      setDrawing(false);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [selectedTool, zoomLevel, drawing]);

  return (
    
      
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="flex-grow bg-background cursor-crosshair"
          style={{ border: '1px solid #000' }} // Basic border for visibility
        />
      
    
  );
};
