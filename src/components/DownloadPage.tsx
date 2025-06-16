import React, { useState, useEffect } from 'react';
import { 
  Download, 
  CheckCircle2, 
  FileText, 
  Code, 
  Palette, 
  Shield, 
  Clock, 
  Star,
  ExternalLink,
  Copy,
  Check,
  Mail,
  MessageCircle,
  Book,
  Play,
  Zap,
  Brain,
  Settings,
  Globe,
  Users,
  ArrowLeft
} from 'lucide-react';

const DownloadPage: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});

  // Get URL parameters to check if this is a callback from Paystack
  const urlParams = new URLSearchParams(window.location.search);
  const reference = urlParams.get('reference');
  const status = urlParams.get('status');

  // Simulate download progress
  const simulateDownload = (itemId: string) => {
    setDownloadProgress(prev => ({ ...prev, [itemId]: 0 }));
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const currentProgress = prev[itemId] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [itemId]: currentProgress + 10 };
      });
    }, 200);
  };

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const goBackToHome = () => {
    window.location.href = '/';
  };

  const downloadItems = [
    {
      id: 'source-code',
      title: 'Complete Source Code',
      description: 'Full MERN stack system with frontend and backend',
      size: '45.2 MB',
      type: 'ZIP Archive',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      downloadUrl: '#'
    },
    {
      id: 'documentation',
      title: 'Setup Documentation',
      description: 'Complete installation and deployment guide',
      size: '8.7 MB',
      type: 'PDF Document',
      icon: Book,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      downloadUrl: '#'
    },
    {
      id: 'templates',
      title: 'Premium Templates',
      description: 'Professional resume templates and styling assets',
      size: '12.3 MB',
      type: 'Design Files',
      icon: Palette,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      downloadUrl: '#'
    },
    {
      id: 'video-tutorials',
      title: 'Video Tutorials',
      description: 'Step-by-step setup and customization videos',
      size: '156.8 MB',
      type: 'MP4 Videos',
      icon: Play,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      downloadUrl: '#'
    }
  ];

  const quickLinks = [
    {
      title: 'Live Demo',
      description: 'See the system in action',
      url: 'https://www.topresumeai.com/',
      icon: Globe,
      external: true
    },
    {
      title: 'Support Center',
      description: 'Get help and documentation',
      url: '#',
      icon: MessageCircle,
      external: false
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      url: '#',
      icon: Users,
      external: false
    }
  ];

  const packageFeatures = [
    'Complete MERN stack system (MongoDB, Express, React, Node.js)',
    'AI-powered resume builder with smart parsing',
    'Premium resume templates with customization',
    'Admin dashboard for user and content management',
    'Payment integration (Stripe & Paystack)',
    'PDF export with professional formatting',
    'Responsive design for all devices',
    'Professional styling services (Professional+ packages)',
    'White-label branding options',
    'Commercial usage rights included'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <button
              onClick={goBackToHome}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="hidden sm:inline">Back to Homepage</span>
              <span className="sm:hidden">Back</span>
            </button>
            
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Purchase Complete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Success Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Welcome to Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              AI-Powered Business!
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6">
            Your purchase was successful! Download your complete MERN stack resume builder system and start building your profitable business today.
          </p>

          {/* Payment Success Info */}
          {status === 'success' && reference && (
            <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              <span>Payment successful • Reference: {reference}</span>
            </div>
          )}

          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            <span>Lifetime access • No expiration • Download anytime</span>
          </div>
        </div>

        {/* Support Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { icon: Users, value: '1,200+', label: 'Happy Customers' },
            { icon: Clock, value: '< 24h', label: 'Response Time' },
            { icon: Star, value: '4.9/5', label: 'Support Rating' },
            { icon: Globe, value: '50+', label: 'Countries Served' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Download Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Your Downloads</h2>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span>Available for lifetime</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {downloadItems.map((item) => {
                  const IconComponent = item.icon;
                  const progress = downloadProgress[item.id];
                  const isDownloading = progress !== undefined && progress < 100;
                  const isComplete = progress === 100;
                  
                  return (
                    <div
                      key={item.id}
                      className="group bg-gray-50 hover:bg-gray-100 rounded-xl p-3 sm:p-4 transition-all duration-300 border border-gray-200 hover:border-gray-300"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${item.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.title}</h3>
                              <p className="text-xs sm:text-sm text-gray-600 truncate">{item.description}</p>
                              <div className="flex items-center space-x-2 sm:space-x-4 mt-1">
                                <span className="text-xs text-gray-500">{item.size}</span>
                                <span className="text-xs text-gray-500">•</span>
                                <span className="text-xs text-gray-500">{item.type}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {isComplete ? (
                                <div className="flex items-center text-green-600 text-xs sm:text-sm">
                                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                  <span className="hidden sm:inline">Downloaded</span>
                                  <span className="sm:hidden">Done</span>
                                </div>
                              ) : (
                                <button
                                  onClick={() => simulateDownload(item.id)}
                                  disabled={isDownloading}
                                  className={`flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                                    isDownloading
                                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                                  }`}
                                >
                                  <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                  <span className="hidden sm:inline">
                                    {isDownloading ? 'Downloading...' : 'Download'}
                                  </span>
                                  <span className="sm:hidden">
                                    {isDownloading ? '...' : 'Get'}
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                          
                          {isDownloading && (
                            <div className="mt-2">
                              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                                <div 
                                  className="bg-blue-600 h-1.5 sm:h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">{progress}% complete</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900 text-sm sm:text-base">Download Security</h4>
                    <p className="text-xs sm:text-sm text-blue-700 mt-1">
                      All downloads are secured and virus-scanned. Your files are available for lifetime access.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Access Links */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Quick Access</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-200 hover:border-gray-300"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{link.title}</h4>
                          {link.external && (
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 ml-1 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">{link.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Package Features */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">What's Included</h3>
              <div className="space-y-2 sm:space-y-3">
                {packageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Information */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Need Help?</h3>
              <p className="text-blue-100 mb-4 sm:mb-6 text-xs sm:text-sm">
                Our support team is here to help you get started with your new resume builder system.
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-xs sm:text-sm">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Email Support
                </button>
                <button className="w-full border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 font-semibold px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:shadow-xl flex items-center justify-center text-xs sm:text-sm">
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Live Chat
                </button>
              </div>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-blue-200">Response time:</span>
                  <span className="text-white font-medium">Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Next Steps</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Download & Extract</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Download all files and extract the source code</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Follow Setup Guide</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Use the documentation for step-by-step setup</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Launch Your Business</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Start serving customers and earning revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Get Started?
              </span>
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Join thousands of entrepreneurs building profitable resume businesses worldwide
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Start Setup Process
              </button>
              <button className="border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;