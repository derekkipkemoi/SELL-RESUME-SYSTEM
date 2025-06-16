import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import WhoItsFor from './components/WhoItsFor';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BusinessBenefits from './components/BusinessBenefits';
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import DownloadPage from './components/DownloadPage';
import ContactPage from './components/ContactPage';

interface Package {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: any;
  popular: boolean;
  features: string[];
  limitations: string[];
}

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'checkout' | 'download' | 'contact'>('home');
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  // Check if this is a callback from Paystack
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const reference = urlParams.get('reference');
    
    // If we have Paystack callback parameters, show download page
    if (status && reference) {
      setCurrentView('download');
    }
  }, []);

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
    setCurrentView('checkout');
  };

  const handleBackToHome = () => {
    // Clear URL parameters when going back to home
    window.history.replaceState({}, document.title, window.location.pathname);
    setCurrentView('home');
    setSelectedPackage(null);
  };

  const handleGoToDownload = () => {
    setCurrentView('download');
  };

  const handleGoToContact = () => {
    setCurrentView('contact');
  };

  // If URL has Paystack callback parameters, show download page directly
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('status') && urlParams.get('reference')) {
    return <DownloadPage />;
  }

  if (currentView === 'checkout') {
    return (
      <Checkout 
        selectedPackage={selectedPackage || undefined}
        onBack={handleBackToHome}
        onSuccess={handleGoToDownload}
      />
    );
  }

  if (currentView === 'download') {
    return (
      <DownloadPage />
    );
  }

  if (currentView === 'contact') {
    return (
      <ContactPage onBack={handleBackToHome} />
    );
  }

  return (
    <div className="min-h-screen">
      <Header onContactClick={handleGoToContact} />
      <Hero />
      <section id="problem-solution">
        <ProblemSolution />
      </section>
      <section id="who-its-for">
        <WhoItsFor />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="business-benefits">
        <BusinessBenefits />
      </section>
      <section id="demo">
        <Demo />
      </section>
      <section id="pricing">
        <Pricing onPackageSelect={handlePackageSelect} />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <CallToAction />
      <Footer onContactClick={handleGoToContact} />
    </div>
  );
}

export default App;