
import {SidebarProvider} from '@/components/ui/sidebar';
import {FutureDevelopmentToolbar} from '@/components/future-development-toolbar';
import {Canvas} from '@/components/canvas';
import {AnnotationToolbar} from '@/components/toolbar';

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AnnotationToolbar/>
        <Canvas />
        <div className="fixed top-0 right-0 h-full">
          <FutureDevelopmentToolbar />
        </div>
      </div>
    </SidebarProvider>
  );
}
