"use client";

import React from 'react';
import {Button} from "@/components/ui/button";
import {ImageIcon, Sparkles, Film, Component } from "lucide-react";

export const FutureDevelopmentToolbar: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 border-l border-border">
      <h2 className="text-sm font-semibold mb-2">AI Tools</h2>
      <Button variant="ghost" size="icon" className="mb-2">
        <Sparkles className="h-5 w-5"/>
        <span className="sr-only">Image Generation (Coming Soon)</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <Film className="h-5 w-5"/>
        <span className="sr-only">Animation Generation (Coming Soon)</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <Component className="h-5 w-5"/>
        <span className="sr-only">3D Generation (Coming Soon)</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <ImageIcon className="h-5 w-5"/>
        <span className="sr-only">User Library (Coming Soon)</span>
      </Button>
    </div>
  );
};

