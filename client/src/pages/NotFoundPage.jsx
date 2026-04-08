import NotFoundNav from '../components/notfound/NotFoundNav';
import Terminal404 from '../components/notfound/Terminal404';
import NotFoundActions from '../components/notfound/NotFoundActions';
import NotFoundStatusBar from '../components/notfound/NotFoundStatusBar';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col overflow-hidden h-screen bg-[#131313] text-inverse-surface">
      <NotFoundNav />
      <main className="flex-grow flex flex-col items-center justify-center p-6 mt-16 mb-8">
        <Terminal404 />
        <NotFoundActions />
      </main>
      <NotFoundStatusBar />
    </div>
  );
}
