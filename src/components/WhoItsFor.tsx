import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Building, 
  Code, 
  Handshake,
  ArrowRight,
  TrendingUp,
  Star,
  Check,
  Play,
  Clock,
  Sparkles
} from 'lucide-react';

const WhoItsFor: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const audiences = [
    {
      icon: Users,
      title: 'Freelancers & Creators',
      description: 'Turn your creative skills into a profitable resume business. Serve clients globally while building your personal brand.',
      examples: ['Graphic designers', 'Content writers', 'Digital marketers'],
      revenue: '$500-3k',
      period: '/month',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600'
    },
    {
      icon: GraduationCap,
      title: 'Career Coaches',
      description: 'Enhance your coaching practice with professional tools that deliver measurable results for your clients.',
      examples: ['Life coaches', 'Career advisors', 'HR consultants'],
      revenue: '$1k-5k',
      period: '/month',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Resume Professionals',
      description: 'Scale your expertise from manual processes to an automated system that works around the clock.',
      examples: ['Resume writers', 'CV specialists', 'LinkedIn experts'],
      revenue: '$2k-8k',
      period: '/month',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      icon: Building,
      title: 'Agencies & Enterprises',
      description: 'Deploy white-label solutions that impress clients and generate new recurring revenue streams.',
      examples: ['Recruitment firms', 'HR consultancies', 'Staffing agencies'],
      revenue: '$5k-20k',
      period: '/month',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      icon: Code,
      title: 'Tech Entrepreneurs',
      description: 'Skip months of development time and launch your resume SaaS business with production-ready code.',
      examples: ['Developers', 'Product managers', 'SaaS founders'],
      revenue: '$1k-15k',
      period: '/month',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      icon: Handshake,
      title: 'Business Owners',
      description: 'Expand your service portfolio with a profitable add-on that perfectly complements existing offerings.',
      examples: ['Training companies', 'Educational platforms', 'Consulting firms'],
      revenue: '$2k-12k',
      period: '/month',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600'
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
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-medium px-3 py-1.5 rounded-full mb-4 animate-fade-in">
              <Clock className="h-3 w-3 mr-2" />
              <Sparkles className="h-3 w-3 mr-2" />
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse"></span>
              Starting at $199 • Multiple Packages • Choose Yours!
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-slide-up">
              Who Is This{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                For?
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 animate-slide-up delay-200">
              <span className="font-semibold text-gray-900">Perfect for entrepreneurs and professionals</span>{' '}
              building profitable resume businesses across the globe with AI-powered technology.
            </p>

            {/* Quick benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 animate-slide-up delay-300">
              {['Global Opportunity', 'Multiple Revenue Streams', 'Proven Success'].map((benefit, index) => (
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
                <Star className="h-3 w-3 mr-2" />
                From Personal to Enterprise Solutions
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
                See Success Stories
              </button>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative animate-slide-up delay-500">
            {/* Audience Preview Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">Perfect For</h3>
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  
                  {audiences.slice(0, 3).map((audience, index) => {
                    const IconComponent = audience.icon;
                    return (
                      <div key={audience.title} className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                        <div className={`w-8 h-8 ${audience.bgColor} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`h-4 w-4 ${audience.textColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{audience.title}</div>
                          <div className="text-xs text-gray-600">{audience.revenue}{audience.period}</div>
                        </div>
                      </div>
                    );
                  })}
                  
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-sm text-green-800 font-medium text-center">
                      6 Profitable Business Models
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce">
              4 Packages!
            </div>
            <div className="absolute -bottom-3 -left-3 bg-blue-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
              Global Success
            </div>
          </div>
        </div>

        {/* Audience Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={audience.title}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 cursor-pointer border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 ${
                  isActive 
                    ? 'shadow-xl shadow-gray-200/50 scale-[1.02] -translate-y-1' 
                    : 'shadow-sm'
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Revenue Badge */}
                <div className="absolute -top-3 -right-3 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                  <span className={`text-sm font-semibold bg-gradient-to-r ${audience.color} bg-clip-text text-transparent`}>
                    {audience.revenue}
                  </span>
                  <span className="text-xs text-gray-500">{audience.period}</span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 ${audience.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`h-6 w-6 ${audience.textColor}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-800">
                  {audience.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700">
                  {audience.description}
                </p>
                
                {/* Examples */}
                <div className="space-y-3">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Perfect For
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {audience.examples.map((example, i) => (
                      <span
                        key={example}
                        className="inline-flex items-center bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full transition-colors border border-gray-200"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Global Success Stats */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global Success{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Metrics
              </span>
            </h3>
            <p className="text-gray-600">
              Real results from entrepreneurs worldwide building profitable businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                1,200+
                <Star className="w-6 h-6 ml-1 text-yellow-500 fill-current" />
              </div>
              <div className="text-sm text-gray-600">Customers worldwide</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-sm text-gray-600">Countries served</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                $4.2m+
              </div>
              <div className="text-sm text-gray-600">Revenue generated</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center text-3xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform">
                600%
              </div>
              <div className="text-sm text-gray-600">Average ROI (3 months)</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready To Join{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Them?
                </span>
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Start your AI-powered resume business today with our complete, production-ready system
              </p>
              
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="group inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Packages - Starting at $199
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-blue-200">
                <span className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  One-time payment
                </span>
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Lifetime ownership
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;