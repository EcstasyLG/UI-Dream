'use client';

import {SidebarProvider} from '@/components/ui/sidebar';
import {FutureDevelopmentToolbar} from '@/components/future-development-toolbar';
import {Canvas} from '@/components/canvas';
import {useState, useRef, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {ZoomIn, ZoomOut, Home} from 'lucide-react';
import {AnnotationToolbar} from '@/components/toolbar';

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

  const [selectedTool, setSelectedTool] = useState<string>('select');

  const handleToolChange = (tool: string) => {
    setSelectedTool(tool);
    console.log(`Selected tool: ${tool}`);
  };

  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen w-full">
        {/* Header */}
        <header className="flex items-center justify-between h-14 bg-secondary/75 backdrop-blur-sm text-sm font-medium border-b border-border px-4">
          <div className="flex items-center">
            <span className="font-bold">Firebase Studio App</span>
          </div>
          <nav className="flex items-center space-x-4 justify-center">
            {/* Centered Navigation Links */}
            <a href="#" className="hover:underline">File</a>
            <a href="#" className="hover:underline">Edit</a>
            <a href="#" className="hover:underline">View</a>
          </nav>
          <div>
            {/* User Icon Placeholder */}
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="sr-only">User</span>
            </Button>
          </div>
        </header>

        <div className="flex flex-grow">
          {/* Annotation Toolbar on the Left */}
          <AnnotationToolbar onToolChange={handleToolChange} />

          {/* Canvas occupies the center */}
          <div ref={canvasRef} className="flex-grow overflow-auto">
            <Canvas zoomLevel={zoomLevel} />
          </div>

          {/* Future Development Toolbar on the Right */}
          <FutureDevelopmentToolbar />
        </div>
      </div>
    </SidebarProvider>
  );
}
