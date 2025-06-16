import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Play, ArrowRight, HelpCircle, MessageCircle, Clock, Sparkles, Palette } from 'lucide-react';
import type { FAQ as FAQType } from '../types';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs: FAQType[] = [
    {
      question: 'What packages are available and what\'s included?',
      answer: 'We offer 4 packages: Starter ($199) includes complete MERN stack system for personal projects, Professional ($349) for commercial use with styling services, Agency ($599) for teams with advanced styling services, and Enterprise ($999+) with full resell rights and complete styling service package.'
    },
    {
      question: 'What styling services are included in Professional+ packages?',
      answer: 'Professional package and above include our styling services where we customize your homepage, resume builder interface, and resume templates according to your brand requirements. We handle colors, fonts, layouts, branding elements, and ensure everything matches your business perfectly.'
    },
    {
      question: 'Do I need coding knowledge to set this up?',
      answer: 'Basic technical knowledge is helpful but not required. The complete MERN stack system comes with detailed setup documentation, and for Professional+ packages, we provide styling services to customize everything for you. We also offer optional setup support for $30.'
    },
    {
      question: 'Can I resell this system or use it commercially?',
      answer: 'Yes! Professional, Agency, and Enterprise packages include commercial use rights. You can rebrand it, modify it, offer it as a service, charge users, or even resell the customized version (Enterprise only). This is your business asset to use however you want.'
    },
    {
      question: 'Is the system mobile-friendly and responsive?',
      answer: 'Absolutely! The entire MERN stack system is built mobile-first with responsive design. It works perfectly on desktops, tablets, and smartphones. Your users can create and edit resumes from any device, and our styling services ensure everything looks perfect across all devices.'
    },
    {
      question: 'What technology stack is this built on?',
      answer: 'The system uses the complete MERN stack: MongoDB for database, Express.js for backend API, React/Next.js for frontend, and Node.js for server runtime. This stack is scalable, maintainable, and well-documented. Our styling services work with this technology stack seamlessly.'
    },
    {
      question: 'Will I receive updates and new features?',
      answer: 'Professional includes 6 months of updates, Agency includes 12 months, and Enterprise includes lifetime updates. After that, you can continue using your version indefinitely, or purchase newer versions at a discount. Styling services are included for the duration of your update period.'
    },
    {
      question: 'Can I use my own domain name?',
      answer: 'Yes! The MERN stack system is designed to be deployed on your own hosting with your own domain. You have complete control over branding, URLs, hosting choices, and with our styling services, we ensure everything matches your brand perfectly.'
    },
    {
      question: 'How do the styling services work?',
      answer: 'For Professional+ packages, after purchase, our team will contact you to understand your brand requirements. We\'ll then customize your homepage, resume builder interface, and templates to match your brand colors, fonts, and style preferences. This service is included in your package price.'
    },
    {
      question: 'How many resume templates are included?',
      answer: 'All packages include premium templates, while Professional, Agency, and Enterprise packages include multiple premium templates (Cascade, Crisp, Enfold, etc.) covering different industries and career levels. With our styling services, we can also customize these templates to match your brand.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center overflow-hidden py-20">
      {/* Background decoration - similar to hero */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-medium px-3 py-1.5 rounded-full mb-4 animate-fade-in">
              <Clock className="h-3 w-3 mr-2" />
              <Sparkles className="h-3 w-3 mr-2" />
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse"></span>
              Starting at $199 • Multiple Packages • Professional Styling Services!
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-slide-up">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Questions
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 animate-slide-up delay-200">
              <span className="font-semibold text-gray-900">Everything you need to know</span>{' '}
              about owning your AI-powered MERN stack resume builder business with professional styling services and getting started with our packages.
            </p>

            {/* Quick benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 animate-slide-up delay-300">
              {['4 Packages Available', 'MERN Stack', 'Professional Styling Services'].map((benefit, index) => (
                <div key={benefit} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Price Display */}
            <div className="mb-6 animate-slide-up delay-350">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                Starting at $199
                <span className="text-lg text-blue-600 ml-2 font-medium">4 Packages Available</span>
              </div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
                <Palette className="h-3 w-3 mr-2" />
                From Personal to Enterprise • Professional Styling Services
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slide-up delay-400">
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  View All Packages
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              
              <button className="group flex items-center justify-center bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                <MessageCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Contact Support
              </button>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative animate-slide-up delay-500">
            {/* FAQ Preview Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">Quick Answers</h3>
                    <HelpCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  
                  {/* Featured FAQ */}
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Package options?</span>
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600">4 packages: $199 to $999+</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">MERN Stack?</span>
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600">Complete frontend + backend system</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Styling services?</span>
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600">Yes! Professional+ packages</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-sm text-green-800 font-medium text-center">
                      10 Detailed FAQs Below
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce">
              MERN Stack!
            </div>
            <div className="absolute -bottom-3 -left-3 bg-purple-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
              Styling Services
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group-hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900 pr-4 group-hover:text-gray-800">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Still Have Questions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              We're here to help you make the right decision for your MERN stack business and styling needs
            </p>
            
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Support
              </button>
              <button className="w-full border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                Schedule Demo Call
              </button>
            </div>
          </div>

          {/* Quick Start */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Ready To{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Start?
              </span>
            </h3>
            <p className="text-blue-100 mb-6 text-sm">
              Get instant access to the complete MERN stack system with professional styling services
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">Starter Package</span>
                <span className="text-white font-semibold">$199</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">Professional (Popular)</span>
                <span className="text-blue-300 font-semibold">$349</span>
              </div>
              <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                <span className="text-white font-semibold">Enterprise</span>
                <span className="text-green-400 font-bold">$999+</span>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              View All Packages
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Section - Trust & Reassurance */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Confident In Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Decision?
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              Join 1,200+ entrepreneurs who chose ownership over subscriptions with professional styling services
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$199</div>
                <div className="text-sm text-gray-600">Starting price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">MERN</div>
                <div className="text-sm text-gray-600">Complete stack</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Download access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Pro</div>
                <div className="text-sm text-gray-600">Styling services</div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
            >
              Get Started Today - Starting at $199
            </button>
            
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✅ Secure payment</span>
              <span>✅ Instant download</span>
              <span>✅ MERN stack</span>
              <span>✅ Professional styling services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;