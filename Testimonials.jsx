export const Testimonials = () => {
  const reviews = [
    { 
      text: 'Found affordable medicines for my parents. The price comparison feature helped me save significantly.',
      author: 'Rajesh Kumar',
      location: 'Delhi'
    },
    // Add other testimonials similarly
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <p className="font-bold">{review.author}</p>
              <p className="text-gray-500">{review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
