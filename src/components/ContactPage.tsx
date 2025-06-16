import React, { useState } from "react";
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Globe,
  Users,
  Headphones,
  Zap,
  Shield,
  Star,
  ExternalLink,
} from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
    priority: "normal",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "general",
        message: "",
        priority: "normal",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      value: "welcome@topresumeai.com",
      action: "Send Email",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    // {
    //   icon: MessageCircle,
    //   title: "Live Chat",
    //   description: "Chat with our team",
    //   value: "Available 24/7",
    //   action: "Start Chat",
    //   color: "from-green-500 to-emerald-500",
    //   bgColor: "bg-green-50",
    //   textColor: "text-green-600",
    // },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      value: "+254793927966",
      action: "Call Now",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  const supportCategories = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "billing", label: "Billing & Payments" },
    { value: "customization", label: "Styling & Customization" },
    { value: "deployment", label: "Deployment Help" },
    { value: "feature", label: "Feature Request" },
    { value: "bug", label: "Bug Report" },
    { value: "partnership", label: "Partnership" },
  ];

  const faqItems = [
    {
      question: "How quickly will I receive support?",
      answer:
        "We typically respond within 24 hours for general inquiries and within 4 hours for technical issues.",
    },
    {
      question: "Do you offer setup assistance?",
      answer:
        "Yes! Professional+ packages include styling services, and we offer optional setup support for $30.",
    },
    {
      question: "Can you help with customization?",
      answer:
        "Absolutely! Professional+ packages include our styling services where we customize your platform to match your brand.",
    },
    {
      question: "What if I need urgent help?",
      answer:
        'For urgent issues, use our live chat or mark your email as "High Priority" for faster response.',
    },
  ];

  const supportStats = [
    { icon: Users, value: "1,200+", label: "Happy Customers" },
    { icon: Clock, value: "< 24h", label: "Response Time" },
    { icon: Star, value: "4.9/5", label: "Support Rating" },
    { icon: Globe, value: "50+", label: "Countries Served" },
  ];

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
              <span className="hidden sm:inline">Back to Homepage</span>
              <span className="sm:hidden">Back</span>
            </button>

            <div className="flex items-center">
              <Headphones className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                24/7 Support Available
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Touch
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6">
            Have questions about our AI-powered resume builder system? Need help
            with setup or customization? We're here to help you succeed.
          </p>

          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            <span>Average response time: Under 24 hours</span>
          </div>
        </div>

        {/* Support Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {supportStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3" />
                    <div>
                      <h4 className="font-medium text-green-900 text-sm sm:text-base">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs sm:text-sm text-green-700 mt-1">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
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
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      {supportCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Please describe your question or issue in detail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className={`w-full font-semibold px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center text-sm sm:text-base ${
                    isSubmitting || submitStatus === "success"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                      <span className="hidden sm:inline">
                        Sending Message...
                      </span>
                      <span className="sm:hidden">Sending...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={index}
                      className="group p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-200 hover:border-gray-300"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${method.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent
                            className={`h-5 w-5 sm:h-6 sm:w-6 ${method.textColor}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                            {method.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 truncate">
                            {method.description}
                          </p>
                          <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                            {method.value}
                          </p>
                        </div>
                      </div>
                      <button
                        className={`w-full mt-3 bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm`}
                      >
                        {method.action}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Quick Answers
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-b-0 pb-3 sm:pb-4 last:pb-0"
                  >
                    <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                      {item.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Support Hours
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-xs sm:text-sm">
                    Email Support
                  </span>
                  <span className="text-white font-medium text-xs sm:text-sm">
                    24/7
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-xs sm:text-sm">
                    Live Chat
                  </span>
                  <span className="text-white font-medium text-xs sm:text-sm">
                    24/7
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-xs sm:text-sm">
                    Phone Support
                  </span>
                  <span className="text-white font-medium text-xs sm:text-sm">
                    9 AM - 6 PM EST
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                <div className="flex items-center">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                  <span className="text-blue-100 text-xs sm:text-sm">
                    Guaranteed response within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Still Have{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Questions?
              </span>
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Check out our comprehensive documentation or browse our community
              forum for answers
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                View Documentation
              </button>
              <button className="border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center text-sm sm:text-base">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
