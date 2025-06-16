import React from 'react';
import { AlertTriangle, Target, CheckCircle2, TrendingUp, Users, DollarSign, Zap, Shield, ArrowRight, Check, Play } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: DollarSign,
      title: 'Expensive Subscriptions',
      description: 'Most resume platforms charge $15-30/month, making it costly for job seekers who only need occasional updates.',
      impact: '$360/year average cost'
    },
    {
      icon: TrendingUp,
      title: 'Limited Scalability',
      description: 'Manual resume creation is time-consuming and doesn\'t scale. No easy way to offer professional tools without huge costs.',
      impact: '10x time investment'
    },
    {
      icon: Shield,
      title: 'High Barrier To Entry',
      description: 'Building a resume platform requires months of development and thousands in costs, blocking most entrepreneurs.',
      impact: '$20k+ development cost'
    }
  ];

  const solutions = [
    {
      icon: Users,
      title: 'Perfect For Side Hustles',
      description: 'Launch your own resume service as a side business, offering affordable resume creation to job seekers.',
      benefit: 'Start earning immediately'
    },
    {
      icon: TrendingUp,
      title: 'Scale Your Business',
      description: 'Add resume creation tools to your existing services to increase revenue and serve more clients efficiently.',
      benefit: 'Multiple revenue streams'
    },
    {
      icon: Zap,
      title: 'Digital Product Business',
      description: 'Turn this into a full SaaS business, add premium features, and create recurring revenue streams.',
      benefit: 'Unlimited growth potential'
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-red-100 text-red-800 text-sm font-medium px-3 py-1.5 rounded-full mb-4 animate-fade-in">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
              Market Opportunity • Massive Potential
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-slide-up">
              The Problem Is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Clear
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 animate-slide-up delay-200">
              <span className="font-semibold text-gray-900">The resume industry has pain points</span>{' '}
              that create massive opportunities for smart entrepreneurs to build profitable businesses.
            </p>

            {/* Quick problems */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 animate-slide-up delay-300">
              {['Expensive Subscriptions', 'Limited Scalability', 'High Barriers'].map((problem, index) => (
                <div key={problem} className="flex items-center">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-gray-700 font-medium text-sm">{problem}</span>
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
                See Solution
              </button>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="relative animate-slide-up delay-500">
            {/* Problems Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">Current Problems</h3>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  
                  {problems.slice(0, 3).map((problem, index) => {
                    const IconComponent = problem.icon;
                    return (
                      <div key={problem.title} className="flex items-center space-x-3 bg-white rounded-lg p-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-4 w-4 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{problem.title}</div>
                          <div className="text-xs text-red-600">{problem.impact}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white text-sm">Our Solution</h3>
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                </div>
                
                {solutions.slice(0, 3).map((solution, index) => {
                  const IconComponent = solution.icon;
                  return (
                    <div key={solution.title} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-blue-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{solution.title}</div>
                        <div className="text-xs text-green-300">{solution.benefit}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce">
              Problems = Opportunity
            </div>
            <div className="absolute -bottom-3 -left-3 bg-green-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium animate-bounce delay-1000">
              Starting at $199
            </div>
          </div>
        </div>

        {/* Bottom Section - Value Proposition */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Transform Problems Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Profit
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              While others struggle with expensive subscriptions and limited options, you'll own a complete solution
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$199</div>
                <div className="text-sm text-gray-600">Starting price vs $360/year subscriptions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24hrs</div>
                <div className="text-sm text-gray-600">Setup vs months of development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                <div className="text-sm text-gray-600">Unlimited potential vs limited features</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;