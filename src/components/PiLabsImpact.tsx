
import React from "react";

const PiLabsImpact = () => {
  const impactStats = [
    {
      number: "1000+",
      title: "Investigations Empowered Daily",
      description: "Supporting law enforcement and forensic teams across high-stakes cases—every single day."
    },
    {
      number: "60%",
      title: "Reduction in Manual Workloads",
      description: "Automating analysis to save time, cut errors, and accelerate critical decisions."
    },
    {
      number: "25+",
      title: "Years of Cyber Forensics Expertise",
      description: "A legacy of trusted innovation in cybersecurity, digital forensics, and investigative technology."
    },
    {
      number: "5",
      title: "Patents & Counting",
      description: "Pioneering patented technologies to stay ahead of evolving digital threats."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="impact">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">The pi-labs Impact</h2>
          <p className="section-subtitle mx-auto">
            Transforming investigations and intelligence operations worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] text-center"
            >
              <div className="text-4xl font-bold text-pulse-500 mb-4">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PiLabsImpact;
