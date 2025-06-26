
import React from "react";
import { ArrowRight, Shield, Video, Database, Lock, Mic } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      name: "pi-authentify",
      title: "Deepfake Detection Solution",
      description: "Advanced AI-powered deepfake detection for video, audio, and images. Protect against synthetic media threats with forensic-grade accuracy.",
      icon: Shield,
      href: "/pi-authentify"
    },
    {
      name: "pi-sense",
      title: "AI-Driven Video Forensics",
      description: "Transform video evidence into actionable intelligence. Automated tampering detection, face recognition, and forensic analysis.",
      icon: Video,
      href: "/pi-sense"
    },
    {
      name: "pi-scout",
      title: "AI-Powered Data Fusion and Analytics Platform",
      description: "Unify disparate data sources into actionable intelligence. Multi-modal data analysis for faster investigations.",
      icon: Database,
      href: "/pi-scout"
    },
    {
      name: "pi-securechain",
      title: "Blockchain-Based Digital Case and Evidence Management",
      description: "Secure, tamper-proof evidence management with blockchain technology. Maintain chain of custody with absolute integrity.",
      icon: Lock,
      href: "/pi-securechain"
    },
    {
      name: "pi-vox",
      title: "AI-powered Audio Intelligence",
      description: "Convert voice to verifiable intelligence. Multilingual transcription, speaker diarization, and audio forensics.",
      icon: Mic,
      href: "/pi-vox"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="products">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">What pi-labs products deliver?</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Intelligence at Speed: Empowering Investigators with AI-Powered Precision
                </h3>
                <p className="text-gray-600">
                  Advanced forensics using AI: Multimodal intelligent data analysis, data provenance and evidence integrity
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Trust in the Age of AI: Deepfake detection, protecting the truth
                </h3>
                <p className="text-gray-600">
                  Accelerate investigations and justice: Turning manual hours into instant insights
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Products</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pulse-100 rounded-lg flex items-center justify-center mr-4">
                  <product.icon className="w-6 h-6 text-pulse-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-pulse-600 uppercase tracking-wide">
                    {product.name}
                  </h4>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <a 
                href={product.href} 
                className="inline-flex items-center text-pulse-600 font-medium group-hover:text-pulse-700 transition-colors"
              >
                Know More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
