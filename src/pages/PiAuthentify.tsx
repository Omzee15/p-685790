
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Clock, FileText, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PiAuthentify = () => {
  const features = [
    {
      title: "Multi-Modal Deepfake Detection",
      description: "Detects manipulation in audio, video, and images using advanced, patented AI algorithms.",
      icon: Shield
    },
    {
      title: "Deep File Forensics",
      description: "Pinpoints and highlights tampered segments for deeper forensic validation.",
      icon: Eye
    },
    {
      title: "Explainable AI Insights",
      description: "Offers transparency and rationale behind every detection, ensuring user trust.",
      icon: FileText
    },
    {
      title: "Flexible Deployment Options",
      description: "Supports on-premise infrastructure or scalable cloud-based deployment.",
      icon: Zap
    },
    {
      title: "Real-Time Detection",
      description: "Optimized for high-speed analysis of live streams, video calls, and media uploads.",
      icon: Clock
    },
    {
      title: "Court-ready Reports",
      description: "Generate in-depth, court-admissible forensic documentation post-analysis.",
      icon: FileText
    },
    {
      title: "API and SDK Integration",
      description: "Seamlessly integrates into existing platforms and digital ecosystems.",
      icon: Zap
    },
    {
      title: "User-Friendly UI",
      description: "Intuitive dashboards designed for quick onboarding and efficient use by all stakeholders.",
      icon: Users
    }
  ];

  const whyReasons = [
    "Safeguard Legal Evidence",
    "Protect National Security", 
    "Stop Identity Frauds",
    "Combat Fake News",
    "Prevent Digital Exploitation – CSAM/CSEM",
    "Strengthen Cybercrime Response",
    "Preserve Public Trust"
  ];

  const statistics = [
    { value: "300%", label: "Rise in India's deepfakes in Q4 2024" },
    { value: "1200%", label: "Rise in deepfake cases reported between 2021 and 2024" },
    { value: "1 out of 2", label: "Cyberfraud reported involved AI manipulations" },
    { value: "4X", label: "Web AI-CSAM crimes since 2023" },
    { value: "31X", label: "Rise in Deepfake KYC bypass since 2023" },
    { value: "INR 11K Crore", label: "Financial fraud losses in H1 2024" }
  ];

  const faqs = [
    {
      question: "What is pi-authentify and how does it detect deepfakes?",
      answer: "pi-authentify is a deepfake detection solution developed by pi-labs to identify AI-generated and AI-manipulated video, audio, and image content. Using AI++ enabled forensic technology, it separates synthetic content from real media with high precision, helping businesses and governments verify reality and protect digital trust."
    },
    {
      question: "Why is deepfake detection important for enterprises and governments?",
      answer: "Deepfakes are being used in recruitment scams, financial fraud, misinformation campaigns, and even national security threats. Detecting and preventing deepfakes helps protect organizations from reputational harm, identity theft, and data breaches while ensuring the authenticity of digital communications."
    },
    {
      question: "How does pi-authentify integrate with existing enterprise systems?",
      answer: "pi-authentify offers flexible API integrations and multiple deployment options—including cloud and on-premise—to seamlessly fit into existing security frameworks, workflows, or identity verification systems. This makes it easy to scale and customize for organizations of all sizes."
    },
    {
      question: "What types of content can pi-authentify analyze for deepfakes?",
      answer: "pi-authentify supports detection of synthetic videos, deepfake audios, voice clones, and AI-manipulated images. It can identify subtle manipulations across multiple formats and languages, providing comprehensive protection for digital assets."
    },
    {
      question: "Is pi-authentify suitable for real-time deepfake detection?",
      answer: "Yes. pi-authentify's low-latency processing capabilities allow it to analyze content in real time—making it ideal for applications like live video interviews, video-KYC, or fraud prevention in fast-paced digital environments."
    },
    {
      question: "Which industries benefit the most from pi-authentify's deepfake detection?",
      answer: "Industries such as law enforcement, national security, banking and finance, media & entertainment, and customer support/BPOs benefit significantly from deepfake detection. pi-authentify helps safeguard these sectors from fraud, misinformation, and compliance risks."
    },
    {
      question: "How accurate is pi-authentify's detection engine?",
      answer: "pi-authentify is trained on millions of datasets to ensure forensic-grade accuracy. Its AI inference engine continuously evolves to counter emerging deepfake threats, delivering explainable insights and tamper-proof evidence with every scan."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">pi-authentify</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-red-400">
              Exposing the dark side of AI
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Detecting Deepfake Video, Audio & Images
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Try Authentify
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl leading-relaxed text-gray-700">
            pi-authentify is an advanced deepfake detection engine designed to protect digital identities and ensure content authenticity. Using forensic-grade AI, it detects manipulated videos, images, and audio with unparalleled accuracy, empowering law enforcement agencies, governments and enterprises to prevent fraud, secure face authentication, and combat misinformation.
          </p>
          <p className="text-2xl font-semibold mt-8 text-gray-900">
            pi-authentify ensures seeing is believing in an AI-First world
          </p>
        </div>
      </section>

      {/* Why Deepfake Detection is Critical */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Deepfake Detection is Critical
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As deepfake technology becomes more accessible, its misuse poses unprecedented challenges across national security, law enforcement, enterprise integrity, and digital trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyReasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-600 w-6 h-6 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{reason}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Rapid Rise of Deepfake: Truth Under Attack
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center bg-red-800 p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
                  {stat.value}
                </div>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              pi-authentify Features
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who uses pi-authentify?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Forensic Labs & Cybercrime Agencies</h3>
              <p className="text-gray-600 mb-4 italic">"What if the video evidence you're relying on was never real? Deepfakes aren't just a tech novelty. They're a weapon."</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Impersonation & Identity Theft</li>
                <li>• Non-Consensual Explicit Content</li>
                <li>• Financial Fraud & Scams</li>
                <li>• Political Disinformation</li>
                <li>• Legal Disputes & Evidence Tampering</li>
                <li>• Celebrity & Brand Impersonation</li>
                <li>• Cyberbullying & Online Harassment</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Defence & Intelligence Agencies</h3>
              <p className="text-gray-600 mb-4">Deepfake detection tools are becoming critical assets for defence and intelligence agencies, as deepfakes pose serious threats to national security, information warfare, and public trust.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Countering Disinformation & PsyOps</li>
                <li>• Protecting National Security</li>
                <li>• Defense Against Deepfake-Assisted Cyber Operations</li>
                <li>• Intelligence Gathering & Source Verification</li>
                <li>• Media Forensics in Military Investigations</li>
                <li>• Election Security & Information Warfare</li>
                <li>• Training & Simulation Awareness</li>
                <li>• Insider Threat & Counterintelligence</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">BFSI & Other Enterprises</h3>
              <p className="text-gray-600 mb-4">Deepfakes are the new frontier in financial crimes. They is becoming a major target for deepfake-related fraud, and thus has strong reasons for the enterprises to adopt deepfake detection tools.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Preventing Financial Fraud</li>
                <li>• Verifying Customer Identity (KYC)</li>
                <li>• Securing Video-Based Services</li>
                <li>• Protecting Internal Communications</li>
                <li>• Regulatory Compliance & Risk Management</li>
                <li>• Claims Verification in Insurance</li>
                <li>• Brand & Reputation Protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Authentify */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Authentify?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Trained on Extensive Datasets</h3>
                <p className="text-blue-100">Proprietary models developed with millions of data points for industry-leading detection accuracy.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-blue-100">Flexible architecture that integrates efficiently into existing security and workflow systems.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Format Support</h3>
                <p className="text-blue-100">Advanced detection capabilities across video, audio, image, and text content in multiple languages.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Forensic-Grade Reporting</h3>
                <p className="text-blue-100">Transparent evidence documentation with explainable AI.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Low Latency Processing</h3>
                <p className="text-blue-100">Real-time analysis capabilities for time-sensitive verification requirements.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Model Evolution</h3>
                <p className="text-blue-100">Regular updates to detection algorithms to counter emerging deepfake technologies and techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Authentify Form */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Try Authentify</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to protect your organization from deepfake threats? Get started with pi-authentify today.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            Request Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 py-6">
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

      <Footer />
    </div>
  );
};

export default PiAuthentify;
