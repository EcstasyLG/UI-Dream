"use client";

import React, { useState, useRef, useEffect } from 'react';

interface CanvasProps {
  zoomLevel: number;
}

export const Canvas: React.FC<CanvasProps> = ({zoomLevel}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    