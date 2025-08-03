export interface Product {
  id: string
  name: string
  slug: string
  shortDescription: string
  fullDescription: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  images: string[]
  features: string[]
  specifications: Record<string, string>
  inStock: boolean
  stockCount?: number
  category: string
}

export const products: Product[] = [
  {
    id: "faucet-filter",
    name: "HydraLux Faucet-Mounted Water Filter",
    slug: "faucet-mounted-water-filter",
    shortDescription: "Transform your tap water into a source of pure wellness with advanced multi-stage filtration that removes harmful contaminants while preserving essential minerals.",
    fullDescription: "Experience the transformative power of truly clean water with HydraLux's advanced faucet filtration system. Our scientifically-engineered multi-stage filtration technology eliminates 99.9% of chlorine, heavy metals, pesticides, and over 70 contaminants that can compromise your family's health. Unlike basic filters, our system preserves beneficial minerals like calcium and magnesium that support bone health, cardiovascular function, and optimal hydration at the cellular level. The medical-grade filtration removes carcinogenic compounds while maintaining the natural pH balance your body craves. Studies show that filtered water can improve skin hydration by up to 25%, enhance nutrient absorption, and reduce inflammation markers. The premium chrome finish isn't just beautiful—it's antimicrobial, preventing bacterial growth. Installation takes under 3 minutes with our patented quick-connect system, and the intelligent filter indicator ensures you never compromise on water quality. Upgrade to HydraLux and feel the difference pure water makes in your energy, skin clarity, and overall vitality.",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 342,
    images: [
      "/images/products/faucet-filter-main.svg",
      "/images/products/faucet-filter-installed.svg",
      "/images/products/faucet-filter-lifestyle.svg",
      "/images/products/faucet-filter-unboxing.svg"
    ],
    features: [
      "Removes 99% of chlorine and bad taste",
      "Easy twist-on installation",
      "Chrome finish matches kitchen décor",
      "Compact design doesn't obstruct sink",
      "Filter indicator shows when to replace",
      "NSF certified filtration technology"
    ],
    specifications: {
      "Filter Life": "2-3 months or 200 gallons",
      "Flow Rate": "0.5 gallons per minute",
      "Dimensions": "4.5\" x 3\" x 3\"",
      "Weight": "1.2 lbs",
      "Material": "Chrome-plated brass",
      "Certifications": "NSF/ANSI 42 & 53"
    },
    inStock: true,
    stockCount: 47,
    category: "Kitchen"
  },
  {
    id: "adventure-bottle",
    name: "HydraLux Adventure Bottle Filter",
    slug: "adventure-bottle-filter",
    shortDescription: "Revolutionary portable filtration that transforms any water source into pure, safe hydration—eliminating 99.99% of pathogens while boosting your adventure confidence.",
    fullDescription: "Unleash your adventurous spirit with the confidence that comes from having access to pure, life-sustaining water anywhere on Earth. The HydraLux Adventure Bottle doesn't just filter water—it creates a mobile sanctuary of health that eliminates waterborne diseases that affect over 2 billion people globally. Our proprietary hollow fiber membrane technology removes bacteria, parasites, microplastics, and viruses down to 0.1 microns, while the activated carbon core neutralizes chemical pollutants and heavy metals that can accumulate in your system over time. Clinical studies demonstrate that proper hydration with clean water enhances athletic performance by up to 15%, improves cognitive function, and accelerates recovery after physical exertion. The BPA-free Tritan construction is virtually unbreakable and won't leach harmful chemicals even under extreme conditions. Each bottle purifies 1,000 liters—equivalent to 2,000 plastic bottles, making it an investment in both your health and environmental stewardship. Whether you're scaling mountains, exploring remote destinations, or preparing for emergencies, this isn't just a water bottle—it's your personal health insurance policy that ensures every sip contributes to your vitality and peak performance.",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviewCount: 567,
    images: [
      "/images/products/adventure-bottle-main.svg",
      "/images/products/adventure-bottle-outdoor.svg",
      "/images/products/adventure-bottle-lifestyle.svg",
      "/images/products/adventure-bottle-action.svg"
    ],
    features: [
      "Removes 99.99% of bacteria and parasites",
      "Filters up to 1,000 liters",
      "BPA-free Tritan plastic construction",
      "Leak-proof design with carabiner clip",
      "Works with any freshwater source",
      "No batteries or pumping required"
    ],
    specifications: {
      "Filter Life": "1,000 liters or 6 months",
      "Bottle Capacity": "22 oz (650ml)",
      "Dimensions": "9.5\" x 3\" diameter",
      "Weight": "6.2 oz",
      "Material": "BPA-free Tritan plastic",
      "Certifications": "EPA certified"
    },
    inStock: true,
    stockCount: 23,
    category: "Outdoor"
  },
  {
    id: "shower-head",
    name: "HydraLux High-Pressure Shower Head with Inner Filter",
    slug: "high-pressure-shower-head-filter",
    shortDescription: "Transform your daily shower into a rejuvenating wellness ritual that filters harmful chemicals while delivering invigorating pressure for radiant skin and lustrous hair.",
    fullDescription: "Elevate your daily self-care ritual with a shower experience that doesn't just cleanse—it actively restores and revitalizes your skin and hair while protecting your long-term health. Our precision-engineered shower head combines therapeutic high-pressure technology with medical-grade filtration that removes chlorine, chloramines, heavy metals, and chemical residues that municipal water treatment can't eliminate. Chlorine alone can strip your skin's natural moisture barrier, leading to premature aging, eczema flare-ups, and brittle hair. Our advanced filtration system preserves your skin's natural pH and oils, resulting in visibly softer skin, reduced irritation, and hair that's 40% shinier and stronger according to dermatological studies. The negative ion technology we've integrated actually improves air quality in your bathroom while the mineral-rich filtered water enhances circulation and promotes lymphatic drainage. Six customizable spray patterns let you create your perfect pressure therapy—from gentle rainfall for sensitive skin to invigorating massage jets that relieve muscle tension and boost circulation. This isn't just about clean water; it's about transforming your shower into a daily spa treatment that leaves you energized, confident, and glowing from the inside out.",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviewCount: 289,
    images: [
      "/images/products/shower-head-main.svg",
      "/images/products/shower-head-close-up.svg",
      "/images/products/shower-head-lifestyle.svg",
      "/images/products/shower-head-installed.svg"
    ],
    features: [
      "Increases water pressure up to 200%",
      "Removes chlorine and heavy metals",
      "6 spray settings for customized experience",
      "Easy tool-free installation",
      "Durable chrome finish",
      "Replaceable filter cartridge"
    ],
    specifications: {
      "Filter Life": "6-8 months",
      "Spray Settings": "6 modes",
      "Dimensions": "4.3\" diameter x 3.5\" deep",
      "Weight": "1.8 lbs",
      "Material": "Chrome-plated ABS",
      "Thread Size": "1/2\" NPT"
    },
    inStock: true,
    stockCount: 15,
    category: "Bathroom"
  },
  {
    id: "bidet-sprayer",
    name: "HydraLux Dual-Nozzle Bidet Sprayer",
    slug: "dual-nozzle-bidet-sprayer",
    shortDescription: "Revolutionary dual-nozzle bidet system that elevates personal hygiene while protecting intimate health, reducing environmental impact, and providing spa-level cleanliness.",
    fullDescription: "Discover the profound wellness benefits of superior personal hygiene with HydraLux's precision-engineered bidet system that represents the pinnacle of intimate care technology. This isn't just about cleanliness—it's about embracing a lifestyle that prioritizes health, sustainability, and personal comfort in ways that dramatically improve your daily well-being. Our dual-nozzle system features targeted feminine and posterior wash functions with adjustable pressure control, ensuring optimal hygiene that reduces bacterial infections, UTIs, and inflammation by up to 60% according to urological studies. The gentle water cleansing preserves your skin's natural microbiome while removing irritants that toilet paper can't address, leading to reduced hemorrhoids, anal fissures, and feminine discomfort. Environmental health experts confirm that switching to a bidet eliminates 15 million tons of trees annually while reducing your household's carbon footprint by 80%. The self-cleaning retractable nozzles use antimicrobial technology that prevents bacterial buildup, while the precision water pressure provides therapeutic benefits that improve circulation and reduce inflammation. Clinical research shows regular bidet use can alleviate symptoms of IBS, improve post-surgical recovery, and enhance overall intimate health. This investment in your wellness pays dividends in reduced medical costs, enhanced comfort, and the confidence that comes from the highest standard of personal care.",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviewCount: 178,
    images: [
      "/images/products/bidet-sprayer-main.svg",
      "/images/products/bidet-sprayer-detail.svg",
      "/images/products/bidet-sprayer-lifestyle.svg",
      "/images/products/bidet-sprayer-installed.svg"
    ],
    features: [
      "Dual nozzles with adjustable pressure",
      "Self-cleaning retractable nozzles",
      "Easy installation on existing toilet",
      "Pressure control knob",
      "Reduces toilet paper usage by 80%",
      "Hygienic and eco-friendly"
    ],
    specifications: {
      "Nozzle Types": "Rear and feminine wash",
      "Pressure Range": "Low to high adjustable",
      "Dimensions": "15.7\" x 13.4\" x 3.1\"",
      "Weight": "3.2 lbs",
      "Material": "High-grade plastic and metal",
      "Compatibility": "Most standard toilets"
    },
    inStock: true,
    stockCount: 8,
    category: "Bathroom"
  }
]

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 3)
}