import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Shield, 
  Download, 
  Clock, 
  Star, 
  CreditCard, 
  Lock,
  Zap,
  Crown,
  Building,
  Rocket,
  X,
  AlertCircle,
  CheckCircle2,
  Search
} from 'lucide-react';

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

interface CheckoutProps {
  selectedPackage?: Package;
  onBack: () => void;
  onSuccess: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ selectedPackage, onBack, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    agreeToTerms: false,
    subscribeToUpdates: true
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countrySearch, setCountrySearch] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Default package if none selected
  const defaultPackage: Package = {
    id: 'professional',
    name: 'Professional',
    price: '$349',
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
      'Stripe & Paystack integration',
      'PDF export with custom styling',
      'Whitelabel branding (remove default credits)',
      'Use in client and commercial projects',
      'Priority email support',
      '6 months of updates'
    ],
    limitations: []
  };

  const currentPackage = selectedPackage || defaultPackage;
  const IconComponent = currentPackage.icon;

  // Comprehensive list of all countries
  const allCountries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
    'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
    'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait',
    'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
    'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
    'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru',
    'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman',
    'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
    'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  // Filter countries based on search
  const filteredCountries = allCountries.filter(country =>
    country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const handleCountrySelect = (country: string) => {
    setFormData(prev => ({ ...prev, country }));
    setCountrySearch(country);
    setShowCountryDropdown(false);
  };

  const handleCountrySearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearch(e.target.value);
    setShowCountryDropdown(true);
    setFormData(prev => ({ ...prev, country: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      // Prepare data for API
      const packageToSave = {
        id: currentPackage.id,
        name: currentPackage.name,
        price: currentPackage.price,
      };

      const combinedData = {
        ...packageToSave,
        ...formData
      };

      console.log("Combined Data", combinedData);

      // Make API call to create user
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/createUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      // Success - redirect to Paystack
      if (data.authorizationUrl) {
        window.location.href = data.authorizationUrl;
      } else {
        throw new Error('Payment URL not received. Please try again.');
      }

    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.country-dropdown-container')) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Paystack Icon Component
  const PaystackIcon = () => (
    <div className="w-8 h-5 sm:w-10 sm:h-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded text-white text-xs flex items-center justify-center font-bold">
      PS
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="hidden sm:inline">Back to Packages</span>
              <span className="sm:hidden">Back</span>
            </button>
            
            <div className="flex items-center">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Package Details - Left Side */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Package Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className={`${currentPackage.bgColor} px-4 sm:px-6 py-4 border-b border-gray-200`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${currentPackage.bgColor} rounded-xl flex items-center justify-center mr-3 sm:mr-4`}>
                      <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${currentPackage.textColor}`} />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{currentPackage.name} Package</h2>
                      <p className="text-sm sm:text-base text-gray-600">{currentPackage.description}</p>
                    </div>
                  </div>
                  {currentPackage.popular && (
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium self-start sm:self-center">
                      Most Popular
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-baseline mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{currentPackage.price}</span>
                  {currentPackage.originalPrice && (
                    <span className="text-base sm:text-lg text-gray-500 line-through ml-2">{currentPackage.originalPrice}</span>
                  )}
                  <span className="text-sm sm:text-base text-gray-600 ml-2">one-time payment</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">What's included:</h3>
                  <div className="max-h-48 sm:max-h-none overflow-y-auto">
                    {currentPackage.features.map((feature, index) => (
                      <div key={index} className="flex items-start mb-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {currentPackage.limitations.length > 0 && (
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Limitations:</h3>
                    <div className="space-y-2">
                      {currentPackage.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-start">
                          <X className="h-4 w-4 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200 text-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 text-xs sm:text-sm">Secure Payment</div>
                <div className="text-xs text-gray-600">256-bit SSL encryption</div>
              </div>
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200 text-center">
                <Download className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 text-xs sm:text-sm">Instant Access</div>
                <div className="text-xs text-gray-600">Download immediately</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 sm:p-6 text-white">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-4 text-xs sm:text-sm leading-relaxed">
                "I launched my resume building service in just 48 hours! The code is clean, the templates are professional, and my clients love the user experience. I've already made back my investment 10 times over."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3">
                  SC
                </div>
                <div>
                  <div className="font-semibold text-white text-xs sm:text-sm">Sarah Chen</div>
                  <div className="text-blue-200 text-xs">Freelance Career Coach, Singapore</div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form - Right Side */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-2 sm:space-y-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Complete Your Purchase</h3>
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Secure checkout
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <h4 className="font-medium text-red-900">Payment Error</h4>
                    <p className="text-sm text-red-700 mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Contact Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4">Contact Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="mt-3 sm:mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">Download links will be sent to this email</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="country-dropdown-container relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="country"
                        required
                        value={countrySearch}
                        onChange={handleCountrySearchChange}
                        onFocus={() => setShowCountryDropdown(true)}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="Search for your country..."
                        autoComplete="off"
                      />
                      <Search className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                      
                      {showCountryDropdown && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-48 sm:max-h-60 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <button
                                key={country}
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                                className="w-full text-left px-3 sm:px-4 py-2 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none text-xs sm:text-sm border-b border-gray-100 last:border-b-0"
                              >
                                {country}
                              </button>
                            ))
                          ) : (
                            <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-500">
                              No countries found
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4">Payment Method</h4>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-center">
                      <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mr-2 sm:mr-3" />
                      <span className="font-medium text-gray-900 text-sm sm:text-base">Credit Card</span>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2 overflow-x-auto">
                      {/* Visa */}
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                        VISA
                      </div>
                      {/* Mastercard */}
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-gradient-to-r from-red-600 to-orange-500 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                        MC
                      </div>
                      {/* American Express */}
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                        AMEX
                      </div>
                      {/* Discover */}
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                        DISC
                      </div>
                      {/* Paystack */}
                      <div className="flex-shrink-0">
                        <PaystackIcon />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    Secure payment processing via <span className="font-semibold text-blue-600">Paystack</span>. Your card details are never stored on our servers.
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4">Order Summary</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">{currentPackage.name} Package</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{currentPackage.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Processing Fee</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">$0</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 sm:pt-3 flex justify-between items-center">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Total</span>
                    <span className="font-bold text-lg sm:text-xl text-gray-900">{currentPackage.price}</span>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-3 sm:space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">
                    I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> *
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="subscribeToUpdates"
                    checked={formData.subscribeToUpdates}
                    onChange={handleInputChange}
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">
                    Subscribe to product updates and exclusive offers
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !formData.agreeToTerms}
                className={`w-full bg-gradient-to-r ${currentPackage.color} hover:opacity-90 text-white font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center text-sm sm:text-base`}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                    <span className="hidden sm:inline">Processing Payment...</span>
                    <span className="sm:hidden">Processing...</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span className="hidden sm:inline">Complete Purchase - {currentPackage.price}</span>
                    <span className="sm:hidden">Purchase - {currentPackage.price}</span>
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  🔒 Your payment is secured with 256-bit SSL encryption via Paystack
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-8 sm:mt-16 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Resume Builder System?
              </span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Download className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Instant Access</h4>
              <p className="text-xs sm:text-sm text-gray-600">Download immediately after purchase</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Lifetime License</h4>
              <p className="text-xs sm:text-sm text-gray-600">Own it forever, no recurring fees</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">AI-Powered</h4>
              <p className="text-xs sm:text-sm text-gray-600">Advanced AI features included</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">4.9/5 Rating</h4>
              <p className="text-xs sm:text-sm text-gray-600">1,200+ satisfied customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;