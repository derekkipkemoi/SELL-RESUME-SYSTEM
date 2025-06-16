import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, Check, Play, ArrowRight, ChevronLeft, ChevronRight, Clock, Sparkles, Palette } from 'lucide-react';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Freelance Career Coach',
      company: 'Singapore',
      content: 'I launched my resume building service in just 48 hours! The code is clean, the templates are professional, and the styling customization features let me brand everything perfectly. My clients love the user experience. I\'ve already served over 150 clients and made back my investment 10 times over. The AI features are a game-changer!',
      avatar: ''
    },
    {
      name: 'Marcus Johnson',
      role: 'Digital Entrepreneur',
      company: 'Lagos, Nigeria',
      content: 'This system is a goldmine! I customized it for the Nigerian job market using the styling tools and now serve over 500 job seekers monthly. The scalability is incredible - from a side hustle to a full business in 6 months. Revenue hit $8k last month! The styling control made all the difference.',
      avatar: ''
    },
    {
      name: 'Priya Sharma',
      role: 'HR Consultant',
      company: 'Mumbai, India',
      content: 'Way more affordable than building from scratch! I added this to my HR consulting services and used the styling features to match my brand perfectly. It\'s become my most popular offering. The templates are ATS-friendly and my clients land more interviews. ROI was 400% in first quarter.',
      avatar: ''
    },
    {
      name: 'David Rodriguez',
      role: 'SaaS Founder',
      company: 'Barcelona, Spain',
      content: 'Saved me 6 months of development time! The codebase is well-structured and the AI integration is seamless. The styling customization suite allowed me to create a unique brand experience. I\'ve already onboarded 200+ users and the feedback is outstanding. This was the best $349 I\'ve ever spent.',
      avatar: ''
    },
    {
      name: 'Emma Thompson',
      role: 'Career Services Director',
      company: 'London, UK',
      content: 'Our university career center deployed this for 5,000+ students. The response has been phenomenal! Students create professional resumes in minutes instead of hours. The styling options let us maintain our university branding. We\'ve seen a 60% increase in job placement rates.',
      avatar: ''
    },
    {
      name: 'Ahmed Hassan',
      role: 'Recruitment Agency Owner',
      company: 'Dubai, UAE',
      content: 'Transformed our business model completely! We now offer resume building as a premium service to candidates. The white-label styling features are perfect for our brand. Generated $15k additional revenue in the first month alone. The customization options are incredible.',
      avatar: ''
    },
    {
      name: 'Lisa Wang',
      role: 'Freelance Designer',
      company: 'Toronto, Canada',
      content: 'As a designer, I was skeptical about the templates, but they\'re actually really well-designed! The styling customization tools are powerful and intuitive. I\'ve customized them for my brand and now offer resume design as a service. Earning $3k/month extra income.',
      avatar: ''
    },
    {
      name: 'Carlos Mendoza',
      role: 'Business Coach',
      company: 'Mexico City, Mexico',
      content: 'My coaching clients needed professional resumes, and this solved that perfectly! The AI content generation helps non-native English speakers create compelling resumes. The styling features let me customize everything to match my coaching brand. Client satisfaction increased by 80%.',
      avatar: ''
    }
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, maxIndex]);

  const goToPrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center overflow-hidden py-16 sm:py-20">
      {/* Background decoration - similar to hero */}
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
              <span className="hidden sm:inline">Starting at $199 • Multiple Packages • Professional Styling Services!</span>
              <span className="sm:hidden">Starting at $199 • 4 Packages!</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight animate-slide-up">
              Success Stories From{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Around The World
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 animate-slide-up delay-200 leading-relaxed">
              <span className="font-semibold text-gray-900">Join entrepreneurs in 50+ countries</span>{' '}
              who are building profitable resume businesses and changing lives with our AI-powered system and professional styling services.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-4 sm:mb-6 animate-slide-up delay-300">
              {['1,200+ Customers', '50+ Countries', 'Professional Styling Services'].map((stat, index) => (
                <div key={stat} className="flex items-center">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1 sm:mr-2" />
                  <span className="text-gray-700 font-medium text-xs sm:text-sm">{stat}</span>
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
                  Join Them - View Packages
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection('#demo')}
                className="group flex items-center justify-center bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
              >
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2 group-hover:scale-110 transition-transform" />
                See Their Results
              </button>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative animate-slide-up delay-500 mt-8 lg:mt-0">
            {/* Featured Testimonial Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Featured Success</h3>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {testimonials[0].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{testimonials[0].name}</div>
                      <div className="text-xs text-gray-600 truncate">{testimonials[0].role}</div>
                      <div className="text-xs text-blue-600 truncate">{testimonials[0].company}</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <Quote className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 mb-1 sm:mb-2" />
                    <p className="text-gray-700 text-xs leading-relaxed line-clamp-3">
                      "{testimonials[0].content.slice(0, 120)}..."
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-2 sm:p-3 border border-green-200">
                    <p className="text-xs sm:text-sm text-green-800 font-medium text-center">
                      10x ROI + Perfect Branding
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-green-500 text-white px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium animate-bounce">
              50 Reviews!
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-purple-500 text-white px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
              Styling Services
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Customers Say
              </span>
            </h3>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-2 justify-center sm:justify-end">
              <button
                onClick={goToPrevious}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
              </button>
              <button
                onClick={goToNext}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-2 sm:px-3 ${
                    itemsPerView === 1 ? 'w-full' : 
                    itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative h-full flex flex-col">
                    {/* Quote icon */}
                    <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Quote className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>

                    <div className="pt-3 sm:pt-4 flex flex-col h-full">
                      {/* Stars */}
                      <div className="flex space-x-1 mb-3 sm:mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm group-hover:text-gray-900 flex-grow line-clamp-4 sm:line-clamp-none">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center mt-auto">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-gray-900 group-hover:text-gray-800 text-xs sm:text-sm truncate">{testimonial.name}</div>
                          <div className="text-xs sm:text-sm text-gray-600 truncate">{testimonial.role}</div>
                          <div className="text-xs sm:text-sm text-blue-600 truncate">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoScrolling(false);
                  setTimeout(() => setIsAutoScrolling(true), 5000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof Numbers */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Global Metrics */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Global Impact Metrics
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-xs sm:text-sm">Customers worldwide</span>
                <span className="text-blue-600 font-bold text-sm sm:text-lg">1,200+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-xs sm:text-sm">Countries served</span>
                <span className="text-teal-600 font-bold text-sm sm:text-lg">50+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-xs sm:text-sm">Resumes created</span>
                <span className="text-purple-600 font-bold text-sm sm:text-lg">100k+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-xs sm:text-sm">Revenue generated</span>
                <span className="text-green-600 font-bold text-sm sm:text-lg">$4.2m+</span>
              </div>
              <div className="border-t pt-3 sm:pt-4 flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-xs sm:text-sm">Customer rating</span>
                <div className="flex items-center">
                  <span className="text-yellow-600 font-bold text-sm sm:text-lg mr-1">4.9</span>
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Success CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 sm:p-6 text-white">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Ready To{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Succeed?
              </span>
            </h3>
            <p className="text-blue-100 mb-4 sm:mb-6 text-xs sm:text-sm">
              Join successful entrepreneurs building profitable resume businesses with professional styling services
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-xs sm:text-sm">Complete system</span>
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-xs sm:text-sm">AI-powered features</span>
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-xs sm:text-sm">Professional styling services</span>
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-xs sm:text-sm">Lifetime ownership</span>
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group text-sm sm:text-base"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Section - Join CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Become The Next{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Success Story
              </span>
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Choose from 4 packages • Lifetime ownership • Global opportunity • Professional styling services
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">24hrs</div>
                <div className="text-xs sm:text-sm text-gray-600">Average launch time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">600%</div>
                <div className="text-xs sm:text-sm text-gray-600">Average ROI (3 months)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">4</div>
                <div className="text-xs sm:text-sm text-gray-600">Package options</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1 sm:mb-2">$199</div>
                <div className="text-xs sm:text-sm text-gray-600">Starting price</div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base lg:text-lg"
            >
              Join Them Today - Starting at $199
            </button>
            
            <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <span>✅ Instant access</span>
              <span>✅ Global community</span>
              <span>✅ AI-powered system</span>
              <span>✅ Professional styling services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;