'use client';

import {SidebarProvider} from '@/components/ui/sidebar';
import {FutureDevelopmentToolbar} from '@/components/future-development-toolbar';
import {Canvas} from '@/components/canvas';
import {AnnotationToolbar} from '@/components/toolbar';
import {useState, useRef, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {ZoomIn, ZoomOut, Home} from 'lucide-react';

export default function HomePage() {
  const [zoomLevel, setZoomLevel] = useState(100); // Zoom level as percentage
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasPosition, setCanvasPosition] = useState({x: 0, y: 0});

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 10, 200)); // Zoom in, max 200%
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 10, 50)); // Zoom out, min 50%
  };

  const handleCenter = () => {
    setZoomLevel(100); // Reset to 100%
    setCanvasPosition({x: 0, y: 0}); // Reset canvas position
  };

  // Update canvas position based on scroll
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const updatePosition = () => {
      setCanvasPosition({
        x: canvasElement.scrollLeft,
        y: canvasElement.scrollTop,
      });
    };

    canvasElement.addEventListener('scroll', updatePosition);
    updatePosition(); // Initial update

    return () => {
      canvasElement.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Annotation Toolbar on the Left */}
        <AnnotationToolbar/>

        {/* Canvas occupies the center */}
        <div ref={canvasRef} className="flex-grow overflow-auto">
          <Canvas zoomLevel={zoomLevel} />
        </div>

        {/* Future Development Toolbar on the Right */}
        <div className="fixed top-0 right-0 h-full">
          <FutureDevelopmentToolbar />
        </div>

        {/* Zoom Controls and Minimap on the Bottom Right */}
        <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-2 bg-secondary/75 backdrop-blur-sm rounded-lg p-2">
          {/* Minimap */}
          <div className="bg-secondary/75 backdrop-blur-sm rounded-lg p-2 w-32 h-24">
            <div className="text-xs text-white/80">Canvas Position</div>
            <div className="text-xs text-white/60">
              X: {canvasPosition.x}, Y: {canvasPosition.y}
            </div>
            {/* Placeholder for actual minimap */}
            <div className="bg-gray-500 h-16 mt-1 rounded"></div>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center space-x-2">
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
      </div>
    </SidebarProvider>
  );
}
