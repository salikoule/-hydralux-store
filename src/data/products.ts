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
    shortDescription: "Instant access to clean, filtered tap water with sleek chrome finish and easy installation.",
    fullDescription: "Transform your kitchen tap into a premium water filtration system. Our faucet-mounted filter removes chlorine, sediment, and bad taste while maintaining beneficial minerals. The sleek chrome finish complements any kitchen décor, and installation takes just minutes with no tools required.",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 342,
    images: [
      "/images/faucet-filter-1.jpg",
      "/images/faucet-filter-2.jpg",
      "/images/faucet-filter-3.jpg",
      "/images/faucet-filter-unboxing.jpg"
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
    shortDescription: "Removes 99.99% of bacteria and contaminants, making dirty water safe to drink anywhere.",
    fullDescription: "Never worry about water quality during your outdoor adventures. This portable water filter bottle uses advanced filtration technology to remove bacteria, parasites, and contaminants from any freshwater source. Perfect for hiking, camping, travel, and emergency preparedness.",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviewCount: 567,
    images: [
      "/images/adventure-bottle-1.jpg",
      "/images/adventure-bottle-2.jpg",
      "/images/adventure-bottle-3.jpg",
      "/images/adventure-bottle-action.jpg"
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
    shortDescription: "Boosts water pressure while filtering impurities for a spa-like experience at home.",
    fullDescription: "Upgrade your daily shower routine with our revolutionary shower head that combines high-pressure technology with advanced filtration. Remove chlorine, heavy metals, and impurities while enjoying increased water pressure and a luxurious spa-like experience.",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviewCount: 289,
    images: [
      "/images/shower-head-1.jpg",
      "/images/shower-head-2.jpg",
      "/images/shower-head-3.jpg",
      "/images/shower-head-installed.jpg"
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
    shortDescription: "Two adjustable spray modes designed for seated toilets. Clean, refreshing, and eco-friendly.",
    fullDescription: "Experience the ultimate in personal hygiene with our premium bidet sprayer. Featuring dual nozzles with adjustable pressure settings, this eco-friendly solution provides a refreshing and thorough clean while reducing toilet paper usage by up to 80%.",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviewCount: 178,
    images: [
      "/images/bidet-sprayer-1.jpg",
      "/images/bidet-sprayer-2.jpg",
      "/images/bidet-sprayer-3.jpg",
      "/images/bidet-sprayer-installed.jpg"
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