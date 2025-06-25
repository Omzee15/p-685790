
import React from "react";

const ClientsCarousel = () => {
  const clientLogos = [
    {
      name: "Dell",
      logo: "/lovable-uploads/f283a4cd-87ca-4e61-9b23-0a9e5be542d1.png"
    },
    {
      name: "NVIDIA Inception Program",
      logo: "/lovable-uploads/e8ce71fe-2100-4b9c-820d-289edc111666.png"
    },
    {
      name: "Nextechno Gen",
      logo: "/lovable-uploads/0ba7852e-f6c6-49ab-9055-53ba2f2bac01.png"
    },
    {
      name: "Pelorus",
      logo: "/lovable-uploads/c6c44a47-9cd6-4bc7-bed9-0f0378e9bc84.png"
    },
    {
      name: "Starlight Data Solutions",
      logo: "/lovable-uploads/0864af1f-909a-4426-8ea3-c5dabd0d4489.png"
    },
    {
      name: "Pi-Labs",
      logo: "/lovable-uploads/e540ef49-6d5c-4ae4-9b7e-e5eba814e2e0.png"
    }
  ];

  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="clients">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">Trusted by Industry Leaders</h2>
          <p className="section-subtitle mx-auto">
            We are proud to work with leading organizations and partners worldwide
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 lg:space-x-16">
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
