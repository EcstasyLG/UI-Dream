"use client";

import React from 'react';
import {Button} from "@/components/ui/button";
import {ImageIcon, Lightbulb, MapPinIcon, Sparkles} from "lucide-react";

export const FutureDevelopmentToolbar: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 border-l border-border">
      <h2 className="text-sm font-semibold mb-2">Future Tools</h2>
      <Button variant="ghost" size="icon" className="mb-2">
        <Sparkles className="h-5 w-5"/>
        <span className="sr-only">AI Tools (Coming Soon)</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <ImageIcon className="h-5 w-5"/>
        <span className="sr-only">Library (Coming Soon)</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <MapPinIcon className="h-5 w-5"/>
        <span className="sr-only">Other Canvas (Coming Soon)</span>
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <Lightbulb className="h-5 w-5"/>
        <span className="sr-only">Inspiration (Coming Soon)</span>
      </Button>
    </div>
  );
};
