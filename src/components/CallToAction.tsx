import React from 'react';
import { ArrowRight, Shield, Zap, Clock, Sparkles, Star, Check, Play, DollarSign, Palette, Brush, Settings } from 'lucide-react';

const CallToAction: React.FC = () => {
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
              Start Your Resume Business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Today
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 animate-slide-up delay-200">
              <span className="font-semibold text-gray-900">Join 1,200+ entrepreneurs</span>{' '}
              who chose ownership over subscriptions. Your complete AI-powered resume builder business with full styling control awaits.
            </p>

            {/* Quick benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 animate-slide-up delay-300">
              {['Secure Payment', 'Instant Access', 'Full Styling Control'].map((benefit, index) => (
                <div key={benefit} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Price Display */}
            <div className="mb-6 animate-slide-up delay-400">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                Starting at $199
              </div>
              <div className="text-lg text-gray-600 mb-4">One-time payment • Lifetime ownership</div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Palette className="h-4 w-4 mr-2" />
                4 packages available • From personal to enterprise • Full styling control
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slide-up delay-500">
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="group bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
              >
                <span className="flex items-center justify-center">
                  View All Packages
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection('#demo')}
                className="group flex items-center justify-center bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo First
              </button>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative animate-slide-up delay-500">
            {/* Purchase Preview Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">Package Options</h3>
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  
                  {/* Package options */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <span className="text-sm font-medium text-gray-900">Starter Package</span>
                      <span className="text-green-600 font-bold">$199</span>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm border-2 border-blue-300">
                      <span className="text-sm font-medium text-gray-900">Professional (Popular)</span>
                      <span className="text-blue-600 font-bold">$349</span>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <span className="text-sm font-medium text-gray-900">Agency Package</span>
                      <span className="text-purple-600 font-bold">$599</span>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <span className="text-sm font-medium text-gray-900">Enterprise</span>
                      <span className="text-orange-600 font-bold">$999+</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-3 text-white text-center">
                    <div className="text-lg font-bold mb-1">Choose Your Perfect Fit</div>
                    <div className="text-xs text-green-100">From Personal to Enterprise • Full Styling Control</div>
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

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, text: 'Secure Payment', color: 'text-green-400', bg: 'bg-green-100' },
            { icon: Zap, text: 'Instant Access', color: 'text-yellow-400', bg: 'bg-yellow-100' },
            { icon: Clock, text: '24/7 Download', color: 'text-blue-400', bg: 'bg-blue-100' },
            { icon: Palette, text: 'Full Styling Control', color: 'text-purple-400', bg: 'bg-purple-100' }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`h-6 w-6 ${item.color}`} />
                </div>
                <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900">{item.text}</span>
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

        {/* Value Propositions */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {[
            { 
              value: '$199', 
              description: 'Starting price vs $25k+ to build',
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
              value: 'Full', 
              description: 'Styling control in Professional+',
              gradient: 'from-purple-400 to-pink-400',
              bg: 'bg-purple-50'
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`group ${item.bg} rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform`}>
                {item.value}
              </div>
              <div className="text-gray-600 group-hover:text-gray-700 text-sm">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Investment Comparison */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Cost Comparison */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Investment Comparison
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Custom development</span>
                <span className="text-red-600 font-semibold">$20,000+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Premium template designs</span>
                <span className="text-red-600 font-semibold">$10,000+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">SaaS subscriptions (yearly)</span>
                <span className="text-red-600 font-semibold">$3,600+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Hiring developers</span>
                <span className="text-red-600 font-semibold">$50,000+</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold">
                <span className="text-gray-900">Total value</span>
                <span className="text-red-600">$83,000+</span>
              </div>
              <div className="flex justify-between text-green-600 font-bold text-lg">
                <span>Your price today</span>
                <span>Starting at $199</span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Ready To{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Launch?
              </span>
            </h3>
            <p className="text-blue-100 mb-6 text-sm">
              Get everything you need to start your AI-powered resume business with complete styling control
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
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group mb-4"
            >
              View All Packages
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-xl">
              Add Setup Support (+$30)
            </button>
          </div>
        </div>

        {/* Bottom Section - Final Reassurance */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Success
              </span>{' '}
              Starts Now
            </h3>
            <p className="text-gray-600 mb-6">
              🔒 Secure checkout • 📧 Instant email delivery • 💬 30-day support included • 🎨 Full styling control
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                <div className="text-sm text-gray-600">Successful customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$4.2m+</div>
                <div className="text-sm text-gray-600">Revenue generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Package options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">$199</div>
                <div className="text-sm text-gray-600">Starting price</div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-bold px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-xl mb-4"
            >
              Start Your Business Today - Starting at $199
            </button>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✅ No hidden fees</span>
              <span>✅ Lifetime license</span>
              <span>✅ AI-powered</span>
              <span>✅ Full styling control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;