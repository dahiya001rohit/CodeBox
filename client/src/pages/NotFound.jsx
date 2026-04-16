import NotFoundNav from '../components/notfound/NotFoundNav';
import Terminal404 from '../components/notfound/Terminal404';
import NotFoundActions from '../components/notfound/NotFoundActions';
import NotFoundStatusBar from '../components/notfound/NotFoundStatusBar';

export default function NotFound() {
  return (
    <div style={{
      height: '100%',
      backgroundColor: '#0A0A0A',
      color: '#F2F0EC',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <NotFoundNav />

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}>
        <Terminal404 />
        <NotFoundActions />
      </main>

      <NotFoundStatusBar />
    </div>
  );
}
