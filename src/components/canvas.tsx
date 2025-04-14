"use client";

import React, { useState, useRef, useEffect } from 'react';
import { AnnotationToolbar } from './toolbar'; // Import the AnnotationToolbar component

export const Canvas: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string>('select');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Example: Drawing a rectangle when the rectangle tool is selected
    if (selectedTool === 'rectangle' && isDrawing) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
      ctx.fillStyle = 'blue';
      ctx.fillRect(startPosition.x, startPosition.y, 100, 50); // Example dimensions
    }
  }, [selectedTool, isDrawing, startPosition]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setStartPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleToolChange = (tool: string) => {
    setSelectedTool(tool);
  };

  return (
    
      
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="flex-grow bg-background cursor-crosshair"
          style={{ border: '1px solid #000' }} // Basic border for visibility
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      
    
  );
};
