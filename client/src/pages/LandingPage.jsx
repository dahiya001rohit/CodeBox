import AnnouncementBanner from '../components/common/AnnouncementBanner';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import CoreInfrastructure from '../components/landing/CoreInfrastructure';
import FeatureCards from '../components/landing/FeatureCards';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '100%',
      backgroundColor: '#0A0A0A',
      color: '#F2F0EC',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <AnnouncementBanner />
      <Navbar />
      <main style={{ paddingTop: '96px', flex: 1 }}>
        <Hero />
        <HowItWorks />
        <CoreInfrastructure />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
}
