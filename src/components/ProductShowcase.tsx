
import React, { useState } from "react";
import { ArrowRight, Shield, Video, Database, Lock, Mic, X } from "lucide-react";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Authentify",
      title: "Deepfake Detection Solution",
      description: "Advanced AI-powered deepfake detection for video, audio, and images with real-time analysis capabilities",
      detailedDescription: "pi-authentify is an advanced deepfake detection engine designed to protect digital identities and ensure content authenticity. Using forensic-grade AI, it detects manipulated videos, images, and audio with unparalleled accuracy, empowering law enforcement agencies, governments and enterprises to prevent fraud, secure face authentication, and combat misinformation.",
      icon: Shield,
      href: "/pi-authentify",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      accentColor: "text-blue-600",
      borderColor: "border-blue-200",
      features: ["Multi-Modal Detection", "Real-Time Analysis", "Forensic-Grade Accuracy"]
    },
    {
      id: 2,
      name: "Sense",
      title: "AI-Driven Video Forensics",
      description: "Transform video evidence into actionable intelligence with automated analysis and pattern recognition",
      detailedDescription: "Advanced video forensics platform that transforms raw video evidence into actionable intelligence through automated analysis, pattern recognition, and intelligent metadata extraction for law enforcement and security professionals.",
      icon: Video,
      href: "/pi-sense",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      image: "/lovable-uploads/ddcc5ea3-82f4-43a4-81fc-349521291ed2.png",
      accentColor: "text-gray-600",
      borderColor: "border-gray-200",
      features: ["Automated Analysis", "Pattern Recognition", "Metadata Extraction"]
    },
    {
      id: 3,
      name: "Scout",
      title: "AI-Powered Data Fusion and Analytics Platform",
      description: "Unify disparate data sources into actionable intelligence with advanced correlation algorithms",
      detailedDescription: "Comprehensive data fusion platform that unifies disparate data sources into actionable intelligence through advanced correlation algorithms, real-time analytics, and intelligent threat detection for enhanced security operations.",
      icon: Database,
      href: "/pi-scout",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      accentColor: "text-purple-600",
      borderColor: "border-purple-200",
      features: ["Data Correlation", "Real-Time Analytics", "Threat Detection"]
    },
    {
      id: 4,
      name: "SecureChain",
      title: "Blockchain-Based Digital Case and Evidence Management",
      description: "Secure, tamper-proof evidence management with blockchain technology and chain of custody verification",
      detailedDescription: "Revolutionary blockchain-based evidence management system that ensures tamper-proof storage, maintains chain of custody integrity, and provides cryptographic verification for digital evidence in legal proceedings.",
      icon: Lock,
      href: "/pi-securechain",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      accentColor: "text-green-600",
      borderColor: "border-green-200",
      features: ["Blockchain Security", "Chain of Custody", "Cryptographic Verification"]
    },
    {
      id: 5,
      name: "Vox",
      title: "AI-powered Audio Intelligence",
      description: "Convert voice to verifiable intelligence with multilingual support and speaker identification",
      detailedDescription: "Advanced audio intelligence platform that converts voice communications into verifiable intelligence through multilingual processing, speaker identification, and real-time transcription for security and investigation purposes.",
      icon: Mic,
      href: "/pi-vox",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      accentColor: "text-orange-600",
      borderColor: "border-orange-200",
      features: ["Multilingual Support", "Speaker ID", "Real-Time Transcription"]
    }
  ];

  const selectedProductData = selectedProduct ? products.find(p => p.id === selectedProduct) : null;
  const otherProducts = selectedProduct ? products.filter(p => p.id !== selectedProduct) : products;

  const handleCardClick = (productId: number) => {
    setSelectedProduct(productId);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="py-20 sm:py-24 md:py-28 bg-white relative overflow-hidden" id="products">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full opacity-30 blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-pulse-100 text-pulse-600 text-sm font-medium mb-6">
              Our Solutions
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered solutions for forensics, security, and intelligence operations
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className={`${product.bgColor} ${product.borderColor} rounded-3xl p-6 relative overflow-hidden cursor-pointer transition-all duration-500 shadow-lg hover:shadow-xl border-2 hover:scale-[1.02]`}
                onClick={() => handleCardClick(product.id)}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-md mr-3`}>
                      {React.createElement(product.icon, { className: `w-5 h-5 ${product.accentColor}` })}
                    </div>
                    <span className={`text-xl font-bold ${product.accentColor}`}>{product.name}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="text-sm text-gray-500 font-medium">
                    Click to explore →
                  </div>
                </div>
                
                {product.image && (
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-20 transition-opacity">
                    <img src={product.image} alt="" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Expanded View - Rendered as Portal */}
      {selectedProduct && selectedProductData && (
        <div className="fixed inset-0 z-[9999] bg-white">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-[10000]"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex h-full">
            {/* Main Expanded Product */}
            <div className="flex-1 relative overflow-hidden">
              <div className={`${selectedProductData.bgColor} h-full flex items-center justify-center relative`}>
                {/* Background Image */}
                {selectedProductData.image && (
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src={selectedProductData.image} 
                      alt={selectedProductData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
                  <div className="inline-flex items-center justify-center mb-8">
                    <div className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg mr-6`}>
                      {React.createElement(selectedProductData.icon, { className: `w-10 h-10 ${selectedProductData.accentColor}` })}
                    </div>
                    <div className="text-left">
                      <h1 className={`text-4xl font-bold ${selectedProductData.accentColor} mb-2`}>
                        {selectedProductData.name}
                      </h1>
                      <p className="text-gray-600 text-lg">
                        {selectedProductData.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {selectedProductData.detailedDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {selectedProductData.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={selectedProductData.href}
                    className="inline-flex items-center justify-center px-12 py-4 bg-white text-gray-800 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    EXPLORE MORE 
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Side Panel with Other Products */}
            <div className="w-80 bg-gray-50 border-l border-gray-200 overflow-y-auto p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Other Products</h3>
              <div className="space-y-4">
                {otherProducts.map((product) => (
                  <div 
                    key={product.id}
                    className={`${product.bgColor} ${product.borderColor} rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:shadow-md border`}
                    onClick={() => handleCardClick(product.id)}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-white shadow-sm mr-3`}>
                        {React.createElement(product.icon, { className: `w-4 h-4 ${product.accentColor}` })}
                      </div>
                      <span className={`text-sm font-bold ${product.accentColor}`}>{product.name}</span>
                    </div>
                    
                    <h4 className="text-sm font-medium text-gray-800 mb-2 leading-tight">
                      {product.title}
                    </h4>
                    
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {product.description.slice(0, 80)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductShowcase;
