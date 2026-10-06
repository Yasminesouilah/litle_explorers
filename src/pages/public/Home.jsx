import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import Navbar from '../../components/layout/Navbar.jsx';
import Footer from '../../components/layout/Footer.jsx';
import Hero from '../../components/home/Hero.jsx';
import ActivityCategories from '../../components/home/ActivityCategories.jsx';
import AgePrograms from '../../components/home/AgePrograms.jsx';
import VacationBanner from '../../components/home/VacationBanner.jsx';
import Benefits from '../../components/home/Benefits.jsx';
import GalleryPreview from '../../components/home/GalleryPreview.jsx';
import Testimonials from '../../components/home/Testimonials.jsx';
import CallToAction from '../../components/home/CallToAction.jsx';
import RegistrationModal from '../../components/registration/RegistrationModal.jsx';

function Home() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dialog, setDialog] = useState(null);
  const { arabic } = useLanguage();

  const chooseCategory = (name) => {
    setActiveCategory(name);
    document.getElementById('activites')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={arabic ? 'site rtl' : 'site'}>
      <Navbar onRegister={setDialog} />
      <main>
        <Hero arabic={arabic} />
        <AgePrograms onRegister={setDialog} />
        <ActivityCategories activeCategory={activeCategory} onSelect={chooseCategory} />
        <VacationBanner onRegister={setDialog} />
        <Benefits />
        <GalleryPreview onRegister={setDialog} />
        <Testimonials />
        <CallToAction onRegister={setDialog} />
      </main>
      <Footer onRegister={setDialog} />
      <RegistrationModal type={dialog} onClose={() => setDialog(null)} />
    </div>
  );
}

export default Home;
