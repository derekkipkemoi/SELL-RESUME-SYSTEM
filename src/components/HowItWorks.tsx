import React from 'react';
import { ShoppingCart, Palette, Rocket, Check, Play, ArrowRight, Brain, Upload, Edit3 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Choose Your Package',
      description: 'Select from 4 packages starting at $199 and get instant access to the complete AI-powered resume builder system.',
      details: [
        'Immediate download access',
        'Complete source code package',
        'AI features included',
        'Setup documentation included',
        'No recurring payments ever'
      ]
    },
    {
      icon: Palette,
      title: 'Customize & Configure',
      description: 'Make it yours! Update colors, logos, and content to match your brand. Configure AI features and customize templates.',
      details: [
        'Simple configuration files',
        'Logo and color customization',
        'AI settings configuration',
        'Custom domain setup',
        'Brand your resume templates'
      ]
    },
    {
      icon: Rocket,
      title: 'Launch & Earn',
      description: 'Deploy to your hosting platform and start serving customers with AI-powered resume creation. Begin earning immediately.',
      details: [
        'Easy deployment guides',
        'Multiple hosting options',
        'AI-powered user experience',
        'Start serving customers',
        'Scale your business'
      ]
    }
  ];

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
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full mb-4 animate-fade-in">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Simple Process • AI-Powered • Quick Setup
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-slide-up">
              Launch In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                3 Simple Steps
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 animate-slide-up delay-200">
              <span className="font-semibold text-gray-900">Get your AI-powered resume builder business up and running</span>{' '}
              in hours, not months. No complex setup required.
            </p>

            {/* Quick benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 animate-slide-up delay-300">
              {['Instant Access', 'AI-Powered', 'Start Earning'].map((benefit, index) => (
                <div key={benefit} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                </div>
              ))}
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
                Watch Demo
              </button>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative animate-slide-up delay-500">
            {/* Steps Stack */}
            <div className="relative space-y-4">
              {/* Step 1 */}
              <div className="relative bg-white rounded-2xl shadow-lg p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">Choose Your Package</h3>
                    <p className="text-xs text-gray-600">Starting at $199 • 4 packages available</p>
                  </div>
                  <ShoppingCart className="h-5 w-5 text-blue-600" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white rounded-2xl shadow-lg p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500 ml-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">Customize & Configure</h3>
                    <p className="text-xs text-gray-600">Brand it yours + configure AI features</p>
                  </div>
                  <Palette className="h-5 w-5 text-purple-600" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-lg p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm mb-1">Launch & Earn</h3>
                    <p className="text-xs text-blue-200">Deploy AI-powered platform & serve customers</p>
                  </div>
                  <Rocket className="h-5 w-5 text-green-400" />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce">
              24-48 Hours
            </div>
            <div className="absolute -bottom-3 -left-3 bg-purple-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
              AI-Powered
            </div>
          </div>
        </div>

        {/* Steps Detail Grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-6 w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-800">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Features Highlight */}
        <div className="mt-16 bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Brain className="h-5 w-5 mr-2 text-purple-300" />
              <span className="text-sm font-medium">AI Features Included</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Your Customers Get{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI Superpowers
              </span>
            </h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Launch with cutting-edge AI features that make your platform stand out from the competition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">Smart Resume Parser</h4>
              <p className="text-sm text-purple-200">Users upload existing resumes and AI extracts all content automatically</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">AI Content Generation</h4>
              <p className="text-sm text-purple-200">Generate professional summaries and bullet points with AI assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Edit3 className="h-8 w-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">Template Editor</h4>
              <p className="text-sm text-purple-200">Customize existing templates or create new ones with visual editor</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Time Estimate & CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse"></div>
              <span className="font-medium text-sm">Most customers launch their AI-powered platform within 24-48 hours</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your AI-Powered Business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Today
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              One-time payment • Lifetime ownership • AI features included • No monthly fees
            </p>
            
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                View All Packages - Starting at $199
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;