'use client';

import {SidebarProvider} from '@/components/ui/sidebar';
import {FutureDevelopmentToolbar} from '@/components/future-development-toolbar';
import {Canvas} from '@/components/canvas';
import {AnnotationToolbar} from '@/components/toolbar';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {ZoomIn, ZoomOut, Home} from 'lucide-react';

export default function HomePage() {
  const [zoomLevel, setZoomLevel] = useState(100); // Zoom level as percentage

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 10, 200)); // Zoom in, max 200%
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 10, 50)); // Zoom out, min 50%
  };

  const handleCenter = () => {
    setZoomLevel(100); // Reset to 100%
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Canvas zoomLevel={zoomLevel} />
        <AnnotationToolbar/>
        
        <div className="fixed top-0 right-0 h-full">
          <FutureDevelopmentToolbar />
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 right-4 bg-secondary/75 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4"/>
            <span className="sr-only">Zoom In</span>
          </Button>
          <Button variant="outline" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4"/>
            <span className="sr-only">Zoom Out</span>
          </Button>
          <Button variant="outline" size="icon" onClick={handleCenter}>
            <Home className="h-4 w-4"/>
            <span className="sr-only">Center</span>
          </Button>
          <span className="text-sm">{zoomLevel}%</span>
        </div>
      </div>
    </SidebarProvider>
  );
}


    
