
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";

const ProductsOverview = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-pulse-100 text-pulse-600 text-sm font-medium mb-6">
            Our Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered solutions for forensics, security, and intelligence operations. 
            Discover how our cutting-edge technology is transforming digital security and investigation capabilities.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />
      
      <Footer />
    </div>
  );
};

export default ProductsOverview;
