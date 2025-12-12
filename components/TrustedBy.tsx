"use client";

export const TrustedBy = () => {
  const companies = [
    { 
      name: "Shopify", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
    },
    { 
      name: "Klarna", 
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Klarna-Logo.png"
    },
    { 
      name: "Reddit", 
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Reddit-Logo.png"
    },
    { 
      name: "Jelly Belly", 
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Jelly-Belly-Logo.png"
    },
    { 
      name: "Instacart", 
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Instacart-Logo.png"
    },
    { 
      name: "On", 
      logo: "https://logos-world.net/wp-content/uploads/2021/08/On-Running-Logo.png"
    },
  ];

  // Duplicate companies for seamless scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="w-full py-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-700 font-semibold mb-8 text-sm uppercase tracking-wide">
          Work Well Advisors is Trusted by 35,000+ Companies from Startups to Enterprise Businesses
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal whitespace-nowrap items-center h-16">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="inline-flex items-center justify-center mx-8 h-16 opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain filter brightness-0"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-gray-800 font-semibold text-lg">${company.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

