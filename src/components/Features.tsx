import React, { useState } from 'react';
import { 
  Layout, 
  Smartphone, 
  Download, 
  Users, 
  Palette, 
  Shield,
  FileText,
  BarChart3,
  Globe,
  Zap,
  Code,
  Settings,
  Star,
  ArrowRight,
  Play,
  Check,
  Clock,
  Sparkles,
  Brain,
  Upload,
  Edit3,
  Brush
} from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('user');

  const tabs = [
    { id: 'user', label: 'User Experience', icon: Users },
    { id: 'ai', label: 'AI-Powered', icon: Brain },
    { id: 'styling', label: 'Styling Services', icon: Palette },
    { id: 'admin', label: 'Admin Dashboard', icon: BarChart3 },
    { id: 'technical', label: 'Technical', icon: Code }
  ];

  const features = {
    user: [
      {
        icon: Layout,
        title: '30 Modern Templates',
        description: 'Professional resume templates that adapt to any industry and career level',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: Palette,
        title: 'Fully Customizable',
        description: 'Users can customize colors, fonts, layouts, and sections to match their style',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: Smartphone,
        title: 'Mobile Optimized',
        description: 'Perfect experience on all devices - desktop, tablet, and mobile',
        color: 'from-green-500 to-teal-500'
      },
      {
        icon: Download,
        title: 'PDF Export',
        description: 'High-quality PDF generation with professional formatting',
        color: 'from-orange-500 to-red-500'
      },
      {
        icon: FileText,
        title: 'Live Preview',
        description: 'Real-time editing with instant preview of changes',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        icon: Shield,
        title: 'Secure Authentication',
        description: 'User registration, login, and secure data protection',
        color: 'from-emerald-500 to-green-500'
      }
    ],
    ai: [
      {
        icon: Brain,
        title: 'AI Resume Parser',
        description: 'Upload existing resumes and let AI automatically extract and organize all content',
        color: 'from-violet-500 to-purple-500'
      },
      {
        icon: Upload,
        title: 'Smart Content Extraction',
        description: 'AI reads PDF/Word files and intelligently maps content to resume sections',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        icon: Edit3,
        title: 'AI Content Generation',
        description: 'Generate professional resume sections, bullet points, and summaries with AI',
        color: 'from-emerald-500 to-teal-500'
      },
      {
        icon: Zap,
        title: 'Instant Optimization',
        description: 'AI suggests improvements for better ATS compatibility and impact',
        color: 'from-orange-500 to-red-500'
      },
      {
        icon: Settings,
        title: 'Template Editor',
        description: 'Built-in visual editor to customize templates and create new designs',
        color: 'from-pink-500 to-rose-500'
      },
      {
        icon: FileText,
        title: 'Smart Formatting',
        description: 'AI ensures consistent formatting and professional presentation',
        color: 'from-cyan-500 to-blue-500'
      }
    ],
    styling: [
      {
        icon: Palette,
        title: 'Homepage Styling Service',
        description: 'We customize your homepage colors, fonts, layouts, and branding to match your business',
        color: 'from-purple-500 to-violet-500'
      },
      {
        icon: Brush,
        title: 'Resume Builder Styling Service',
        description: 'We style your resume builder interface to provide the perfect user experience',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: Settings,
        title: 'Template Customization Service',
        description: 'We customize resume templates according to your specific requirements',
        color: 'from-emerald-500 to-teal-500'
      },
      {
        icon: Layout,
        title: 'Brand Integration Service',
        description: 'We integrate your logo, colors, and brand elements throughout the platform',
        color: 'from-orange-500 to-red-500'
      },
      {
        icon: FileText,
        title: 'Professional Setup',
        description: 'We handle all styling setup so your platform looks professional from day one',
        color: 'from-pink-500 to-rose-500'
      },
      {
        icon: Zap,
        title: 'Quick Turnaround',
        description: 'Professional styling service completed within 3-5 business days',
        color: 'from-indigo-500 to-purple-500'
      }
    ],
    admin: [
      {
        icon: BarChart3,
        title: 'User Management',
        description: 'Complete dashboard to manage users, view analytics, and track usage',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        icon: FileText,
        title: 'Resume Analytics',
        description: 'See which templates are popular and track user engagement',
        color: 'from-teal-500 to-cyan-500'
      },
      {
        icon: Settings,
        title: 'System Configuration',
        description: 'Easy settings panel to customize the platform for your brand',
        color: 'from-purple-500 to-violet-500'
      },
      {
        icon: Globe,
        title: 'Multi-Language Ready',
        description: 'Prepared for localization to serve different markets',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    technical: [
      {
        icon: Code,
        title: 'Complete MERN Stack',
        description: 'Full MongoDB + Express + React + Node.js system with clean, documented code',
        color: 'from-slate-500 to-gray-500'
      },
      {
        icon: Zap,
        title: 'Easy Deployment',
        description: 'Detailed setup documentation and deployment guides for popular platforms',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        icon: Settings,
        title: 'Customizable Architecture',
        description: 'Modular codebase that\'s easy to modify and extend with new features',
        color: 'from-pink-500 to-rose-500'
      },
      {
        icon: Shield,
        title: 'Production Ready',
        description: 'Built with best practices, security measures, and scalability in mind',
        color: 'from-cyan-500 to-blue-500'
      }
    ]
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
        <div className="absolute top-40 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content - Left Side */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 animate-fade-in">
              <Clock className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2" />
              <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-600 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
              <span className="hidden sm:inline">Starting at $199 • Multiple Packages • Choose Yours!</span>
              <span className="sm:hidden">Starting at $199 • 4 Packages!</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight animate-slide-up">
              Everything You Need To{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Launch
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 animate-slide-up delay-200 leading-relaxed">
              <span className="font-semibold text-gray-900">A complete MERN stack system</span>{' '}
              that's ready to serve your customers from day one with 30 professional templates, intelligent features, and professional styling services.
            </p>

            {/* Quick features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-4 sm:mb-6 animate-slide-up delay-300">
              {['MERN Stack', '30 Templates', 'Styling Services'].map((feature, index) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1 sm:mr-2" />
                  <span className="text-gray-700 font-medium text-xs sm:text-sm">{feature}</span>
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
                <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">From Personal to Enterprise Solutions</span>
                <span className="sm:hidden">Personal to Enterprise</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6 animate-slide-up delay-400 overflow-x-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1 inline-flex shadow-sm border border-gray-200 min-w-max">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start animate-slide-up delay-500">
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
            {/* Feature Cards Stack */}
            <div className="relative">
              {/* Main Feature Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">{activeTab === 'ai' ? 'AI-Powered' : activeTab === 'styling' ? 'Styling Services' : activeTab === 'technical' ? 'MERN Stack' : activeTab} Features</h3>
                      {activeTab === 'ai' ? (
                        <Brain className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                      ) : activeTab === 'styling' ? (
                        <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                      ) : activeTab === 'technical' ? (
                        <Code className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                      ) : (
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    
                    {features[activeTab as keyof typeof features].slice(0, 3).map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={feature.title} className="flex items-center space-x-2 sm:space-x-3 bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">{feature.title}</div>
                            <div className="text-xs text-gray-600 line-clamp-2">{feature.description.slice(0, 40)}...</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-3 sm:p-4 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="text-center text-white">
                  <div className="text-lg sm:text-2xl font-bold mb-1">MERN</div>
                  <div className="text-xs text-blue-200">Complete Stack</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-green-500 text-white px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium animate-bounce">
              4 Packages!
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-purple-500 text-white px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
              MERN Stack
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features[activeTab as keyof typeof features].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-800 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Styling Services Highlight */}
        {activeTab === 'styling' && (
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
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Brand Integration</h4>
                <p className="text-xs sm:text-sm text-purple-200">Complete brand integration with your colors, fonts, and logo throughout the platform</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Brush className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Professional Setup</h4>
                <p className="text-xs sm:text-sm text-purple-200">We handle all styling setup so your platform looks professional from day one</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Quick Turnaround</h4>
                <p className="text-xs sm:text-sm text-purple-200">Professional styling service completed within 3-5 business days</p>
              </div>
            </div>
          </div>
        )}

        {/* MERN Stack Highlight */}
        {activeTab === 'technical' && (
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-6 sm:p-8 text-white">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-300" />
                <span className="text-xs sm:text-sm font-medium">Complete MERN Stack System</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Full-Stack Solution{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Ready To Deploy
                </span>
              </h3>
              <p className="text-gray-100 max-w-2xl mx-auto text-sm sm:text-base">
                Complete MongoDB + Express + React + Node.js system with both frontend and backend ready for production
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="text-green-400 font-bold text-base sm:text-lg">M</div>
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">MongoDB</h4>
                <p className="text-xs sm:text-sm text-gray-200">NoSQL database for scalable data storage</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="text-yellow-400 font-bold text-base sm:text-lg">E</div>
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Express.js</h4>
                <p className="text-xs sm:text-sm text-gray-200">Fast, minimalist web framework for Node.js</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="text-blue-400 font-bold text-base sm:text-lg">R</div>
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">React</h4>
                <p className="text-xs sm:text-sm text-gray-200">Modern frontend library with Next.js</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="text-green-400 font-bold text-base sm:text-lg">N</div>
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Node.js</h4>
                <p className="text-xs sm:text-sm text-gray-200">JavaScript runtime for server-side development</p>
              </div>
            </div>
          </div>
        )}

        {/* AI Features Highlight */}
        {activeTab === 'ai' && (
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 sm:p-8 text-white">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-300" />
                <span className="text-xs sm:text-sm font-medium">Powered By Artificial Intelligence</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Revolutionize Resume Creation With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  AI Technology
                </span>
              </h3>
              <p className="text-purple-100 max-w-2xl mx-auto text-sm sm:text-base">
                Your customers can upload existing resumes and watch AI intelligently extract, organize, and enhance their content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Upload & Parse</h4>
                <p className="text-xs sm:text-sm text-purple-200">AI reads PDF/Word files and extracts all content automatically</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Generate Content</h4>
                <p className="text-xs sm:text-sm text-purple-200">Create professional summaries and bullet points with AI assistance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Edit3 className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Template Editor</h4>
                <p className="text-xs sm:text-sm text-purple-200">Customize existing templates or create new ones with visual editor</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Section - Value Highlight */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Background pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            
            <div className="relative">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Built For{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Success
                </span>
              </h3>
              <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                This isn't just code — it's a complete MERN stack business solution with professional styling services designed to help you succeed
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">MERN</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Complete stack system</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">AI</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Powered features</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1 sm:mb-2">Pro</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Styling services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-1 sm:mb-2">24/7</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Automated system</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;