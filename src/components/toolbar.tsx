"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  MousePointerIcon,
  Rectangle as RectangleIcon,
  Circle,
  ArrowRight,
  PencilIcon,
  ImageIcon,
  TextIcon
} from "lucide-react";

interface ToolBarProps {
  onToolChange: (tool: string) => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({ onToolChange }) => {
  return (
    <div className="flex flex-col items-center p-4 border-r border-border">
      <h2 className="text-sm font-semibold mb-2">Annotation Tools</h2>
      <Button variant="ghost" size="icon" className="mb-2" onClick={() => onToolChange('select')}>
        <MousePointerIcon className="h-5 w-5" />
        <span className="sr-only">Select</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2" onClick={() => onToolChange('rectangle')}>
        <RectangleIcon className="h-5 w-5" />
        <span className="sr-only">Rectangle</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2" onClick={() => onToolChange('circle')}>
        <Circle className="h-5 w-5" />
        <span className="sr-only">Circle</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2" onClick={() => onToolChange('arrow')}>
        <ArrowRight className="h-5 w-5" />
        <span className="sr-only">Arrow</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2" onClick={() => onToolChange('pencil')}>
        <PencilIcon className="h-5 w-5" />
        <span className="sr-only">Pencil</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2" onClick={() => onToolChange('text')}>
        <TextIcon className="h-5 w-5" />
        <span className="sr-only">Text</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2" onClick={() => onToolChange('image')}>
        <ImageIcon className="h-5 w-5" />
        <span className="sr-only">Image</span>
      </Button>
    </div>
  );
};
