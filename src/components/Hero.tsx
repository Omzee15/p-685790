
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Handle scroll for logo animation
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate logo transform based on scroll
  const getLogoTransform = () => {
    const maxScroll = 300; // Distance to complete the animation
    const progress = Math.min(scrollY / maxScroll, 1);
    
    // Logo shrinks from h-40 (160px) to h-8 (32px)
    const initialSize = 160;
    const finalSize = 32;
    const currentSize = initialSize - (initialSize - finalSize) * progress;
    
    // Calculate exact position to land in header
    // Header height is approximately 64px (py-4), logo should be centered in header
    const headerHeight = 64;
    const logoFinalY = headerHeight / 2; // Center of header from top
    
    // Move logo from center to exact header position
    const viewportHeight = window.innerHeight;
    const startY = (viewportHeight / 2) - 150; // Starting position (moved higher up from -60 to -120)
    const endY = logoFinalY; // Final position in header
    const currentY = startY - (startY - endY) * progress;
    
    // Opacity for other content
    const contentOpacity = Math.max(0, 1 - progress * 2);
    
    return {
      size: currentSize,
      currentY,
      contentOpacity,
      logoOpacity: scrollY < maxScroll ? 1 : 0, // Hide when fully scrolled
      showInHeader: scrollY >= maxScroll // Show in header when animation complete
    };
  };

  const { size, currentY, contentOpacity, logoOpacity, showInHeader } = getLogoTransform();
  
  return (
    <section 
      className="overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50" 
      id="hero" 
      style={{
        minHeight: '100vh'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-purple-200 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 py-8" ref={containerRef}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Logo */}
          <div 
            ref={logoRef}
            className="fixed left-1/2 z-50 transition-all duration-300 ease-out"
            style={{
              top: `${currentY}px`, // Exact position from top of viewport
              transform: `translateX(-50%)`, // Only center horizontally
              opacity: logoOpacity,
              pointerEvents: scrollY > 200 ? 'none' : 'auto'
            }}
          >
            <img 
              src="/pilabs-dark copy.svg" 
              alt="Pi-Labs" 
              style={{ 
                height: `${size}px`,
                width: 'auto',
                transition: 'all 0.3s ease-out'
              }}
            />
          </div>

          {/* Action buttons with fade animation */}
          <div style={{ opacity: contentOpacity, transition: 'opacity 0.3s ease-out' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-60">
              <a 
                href="#products" 
                className="flex items-center justify-center group w-full sm:w-auto text-center" 
                style={{
                  backgroundColor: '#3355FF',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px',
                  border: '1px solid white',
                }}
              >
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center w-full sm:w-auto text-center bg-white/20 backdrop-blur-sm border border-white/30 text-gray-900 font-medium py-4 px-6 rounded-full transition-all duration-300 hover:bg-white/30"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
