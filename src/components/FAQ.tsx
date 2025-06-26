
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Pi-Labs and what do you do?",
      answer: "Pi-Labs is an AI-powered technology company specializing in forensics, security, and intelligence solutions. We develop advanced AI tools for deepfake detection, video forensics, data fusion, evidence management, and audio intelligence to help law enforcement, government agencies, and enterprises combat digital threats."
    },
    {
      question: "How accurate are your AI detection systems?",
      answer: "Our AI systems are trained on millions of datasets to ensure forensic-grade accuracy. We continuously evolve our detection algorithms to counter emerging threats, delivering explainable insights with high precision rates suitable for court-admissible evidence."
    },
    {
      question: "Can your solutions integrate with existing systems?",
      answer: "Yes, all our products offer flexible integration options including APIs, SDKs, and multiple deployment models (cloud and on-premise). This allows seamless integration into existing security frameworks, workflows, and digital ecosystems."
    },
    {
      question: "Which industries do you serve?",
      answer: "We serve law enforcement agencies, government and defense organizations, financial institutions, media companies, and enterprises across various sectors that require digital forensics, security verification, and threat detection capabilities."
    },
    {
      question: "Do you offer real-time analysis capabilities?",
      answer: "Yes, our solutions are optimized for real-time analysis including live stream monitoring, video call verification, and instant media uploads. Our low-latency processing ensures fast, accurate results for time-sensitive applications."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We follow strict data privacy protocols and offer flexible deployment options including on-premise solutions. Our systems are designed with security-first architecture, ensuring your sensitive data remains protected throughout the analysis process."
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-pulse-100 text-pulse-600 text-sm font-medium mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Got Questions?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our AI-powered solutions and services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-pulse-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
