
import React from "react";
import { ArrowRight, Shield, Video, Database, Lock, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      name: "Authentify",
      title: "Deepfake Detection Solution",
      description: "Advanced AI-powered deepfake detection for video, audio, and images with real-time analysis capabilities",
      icon: Shield,
      href: "/pi-authentify",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      accentColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      name: "Sense",
      title: "AI-Driven Video Forensics",
      description: "Transform video evidence into actionable intelligence with automated analysis and pattern recognition",
      icon: Video,
      href: "/pi-sense",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      image: "/lovable-uploads/ddcc5ea3-82f4-43a4-81fc-349521291ed2.png",
      accentColor: "text-gray-600",
      borderColor: "border-gray-200"
    },
    {
      name: "Scout",
      title: "AI-Powered Data Fusion and Analytics Platform",
      description: "Unify disparate data sources into actionable intelligence with advanced correlation algorithms",
      icon: Database,
      href: "/pi-scout",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      accentColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      name: "SecureChain",
      title: "Blockchain-Based Digital Case and Evidence Management",
      description: "Secure, tamper-proof evidence management with blockchain technology and chain of custody verification",
      icon: Lock,
      href: "/pi-securechain",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      accentColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      name: "Vox",
      title: "AI-powered Audio Intelligence",
      description: "Convert voice to verifiable intelligence with multilingual support and speaker identification",
      icon: Mic,
      href: "/pi-vox",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      accentColor: "text-orange-600",
      borderColor: "border-orange-200"
    }
  ];

  return (
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

        {/* Enhanced Grid Layout */}
        <div className="max-w-6xl mx-auto">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {products.slice(0, 3).map((product, index) => (
              <div 
                key={product.name} 
                className={`${product.bgColor} ${product.borderColor} rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl border-2`}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md mr-4`}>
                      {React.createElement(product.icon, { className: `w-6 h-6 ${product.accentColor}` })}
                    </div>
                    <span className={`text-2xl font-bold ${product.accentColor}`}>{product.name}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  <Link 
                    to={product.href}
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 group-hover:translate-y-[-2px]"
                  >
                    LEARN MORE 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {product.image && (
                  <div className="absolute top-6 right-6 w-20 h-20 opacity-20 group-hover:opacity-30 transition-opacity">
                    <img src={product.image} alt="" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.slice(3, 5).map((product, index) => (
              <div 
                key={product.name} 
                className={`${product.bgColor} ${product.borderColor} rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl border-2`}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md mr-4`}>
                      {React.createElement(product.icon, { className: `w-6 h-6 ${product.accentColor}` })}
                    </div>
                    <span className={`text-2xl font-bold ${product.accentColor}`}>{product.name}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <Link 
                    to={product.href}
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 group-hover:translate-y-[-2px]"
                  >
                    LEARN MORE 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {product.image && (
                  <div className="absolute top-6 right-6 w-20 h-20 opacity-20 group-hover:opacity-30 transition-opacity">
                    <img src={product.image} alt="" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
