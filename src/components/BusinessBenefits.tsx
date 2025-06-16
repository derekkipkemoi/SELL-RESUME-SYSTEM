import React from 'react';
import { DollarSign, Globe, Puzzle, TrendingUp, Wrench, Users, Check, Play, ArrowRight, Star, Clock, Sparkles, Palette, Brush, Settings } from 'lucide-react';
import type { Benefit } from '../types';

const BusinessBenefits: React.FC = () => {
  const benefits: Benefit[] = [
    {
      icon: 'DollarSign',
      title: 'Lifetime Ownership',
      description: 'Pay once, own forever. No recurring costs, no subscription fees, no vendor lock-in. Your business, your rules.'
    },
    {
      icon: 'Globe',
      title: 'Serve Unlimited Users',
      description: 'No user limits or usage restrictions. Scale to serve thousands of job seekers worldwide without additional costs.'
    },
    {
      icon: 'Puzzle',
      title: 'Full Styling Control',
      description: 'Professional+ packages include complete styling customization for homepage, resume builder, and templates.'
    },
    {
      icon: 'TrendingUp',
      title: 'Multiple Revenue Streams',
      description: 'Charge per resume, offer premium templates, provide consulting services, or turn it into a full SaaS platform.'
    },
    {
      icon: 'Wrench',
      title: 'Easy To Extend',
      description: 'Built with modern technologies and clean architecture. Add new templates, features, or integrations with minimal effort.'
    },
    {
      icon: 'Users',
      title: 'Perfect Market Timing',
      description: 'Job market is always active. Resume builders have consistent demand with high customer lifetime value.'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      DollarSign,
      Globe,
      Puzzle,
      TrendingUp,
      Wrench,
      Users
    };
    return icons[iconName as keyof typeof icons];
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
              Starting at $199 • Multiple Packages • Full Styling Control!
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-slide-up">
              Why This Is A{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Smart Business
              </span>{' '}
              Investment
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 animate-slide-up delay-200">
              <span className="font-semibold text-gray-900">Beyond just owning software,</span>{' '}
              you're investing in a proven business model with unlimited potential for growth, profit, and complete styling control.
            </p>

            {/* Quick benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 animate-slide-up delay-300">
              {['Lifetime Ownership', 'Unlimited Users', 'Full Styling Control'].map((benefit, index) => (
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
                From Personal to Enterprise • Full Styling Control
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
              
              <button 
                onClick={() => scrollToSection('#demo')}
                className="group flex items-center justify-center bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                See ROI Calculator
              </button>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative animate-slide-up delay-500">
            {/* ROI Calculator Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">ROI Calculator</h3>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm">Initial investment (Professional)</span>
                      <span className="font-semibold text-red-600">-$349</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm">Month 1 (20 resumes @ $10)</span>
                      <span className="font-semibold text-green-600">+$200</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm">Month 2 (35 resumes @ $10)</span>
                      <span className="font-semibold text-green-600">+$350</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm">Month 3 (50 resumes @ $10)</span>
                      <span className="font-semibold text-green-600">+$500</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 font-bold">
                      <span className="text-gray-900">Net profit (3 months)</span>
                      <span className="text-green-600">+$701</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-sm text-green-800 font-medium text-center">
                      200% ROI In Just 3 Months
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce">
              4 Packages!
            </div>
            <div className="absolute -bottom-3 -left-3 bg-purple-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
              Full Styling Control
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = getIcon(benefit.icon);
            return (
              <div
                key={benefit.title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-800">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Styling Features Highlight */}
        <div className="mt-16 bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Palette className="h-5 w-5 mr-2 text-purple-300" />
              <span className="text-sm font-medium">Professional+ Styling Features</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Complete Styling{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Customization Suite
              </span>
            </h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Professional package and above include powerful styling tools to customize every aspect of your platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">Home Page Styling</h4>
              <p className="text-sm text-purple-200">Customize colors, fonts, layouts, and branding elements for your homepage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brush className="h-8 w-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">Resume Builder Styling</h4>
              <p className="text-sm text-purple-200">Full control over the resume builder interface and user experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">Template Customization</h4>
              <p className="text-sm text-purple-200">Advanced template editor with client-specific styling options</p>
            </div>
          </div>
        </div>

        {/* Revenue Examples Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Revenue Models */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Real Revenue Potential
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Here's how our customers typically monetize their platforms:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Per-Resume Model</h4>
                  <p className="text-gray-600 text-xs">Charge $5-15 per resume. 50 resumes/month = $250-750 monthly revenue</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Subscription Service</h4>
                  <p className="text-gray-600 text-xs">Monthly plans at $9.99. 100 subscribers = $999 monthly recurring revenue</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Wrench className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Service Business</h4>
                  <p className="text-gray-600 text-xs">Offer resume writing services at $50-200 per custom resume</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Comparison */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Investment{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Comparison
              </span>
            </h3>
            <p className="text-blue-100 mb-6 text-sm">
              See how our solution compares to alternatives
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">Custom development</span>
                <span className="text-red-400 font-semibold">$20,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">Premium template designs</span>
                <span className="text-red-400 font-semibold">$10,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">SaaS subscriptions (yearly)</span>
                <span className="text-red-400 font-semibold">$3,600+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">Hiring developers</span>
                <span className="text-red-400 font-semibold">$50,000+</span>
              </div>
              <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                <span className="text-white font-semibold">Our complete system</span>
                <span className="text-green-400 font-bold text-lg">Starting at $199</span>
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

        {/* Bottom Section - Success Metrics */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Successful{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Entrepreneurs
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              Real metrics from customers building profitable resume businesses with complete styling control
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center text-3xl font-bold text-blue-600 mb-2">
                  1,200+
                  <Star className="w-6 h-6 ml-1 text-yellow-500 fill-current" />
                </div>
                <div className="text-sm text-gray-600">Successful customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$4.2m+</div>
                <div className="text-sm text-gray-600">Revenue generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">600%</div>
                <div className="text-sm text-gray-600">Average ROI (3 months)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Package options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;