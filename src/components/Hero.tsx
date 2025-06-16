import React from 'react';
import { Play, Check, Clock, Sparkles, ArrowRight, Star, Zap, Shield, Brain, Palette, Brush, Settings } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bannerItems = [
    { icon: Clock, text: 'Limited Time Offer', highlight: true },
    { icon: Sparkles, text: 'Starting at $199', highlight: true },
    { icon: Star, text: 'Multiple Packages Available', highlight: false },
    { icon: Shield, text: 'Lifetime Ownership', highlight: false },
    { icon: Zap, text: 'Instant Access', highlight: false },
    { text: 'From $199 to $999+', highlight: true },
    { icon: Check, text: 'No Monthly Fees', highlight: false },
    { text: 'Complete Source Code', highlight: false },
    { icon: Star, text: '1,200+ Happy Customers', highlight: false },
    { icon: Palette, text: 'Professional Styling Services', highlight: true },
    { text: 'Choose Your Package!', highlight: true }
  ];

  return (
    <>
      {/* Scrolling Banner */}
      <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white overflow-hidden shadow-lg">
        <div className="relative h-10 sm:h-12 flex items-center">
          {/* Scrolling content - seamless loop */}
          <div className="flex animate-scroll">
            {/* First set of items */}
            <div className="flex items-center whitespace-nowrap">
              {bannerItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={`first-${index}`} className="flex items-center mx-3 sm:mx-6">
                    {IconComponent && (
                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-yellow-300" />
                    )}
                    <span className={`text-xs sm:text-sm font-medium ${
                      item.highlight 
                        ? 'text-yellow-300 font-bold' 
                        : 'text-white'
                    }`}>
                      {item.text}
                    </span>
                    {item.highlight && (
                      <span className="ml-1 sm:ml-2 text-yellow-300">✨</span>
                    )}
                  </div>
                );
              })}
              {/* CTA Button in the scroll */}
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="mx-4 sm:mx-8 bg-white hover:bg-yellow-50 text-red-600 font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs transition-all duration-300 hover:scale-105 shadow-lg flex items-center"
              >
                View Packages
                <ArrowRight className="ml-1 h-2 w-2 sm:h-3 sm:w-3" />
              </button>
            </div>
            
            {/* Second set of items for seamless loop */}
            <div className="flex items-center whitespace-nowrap">
              {bannerItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={`second-${index}`} className="flex items-center mx-3 sm:mx-6">
                    {IconComponent && (
                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-yellow-300" />
                    )}
                    <span className={`text-xs sm:text-sm font-medium ${
                      item.highlight 
                        ? 'text-yellow-300 font-bold' 
                        : 'text-white'
                    }`}>
                      {item.text}
                    </span>
                    {item.highlight && (
                      <span className="ml-1 sm:ml-2 text-yellow-300">✨</span>
                    )}
                  </div>
                );
              })}
              {/* CTA Button in the scroll */}
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="mx-4 sm:mx-8 bg-white hover:bg-yellow-50 text-red-600 font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs transition-all duration-300 hover:scale-105 shadow-lg flex items-center"
              >
                View Packages
                <ArrowRight className="ml-1 h-2 w-2 sm:h-3 sm:w-3" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Gradient edges for fade effect */}
        <div className="absolute top-0 left-0 w-10 sm:w-20 h-full bg-gradient-to-r from-red-600 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-10 sm:w-20 h-full bg-gradient-to-l from-red-600 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center overflow-hidden py-16 sm:py-20 pt-28 sm:pt-32 md:pt-36">
        {/* Background decoration - consistent with other sections */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content - Left Side */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 animate-fade-in">
                <Clock className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2" />
                <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-600 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                <span className="hidden sm:inline">Multiple Packages • Starting at $199 • Professional Styling Services!</span>
                <span className="sm:hidden">Starting at $199 • 4 Packages!</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight animate-slide-up">
                Launch Your Own{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  AI-Powered Resume
                </span>{' '}
                Builder Business
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 animate-slide-up delay-200 leading-relaxed">
                <span className="font-semibold text-gray-900">Choose from 4 packages starting at $199.</span>{' '}
                No subscriptions. No limits. A complete AI-powered system with premium templates and professional styling services.
              </p>

              {/* Quick benefits */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-4 sm:mb-6 animate-slide-up delay-300">
                {['AI-Powered', 'Professional Styling Services', 'Multiple Packages'].map((benefit, index) => (
                  <div key={benefit} className="flex items-center">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1 sm:mr-2" />
                    <span className="text-gray-700 font-medium text-xs sm:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Price Display */}
              <div className="mb-4 sm:mb-6 animate-slide-up delay-350">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
                  Starting at $199
                  <span className="text-sm sm:text-base lg:text-lg text-blue-600 ml-2 font-medium block sm:inline">4 Packages Available</span>
                </div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  <Palette className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">From Personal to Enterprise • Professional Styling Services</span>
                  <span className="sm:hidden">Personal to Enterprise</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start animate-slide-up delay-400">
                <button 
                  onClick={() => scrollToSection('#pricing')}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center">
                    View All Packages
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('#demo')}
                  className="group flex items-center justify-center bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                >
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2 group-hover:scale-110 transition-transform" />
                  View Demo
                </button>
              </div>
            </div>

            {/* Visual - Right Side */}
            <div className="relative animate-slide-up delay-500 mt-8 lg:mt-0">
              {/* Main Product Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-3 sm:p-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Package Options</h3>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Package options */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                        <span className="text-xs sm:text-sm font-medium text-gray-900">Starter Package</span>
                        <span className="text-green-600 font-bold text-xs sm:text-sm">$199</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 shadow-sm border-2 border-blue-300">
                        <span className="text-xs sm:text-sm font-medium text-gray-900">Professional (Popular)</span>
                        <span className="text-blue-600 font-bold text-xs sm:text-sm">$349</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                        <span className="text-xs sm:text-sm font-medium text-gray-900">Agency Package</span>
                        <span className="text-purple-600 font-bold text-xs sm:text-sm">$599</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                        <span className="text-xs sm:text-sm font-medium text-gray-900">Enterprise</span>
                        <span className="text-orange-600 font-bold text-xs sm:text-sm">$999+</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-2 sm:p-3 text-white text-center">
                      <div className="text-sm sm:text-lg font-bold mb-1">Choose Your Perfect Fit</div>
                      <div className="text-xs text-green-100">From Personal to Enterprise • Professional Styling Services</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-green-500 text-white px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium animate-bounce">
                4 Packages!
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-purple-500 text-white px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
                Styling Services
              </div>
            </div>
          </div>

          {/* Styling Services Highlight */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 sm:p-8 text-white">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                <Palette className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-300" />
                <span className="text-xs sm:text-sm font-medium">Professional+ Styling Services</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                We'll Style & Customize{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Everything For You
                </span>
              </h3>
              <p className="text-purple-100 max-w-2xl mx-auto text-sm sm:text-base">
                Professional package and above include our styling services - we'll customize your platform to match your brand perfectly
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Homepage Styling Service</h4>
                <p className="text-xs sm:text-sm text-purple-200">We'll customize your homepage colors, fonts, layouts, and branding to match your business</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Brush className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Resume Builder Styling Service</h4>
                <p className="text-xs sm:text-sm text-purple-200">We'll style your resume builder interface to provide the perfect user experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Template Customization Service</h4>
                <p className="text-xs sm:text-sm text-purple-200">We'll customize resume templates according to your specific requirements</p>
              </div>
            </div>
          </div>

          {/* Quick Value Props */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { 
                value: '$199', 
                description: 'Starting price for complete system',
                gradient: 'from-green-400 to-emerald-400',
                bg: 'bg-green-50'
              },
              { 
                value: '4', 
                description: 'Package options to choose from',
                gradient: 'from-blue-400 to-cyan-400',
                bg: 'bg-blue-50'
              },
              { 
                value: '24hrs', 
                description: 'Average setup time to launch',
                gradient: 'from-purple-400 to-pink-400',
                bg: 'bg-purple-50'
              },
              { 
                value: 'Pro', 
                description: 'Styling services included',
                gradient: 'from-violet-400 to-purple-400',
                bg: 'bg-violet-50'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group ${item.bg} rounded-2xl p-4 sm:p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                  {item.value}
                </div>
                <div className="text-gray-600 group-hover:text-gray-700 text-xs sm:text-sm">{item.description}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Success Metrics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Trusted Worldwide
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs sm:text-sm">Successful customers</span>
                  <span className="text-blue-600 font-bold text-sm sm:text-base">1,200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs sm:text-sm">Countries served</span>
                  <span className="text-teal-600 font-bold text-sm sm:text-base">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs sm:text-sm">Revenue generated</span>
                  <span className="text-green-600 font-bold text-sm sm:text-base">$4.2m+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs sm:text-sm">Customer rating</span>
                  <div className="flex items-center">
                    <span className="text-yellow-600 font-bold text-sm sm:text-base mr-1">4.9</span>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package Options */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Package{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Options
                </span>
              </h3>
              <p className="text-blue-100 mb-4 sm:mb-6 text-xs sm:text-sm">
                Choose the perfect package for your business needs and styling requirements
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-xs sm:text-sm">Starter (Personal)</span>
                  <span className="text-white font-semibold text-sm sm:text-base">$199</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-xs sm:text-sm">Professional (Popular)</span>
                  <span className="text-white font-semibold text-sm sm:text-base">$349</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-xs sm:text-sm">Agency (Business)</span>
                  <span className="text-white font-semibold text-sm sm:text-base">$599</span>
                </div>
                <div className="border-t border-white/20 pt-3 sm:pt-4 flex justify-between items-center">
                  <span className="text-white font-semibold text-xs sm:text-sm">Enterprise</span>
                  <span className="text-green-400 font-bold text-sm sm:text-base">$999+</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group text-sm sm:text-base"
              >
                Compare All Packages
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Bottom Section - Final Push */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Don't Miss This{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Opportunity
                </span>
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Join entrepreneurs building profitable AI-powered resume businesses with professional styling services
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">$199</div>
                  <div className="text-xs sm:text-sm text-gray-600">Starting price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">4</div>
                  <div className="text-xs sm:text-sm text-gray-600">Package options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">Premium</div>
                  <div className="text-xs sm:text-sm text-gray-600">Templates included</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-2xl sm:text-3xl font-bold text-violet-600 mb-1 sm:mb-2">
                    <Palette className="w-6 h-6 sm:w-8 sm:h-8 mr-1" />
                    Pro
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Styling services</div>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base lg:text-lg"
              >
                Choose Your Package Today
              </button>
              
              <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <span>✅ Secure payment</span>
                <span>✅ Instant download</span>
                <span>✅ AI-powered</span>
                <span>✅ Professional styling services</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;