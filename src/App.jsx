import './styles/globals.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import HookSection from './components/sections/HookSection';
import FrameworkSection from './components/sections/FrameworkSection';
import Mechanism1Section from './components/sections/Mechanism1Section';
import Mechanism2Section from './components/sections/Mechanism2Section';
import Mechanism3Section from './components/sections/Mechanism3Section';
import CaseBDSSection from './components/sections/CaseBDSSection';
import LaborSection from './components/sections/LaborSection';
import ShippingSection from './components/sections/ShippingSection';
import SVBSection from './components/sections/SVBSection';
import Crisis2008Section from './components/sections/Crisis2008Section';
import ConclusionSection from './components/sections/ConclusionSection';
import TeamSection from './components/sections/TeamSection';
import TeamJourneySection from './components/sections/TeamJourneySection';

export default function App() {
  return (
    <>
      <NavBar />
      <main className="pt-[52px]">
        <HeroSection />
        <TeamSection />
        <HookSection />
        <FrameworkSection />
        <Mechanism1Section />
        <Mechanism2Section />
        <Mechanism3Section />
        <CaseBDSSection />
        <LaborSection />
        <ShippingSection />
        <SVBSection />
        <Crisis2008Section />
        <ConclusionSection />
        <TeamJourneySection />
      </main>
      <Footer />
    </>
  );
}
