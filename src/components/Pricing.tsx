import React from 'react';
import { Check, Star, Shield, Zap, ArrowRight, Play, Clock, Sparkles, Brain, Upload, Edit3, X, Crown, Building, Rocket, Palette, Brush, Settings } from 'lucide-react';

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

interface PricingProps {
  onPackageSelect: (pkg: Package) => void;
}

const Pricing: React.FC<PricingProps> = ({ onPackageSelect }) => {
  const packages: Package[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$199',
      originalPrice: null,
      description: 'Perfect for developers or solopreneurs launching a personal project.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      icon: Zap,
      popular: false,
      features: [
        'Complete MERN stack system (MongoDB, Express, React, Node.js)',
        'Full resume builder source code (frontend + backend)',
        'Next.js + Tailwind CSS frontend',
        'Node.js + Express backend with MongoDB database',
        'Resume creation, editing, and PDF download',
        'Basic authentication (email/password)',
        'Core sections: Work, Education, Skills, Projects, etc.',
        'Admin dashboard for resume and user management',
        'Clean, modular code structure',
        'Setup and deployment documentation',
        'Premium templates included',
        'Commercial license included'
      ],
      limitations: [
        'No styling customization service',
        'No white-label branding',
        'No technical support'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$349',
      originalPrice: null,
      description: 'Ideal for freelancers or creators launching commercial projects.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      icon: Star,
      popular: true,
      features: [
        'Everything in Starter, plus:',
        'Multiple premium templates (Cascade, Crisp, Enfold, etc.)',
        'Custom styling service for your homepage',
        'Resume builder interface styling service',
        'Resume templates styling customization service',
        'Professional branding and color scheme setup',
        'Logo integration and brand consistency',
        'Stripe & Paystack integration',
        'PDF export with custom styling',
        'Whitelabel branding (remove default credits)',
        'Use in client and commercial projects',
        'Priority email support',
        '6 months of updates'
      ],
      limitations: []
    },
    {
      id: 'agency',
      name: 'Agency',
      price: '$599',
      originalPrice: null,
      description: 'For agencies or startups building a resume platform.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      icon: Building,
      popular: false,
      features: [
        'Everything in Professional, plus:',
        'Role-based access control (Admin, Editor, User)',
        'Resume preview, publish, and listing system',
        'Team & client account support',
        'Advanced styling service package',
        'Multi-brand styling setup service',
        'Client-specific customization service',
        'Custom domain styling integration',
        'Deployment assistance',
        'Priority customization support',
        '12 months of updates'
      ],
      limitations: []
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$999+',
      originalPrice: null,
      description: 'Full control for SaaS builders and large-scale use.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      icon: Crown,
      popular: false,
      features: [
        'Everything in Agency, plus:',
        'Full resell license (build & sell your own platform)',
        'Lifetime updates',
        'Complete styling service package',
        'White-label styling service',
        'Custom backend feature support (AI suggestions, ATS readiness)',
        'Language translation and localization',
        'CI/CD ready deployment configs',
        'One-on-one onboarding session',
        'Extended developer support',
        'Dedicated styling consultant'
      ],
      limitations: []
    }
  ];

  const allPlansInclude = [
    'Complete MERN stack system (MongoDB, Express, React, Node.js)',
    'Admin dashboard for managing users & resumes',
    'Modern, responsive design with multiple resume templates',
    'Resume creation, editing & PDF export',
    'Core resume sections (Work, Education, Skills, Projects)',
    'RESTful API integration',
    'Authentication & user session handling',
    'SEO-friendly and fast frontend',
    'Clean, scalable codebase with modular architecture'
  ];

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
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 animate-fade-in">
            <Clock className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2" />
            <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2" />
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-600 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
            <span className="hidden sm:inline">Choose Your Package • Start Building Today</span>
            <span className="sm:hidden">Choose Your Package</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight animate-slide-up">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Perfect Package
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 animate-slide-up delay-200 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-900">From personal projects to enterprise solutions,</span>{' '}
            we have the right package to launch your AI-powered resume builder business with professional styling services.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 ${
                  pkg.popular 
                    ? 'border-blue-500 shadow-lg scale-105' 
                    : `${pkg.borderColor} shadow-sm hover:border-gray-300`
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${pkg.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${pkg.textColor}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {pkg.price}
                    {pkg.originalPrice && (
                      <span className="text-base sm:text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 max-h-48 sm:max-h-64 overflow-y-auto">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {pkg.limitations.length > 0 && (
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Limitations</p>
                    {pkg.limitations.map((limitation, i) => (
                      <div key={i} className="flex items-start">
                        <X className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <button 
                  onClick={() => onPackageSelect(pkg)}
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base`}
                >
                  Get {pkg.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Styling Services Highlight */}
        <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 sm:p-8 text-white mb-12 sm:mb-16">
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

        {/* All Plans Include */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Brain className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm font-medium">All Plans Include</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Core Features In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Every Package
              </span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {allPlansInclude.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Features Highlight */}
        <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 sm:p-8 text-white mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
              <Brain className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-300" />
              <span className="text-xs sm:text-sm font-medium">AI-Powered Technology</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Advanced AI Features{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Included
              </span>
            </h3>
            <p className="text-purple-100 max-w-2xl mx-auto text-sm sm:text-base">
              Every package includes cutting-edge AI technology that sets your platform apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Smart Resume Parser</h4>
              <p className="text-xs sm:text-sm text-purple-200">Upload existing resumes and AI extracts all content automatically</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">AI Content Generation</h4>
              <p className="text-xs sm:text-sm text-purple-200">Generate professional summaries and bullet points with AI assistance</p>
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

        {/* Comparison Table - Hidden on mobile, shown on larger screens */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-12 sm:mb-16">
          <div className="p-4 sm:p-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">
              Package Comparison
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.name} className="px-4 sm:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    MERN Stack System
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.name} className="px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Premium Templates
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.name} className="px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Commercial License
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.name} className="px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Styling Services
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mx-auto" />
                  </td>
                  {packages.slice(1).map((pkg) => (
                    <td key={pkg.name} className="px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Technical Support
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mx-auto" />
                  </td>
                  {packages.slice(1).map((pkg) => (
                    <td key={pkg.name} className="px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mx-auto" />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            
            <div className="relative">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Ready To{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Get Started?
                </span>
              </h3>
              <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Choose the perfect package for your needs and start building your AI-powered resume business with professional styling services
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
                <button 
                  onClick={() => onPackageSelect(packages[1])} // Professional package
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Start with Professional - $349
                </button>
                <button 
                  onClick={() => scrollToSection('#demo')}
                  className="border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
                >
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  View Demo First
                </button>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-200">
                <span className="flex items-center">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Secure payment
                </span>
                <span className="flex items-center">
                  <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Instant access
                </span>
                <span className="flex items-center">
                  <Palette className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Styling services included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;