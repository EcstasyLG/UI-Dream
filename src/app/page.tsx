import {SidebarProvider} from '@/components/ui/sidebar';
import {FutureDevelopmentToolbar} from '@/components/future-development-toolbar';
import {Canvas} from '@/components/canvas';
export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Canvas />
        <FutureDevelopmentToolbar />
      </div>
    </SidebarProvider>
  );
}

