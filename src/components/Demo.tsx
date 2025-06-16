import React, { useState } from 'react';
import { Play, Monitor, Smartphone, FileText, Download, ExternalLink, Check, ArrowRight, Clock, Sparkles, Brain, Upload, Edit3, Zap, X, Star } from 'lucide-react';

const Demo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('dashboard');
  const [showVideo, setShowVideo] = useState(false);

  const demoScreens = {
    dashboard: {
      title: 'Admin Dashboard',
      description: 'Complete control panel to manage users, track analytics, and configure your platform',
      features: ['User management', 'Resume analytics', 'Revenue tracking', 'System settings']
    },
    builder: {
      title: 'AI Resume Builder',
      description: 'Intelligent drag-and-drop editor with AI-powered content generation and premium templates',
      features: ['AI content generation', 'Live preview', 'Template switching', 'Smart suggestions']
    },
    ai: {
      title: 'AI-Powered Features',
      description: 'Upload existing resumes and let AI extract content, generate sections, and optimize formatting',
      features: ['Resume parsing', 'Content extraction', 'AI writing assistant', 'Smart optimization']
    },
    templates: {
      title: 'Premium Templates',
      description: 'Modern, ATS-friendly resume templates with built-in template editor for customization',
      features: ['ATS optimized', 'Template editor', 'Customizable colors', 'Mobile responsive']
    },
    export: {
      title: 'PDF Export',
      description: 'High-quality PDF generation with perfect formatting for any device or printer',
      features: ['HD quality', 'Print ready', 'Multiple formats', 'Instant download']
    }
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
              Starting at $199 • Multiple Packages • Choose Yours!
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-slide-up">
              See It In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Action
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 animate-slide-up delay-200">
              <span className="font-semibold text-gray-900">Explore every aspect of your future AI-powered platform</span>{' '}
              from user experience to admin controls with our interactive demo featuring premium templates and intelligent features.
            </p>

            {/* Quick features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 animate-slide-up delay-300">
              {['AI-Powered', 'Premium Templates', 'Template Editor'].map((feature, index) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
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
                <Star className="h-3 w-3 mr-2" />
                From Personal to Enterprise Solutions
              </div>
            </div>

            {/* Demo Navigation */}
            <div className="flex flex-wrap justify-center lg:justify-start mb-6 animate-slide-up delay-400">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1 inline-flex shadow-sm border border-gray-200">
                {Object.entries(demoScreens).map(([key, screen]) => (
                  <button
                    key={key}
                    onClick={() => setActiveDemo(key)}
                    className={`px-2 py-2 rounded-lg font-medium transition-all duration-200 text-xs ${
                      activeDemo === key
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slide-up delay-500">
              <a
                href="https://www.topresumeai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
              >
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Try Live Demo
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                onClick={() => setShowVideo(true)}
                className="group flex items-center justify-center bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Video Demo
              </button>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative animate-slide-up delay-500">
            {/* Demo Preview */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Browser mockup header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded ml-4 px-3 py-1 text-sm text-gray-500">
                  topresumeai.com
                </div>
              </div>
              
              {/* Mock interface */}
              <div className="p-6 h-80 bg-gradient-to-br from-blue-50 to-white">
                {activeDemo === 'dashboard' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Dashboard Overview</h3>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded"></div>
                        <div className="w-8 h-8 bg-teal-100 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Total users', value: '1,247', color: 'bg-blue-100' },
                        { label: 'Resumes created', value: '3,891', color: 'bg-teal-100' },
                        { label: 'Revenue', value: '$2,340', color: 'bg-green-100' }
                      ].map((stat) => (
                        <div key={stat.label} className={`${stat.color} rounded-lg p-3`}>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Recent activity</span>
                        <span className="text-xs text-gray-500">Last 24h</span>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="flex-1 bg-gray-100 rounded h-3"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeDemo === 'builder' && (
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-gray-700">AI Resume Editor</div>
                      <div className="space-y-2">
                        <div className="bg-white rounded p-3 shadow-sm">
                          <div className="h-3 bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                        </div>
                        <div className="bg-white rounded p-3 shadow-sm border-2 border-purple-300">
                          <div className="flex items-center mb-2">
                            <Brain className="h-3 w-3 text-purple-600 mr-2" />
                            <div className="h-3 bg-purple-200 rounded flex-1"></div>
                          </div>
                          <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                        </div>
                        <div className="bg-white rounded p-3 shadow-sm">
                          <div className="h-3 bg-teal-200 rounded mb-2"></div>
                          <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-gray-500 mb-2">Live preview</div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-900 rounded w-2/3"></div>
                        <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-px bg-gray-200 my-2"></div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'ai' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">AI Features</h3>
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
                      <div className="flex items-center mb-3">
                        <Upload className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="text-sm font-medium text-gray-900">Resume Upload & Parsing</span>
                      </div>
                      <div className="bg-purple-50 rounded p-3">
                        <div className="text-xs text-purple-800 mb-2">AI extracting content...</div>
                        <div className="w-full bg-purple-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Zap className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-gray-900">AI Content Generation</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-blue-100 rounded w-full"></div>
                        <div className="h-2 bg-blue-100 rounded w-4/5"></div>
                        <div className="h-2 bg-blue-100 rounded w-3/5"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Edit3 className="h-4 w-4 text-teal-600 mr-2" />
                        <span className="text-sm font-medium text-gray-900">Template Editor</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-teal-50 rounded p-2 h-12"></div>
                        <div className="bg-teal-50 rounded p-2 h-12"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeDemo === 'templates' && (
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`bg-white rounded-lg p-3 shadow-sm ${i === 1 ? 'ring-2 ring-blue-300' : ''}`}>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-900 rounded w-2/3"></div>
                          <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                          <div className="h-px bg-gray-200 my-2"></div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gray-200 rounded"></div>
                            <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                          </div>
                        </div>
                        {i === 1 && (
                          <div className="mt-2 text-xs text-blue-600 font-medium">Selected</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {activeDemo === 'export' && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-24 h-32 bg-white rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center">
                        <FileText className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-900">resume_john_doe.pdf</div>
                        <div className="text-xs text-gray-500">Generated in 2.3 seconds</div>
                        <button className="inline-flex items-center bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Device indicators */}
            <div className="absolute -bottom-4 -right-4 flex space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Monitor className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <Smartphone className="h-4 w-4 text-white" />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce">
              4 Packages!
            </div>
            <div className="absolute -bottom-3 -left-3 bg-purple-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
              AI-Powered
            </div>
          </div>
        </div>

        {/* Demo Description */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {demoScreens[activeDemo as keyof typeof demoScreens].title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {demoScreens[activeDemo as keyof typeof demoScreens].description}
            </p>
            
            <div className="space-y-3">
              {demoScreens[activeDemo as keyof typeof demoScreens].features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Ready To{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Launch?
              </span>
            </h3>
            <p className="text-blue-100 mb-6">
              Get the complete AI-powered system with all features shown in the demo plus premium templates
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Complete source code</span>
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Premium templates</span>
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">AI-powered features</span>
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Template editor</span>
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Lifetime ownership</span>
                <Check className="h-4 w-4 text-green-400" />
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
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Demo Video</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/V_oTB19UIoE?autoplay=1"
                title="Resume Builder Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm mb-4">
                See the complete AI-powered resume builder system in action
              </p>
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Demo;