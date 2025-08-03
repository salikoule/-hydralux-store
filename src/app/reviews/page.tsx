import { 
  Star, 
  ThumbsUp, 
  CheckCircle,
  Filter,
  TrendingUp,
  Award
} from "lucide-react"
import Image from "next/image"

export default function ReviewsPage() {
  const overallRating = 4.8
  const totalReviews = 1376
  
  const ratingBreakdown = [
    { stars: 5, count: 892, percentage: 65 },
    { stars: 4, count: 358, percentage: 26 },
    { stars: 3, count: 96, percentage: 7 },
    { stars: 2, count: 21, percentage: 1.5 },
    { stars: 1, count: 9, percentage: 0.5 }
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "San Francisco, CA",
      rating: 5,
      date: "2024-01-10",
      product: "HydraLux Faucet Filter",
      title: "Game changer for our kitchen!",
      content: "I've been using the HydraLux faucet filter for 3 months now and the difference in water taste is incredible. Installation was super easy - took me less than 5 minutes with no tools required. The chrome finish looks great and matches our kitchen perfectly. My family loves the clean taste and I love knowing we're drinking filtered water.",
      helpful: 28,
      verified: true,
      images: ["/images/products/faucet-filter-main.svg"]
    },
    {
      id: 2,
      name: "Mike R.",
      location: "Denver, CO",
      rating: 5,
      date: "2024-01-08",
      product: "HydraLux Adventure Bottle",
      title: "Perfect for hiking trips",
      content: "Took this bottle on a 5-day backpacking trip in Colorado. Filtered water from streams and lakes without any issues. The flow rate is great and the bottle is really well built. Lightweight but feels durable. The carabiner clip is super handy for attaching to my pack.",
      helpful: 22,
      verified: true,
      images: []
    },
    {
      id: 3,
      name: "Emma L.",
      location: "Austin, TX",
      rating: 5,
      date: "2024-01-05",
      product: "HydraLux Shower Head Filter",
      title: "My skin and hair feel amazing!",
      content: "I have sensitive skin and this shower head has made such a difference. The water pressure is noticeably better and my skin doesn't feel dry after showering anymore. My hair is softer too. Easy to install and the different spray settings are great.",
      helpful: 34,
      verified: true,
      images: []
    },
    {
      id: 4,
      name: "David K.",
      location: "Seattle, WA",
      rating: 4,
      date: "2024-01-02",
      product: "HydraLux Bidet Sprayer",
      title: "Great upgrade for bathroom hygiene",
      content: "Installation was straightforward and the dual nozzles work perfectly. The pressure control is very precise. Only minor complaint is that I wish the control panel was a bit more intuitive, but overall very happy with this purchase.",
      helpful: 19,
      verified: true,
      images: []
    },
    {
      id: 5,
      name: "Jennifer T.",
      location: "Miami, FL",
      rating: 5,
      date: "2023-12-28",
      product: "HydraLux Faucet Filter",
      title: "Excellent customer service too!",
      content: "Not only is the product fantastic, but when I had a question about filter replacement, their customer service was incredibly helpful. The filter itself works great - water tastes clean and fresh. The indicator light is very helpful for knowing when to replace.",
      helpful: 15,
      verified: true,
      images: []
    },
    {
      id: 6,
      name: "Alex B.",
      location: "Portland, OR",
      rating: 4,
      date: "2023-12-25",
      product: "HydraLux Adventure Bottle",
      title: "Good for travel, great filtration",
      content: "Used this bottle during my trip to Southeast Asia. Felt confident drinking tap water after filtering. The bottle is a bit heavy when full, but the peace of mind is worth it. Filtration is excellent and removes the chlorine taste completely.",
      helpful: 12,
      verified: true,
      images: []
    }
  ]

  const filters = ["All Products", "Faucet Filter", "Adventure Bottle", "Shower Head", "Bidet Sprayer"]
  const sortOptions = ["Most Recent", "Most Helpful", "Highest Rated", "Lowest Rated"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-blue-100">
            See what our customers are saying about HydraLux products
          </p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Overall Rating */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <span className="text-5xl font-bold text-gray-900 mr-2">{overallRating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(overallRating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-2">Based on {totalReviews.toLocaleString()} reviews</p>
                <div className="flex items-center justify-center lg:justify-start">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-medium">Top Rated Brand</span>
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating Breakdown</h3>
                <div className="space-y-3">
                  {ratingBreakdown.map((rating) => (
                    <div key={rating.stars} className="flex items-center">
                      <div className="flex items-center w-20">
                        <span className="text-sm font-medium text-gray-700 mr-1">{rating.stars}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${rating.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">
                        {rating.count} ({rating.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {filters.map(filter => (
                  <option key={filter} value={filter}>{filter}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="font-semibold text-gray-900 mr-2">{review.name}</h4>
                        {review.verified && (
                          <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified Purchase
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                    {review.product}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{review.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{review.content}</p>
                </div>

                {review.images.length > 0 && (
                  <div className="flex space-x-2 mb-4">
                    {review.images.map((image, index) => (
                      <div key={index} className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt="Review image"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Helpful ({review.helpful})
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Your HydraLux Experience
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Help other customers by sharing your honest review
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Write a Review
          </button>
        </div>
      </section>
    </div>
  )
}